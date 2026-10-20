import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import test from "node:test";
import ts from "typescript";

function loadTypescript(path, imports = {}) {
  const loadedModule = { exports: {} };
  const source = ts.transpileModule(fs.readFileSync(path, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  vm.runInNewContext(source, {
    module: loadedModule,
    exports: loadedModule.exports,
    require: (name) => {
      assert.ok(Object.hasOwn(imports, name), `Unexpected import: ${name}`);
      return imports[name];
    },
    URL,
  }, { filename: path });
  return loadedModule.exports;
}

const { brandInfo } = loadTypescript("src/lib/data.ts");
const { getContactBridgeUrl, getWhatsAppBusinessUrl } = loadTypescript("src/lib/whatsapp.ts", {
  "@/lib/data": { brandInfo },
});

test("WhatsApp from header, product, contact and floating actions opens the configured business rather than another form", () => {
  for (const placement of ["header", "floating_whatsapp", "product_conversion_panel", "contact_page_quote_card"]) {
    const url = new URL(getContactBridgeUrl("Please review my project.", { placement, pagePath: "/contact" }));
    assert.equal(url.origin, "https://wa.me");
    assert.equal(url.pathname, `/${brandInfo.whatsapp.replace(/\D/g, "")}`);
    assert.equal(url.searchParams.has("wa_message"), false);
    assert.match(url.searchParams.get("text"), /Please review my project\./);
  }
});

test("multilingual product and quotation context survive URL encoding without becoming parameters", () => {
  const message = "Please quote grey & red tiles / 样品?";
  const context = { product: "Office 50×50 & grey", quantity: "800 m²", country: "Philippines", pagePath: "/products/carpet-tiles/nylon-office-carpet-tile", intent: "project_quote", placement: "product_conversion_panel" };
  const url = new URL(getContactBridgeUrl(message, context));
  assert.deepEqual([...url.searchParams.keys()], ["text"]);
  const text = url.searchParams.get("text");
  assert.ok(text.startsWith(message));
  for (const value of Object.values(context)) assert.ok(text.includes(value));
});

test("legacy bridge destination and new direct destination share the same business and message", () => {
  const context = { product: "Cinema carpet", placement: "contact_bridge", pagePath: "/contact" };
  assert.equal(getContactBridgeUrl("Hello", context), getWhatsAppBusinessUrl("Hello", context));
  assert.equal(new URL(getContactBridgeUrl("Hello")).searchParams.get("text"), "Hello");
});
