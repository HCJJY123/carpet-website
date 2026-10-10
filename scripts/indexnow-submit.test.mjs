import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import test from "node:test";
import { MANIFEST_PATH, manifestChanged, readReleaseUrls, verifySitemapMembership, verifyDeploymentCommit, notifyReleaseUrls } from "./indexnow-submit.mjs";

const target = "https://www.vcarpets.com/markets/au/office-carpet-tiles-australia";
const manifest = (urls) => JSON.stringify({ version: 1, release: "fixture-release", urls });

test("only explicit changed URLs are selected, without duplicates", () => {
  assert.deepEqual(readReleaseUrls({ changed: true, manifestText: manifest([target, target]) }), [target]);
  assert.deepEqual(verifySitemapMembership([target], [target, "https://www.vcarpets.com/blog"]), [target]);
});

test("missing, unchanged and empty manifests safely skip", () => {
  assert.deepEqual(readReleaseUrls({ changed: true, manifestText: null }), []);
  assert.deepEqual(readReleaseUrls({ changed: false, manifestText: "not parsed when unchanged" }), []);
  assert.deepEqual(readReleaseUrls({ changed: true, manifestText: manifest([]) }), []);
});

test("invalid manifest structure fails closed", () => {
  for (const text of ["{", "null", '{"version":2,"urls":[]}', '{"version":1,"urls":"all"}']) {
    assert.throws(() => readReleaseUrls({ changed: true, manifestText: text }));
  }
});

test("off-site, unnormalised, query, fragment and credential URLs fail closed", () => {
  for (const url of ["https://example.com/a", "http://www.vcarpets.com/a", "https://vcarpets.com/a", `${target}?q=1`, `${target}#quote`, ` ${target}`, "https://user@www.vcarpets.com/a", "/relative", 42]) {
    assert.throws(() => readReleaseUrls({ changed: true, manifestText: manifest([url]) }));
  }
});

test("a URL absent from the live canonical sitemap is not submitted", () => {
  assert.throws(() => verifySitemapMembership([target], ["https://www.vcarpets.com/blog"]));
});

test("git selection handles squash-style commits, first-parent merges and unrelated docs", () => {
  const cwd = fs.mkdtempSync(path.join(os.tmpdir(), "vcarpets-indexnow-test-"));
  const git = (...args) => execFileSync("git", ["-c", "user.name=IndexNow Test", "-c", "user.email=test@example.invalid", ...args], { cwd, stdio: "pipe" });
  try {
    git("init");
    fs.writeFileSync(path.join(cwd, "README.md"), "Fixture baseline\n");
    git("add", "."); git("commit", "-m", "Baseline");
    const baseBranch = git("branch", "--show-current").toString().trim();
    fs.mkdirSync(path.join(cwd, "ops"));
    fs.writeFileSync(path.join(cwd, MANIFEST_PATH), manifest([target]));
    git("add", "."); git("commit", "-m", "Changed-page release");
    assert.equal(manifestChanged(cwd), true);
    fs.appendFileSync(path.join(cwd, "README.md"), "Unrelated documentation\n");
    git("add", "."); git("commit", "-m", "Unrelated release");
    assert.equal(manifestChanged(cwd), false);
    const sha = git("rev-parse", "HEAD").toString().trim();
    assert.doesNotThrow(() => verifyDeploymentCommit(sha, cwd));
    assert.throws(() => verifyDeploymentCommit("0".repeat(40), cwd));
    git("checkout", "-b", "feature");
    fs.writeFileSync(path.join(cwd, MANIFEST_PATH), JSON.stringify({version:1,release:"second-release",urls:[target]}));
    git("add", "."); git("commit", "-m", "Update same URL in another release");
    git("checkout", baseBranch);
    git("merge", "--no-ff", "feature", "-m", "Merge content release");
    assert.equal(manifestChanged(cwd), true);
  } finally {
    fs.rmSync(cwd, { recursive: true, force: true });
  }
});

test("empty URL lists perform no network requests", async () => {
  assert.equal(await notifyReleaseUrls([], () => { throw new Error("Unexpected network request"); }), 0);
});

test("sitemap fetch failure and missing URLs fail before any submission", async () => {
  for (const response of [new Response("unavailable", {status:503}), new Response('<loc>https://www.vcarpets.com/blog</loc>')]) {
    let calls = 0;
    await assert.rejects(notifyReleaseUrls([target], async (_, options) => {
      calls++;
      assert.equal(options.method, undefined);
      return response;
    }));
    assert.equal(calls, 1);
  }
  await assert.rejects(notifyReleaseUrls([target], async () => { throw new Error("Network unavailable"); }));
});

test("only the explicit canonical URL reaches both endpoints on 200/202 acceptance", async () => {
  const calls = [];
  const accepted = await notifyReleaseUrls([target], async (url, options) => {
    calls.push({url, options});
    if (!options.method) return new Response(`<loc>${target}</loc><loc>https://www.vcarpets.com/blog</loc>`);
    return new Response("", {status: calls.length === 2 ? 200 : 202});
  });
  assert.equal(accepted, 1);
  assert.equal(calls.length, 3);
  assert.deepEqual(calls.slice(1).map(c=>c.url), ["https://api.indexnow.org/indexnow", "https://www.bing.com/indexnow"]);
  for (const {options} of calls.slice(1)) assert.deepEqual(JSON.parse(options.body).urlList, [target]);
});

test("a rejected endpoint response stops without assuming acceptance or retrying", async () => {
  let calls = 0;
  await assert.rejects(notifyReleaseUrls([target], async (_, options) => {
    calls++;
    return !options.method ? new Response(`<loc>${target}</loc>`) : new Response("rejected", {status:429});
  }));
  assert.equal(calls, 2);
});
