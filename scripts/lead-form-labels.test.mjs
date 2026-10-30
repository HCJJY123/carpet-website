import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
const require = createRequire(import.meta.url);
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const path = 'src/components/LeadCaptureForm.tsx';
const source = fs.readFileSync(path, 'utf8');
const original = execFileSync('git', ['show', '74c3369b4692d2e0f7994151040e22a39cb1a30a:' + path], { encoding: 'utf8' });
const normalized = source.replace('useEffect, useId, useRef, useState', 'useEffect, useRef, useState')
  .replace('  const fieldIdPrefix = useId();\n  const fieldId = (name: string) => `${fieldIdPrefix}-${name}`;\n', '')
  .replace(/ htmlFor=\{fieldId\("[^"]+"\)\}/g, '')
  .replace(/id=\{fieldId\("[^"]+"\)\} /g, '');
assert.equal(normalized, original, 'Only useId/label associations may change; all business logic must match the production baseline');
const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true } }).outputText;
const mod = { exports: {} };
vm.runInNewContext(code, { module: mod, exports: mod.exports, require: (name) => {
  if (name === 'react' || name === 'react/jsx-runtime') return require(name);
  if (name === 'next/navigation') return { useRouter: () => ({ push() { throw new Error('No navigation permitted in static test'); } }) };
  if (name === 'next/link') return { __esModule: true, default: ({ children, ...props }) => React.createElement('a', props, children) };
  if (name.startsWith('@/lib/')) return {};
  throw new Error('Unexpected import: ' + name);
}});
const Form = mod.exports.default;
for (const variant of ['full', 'quick', 'sample']) {
  const props = { formName: 'label_test_' + variant, variant, submitLabel: 'Send inquiry', productDefault: 'Custom Axminster 80/20 Wool-Nylon Hotel Carpet' };
  // Render two instances to ensure that IDs cannot collide across forms.
  const html = renderToStaticMarkup(React.createElement(React.Fragment, null, React.createElement(Form, props), React.createElement(Form, props)));
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(ids.length, new Set(ids).size, variant + ' unique instance IDs');
  const labels = [...html.matchAll(/<label\b[^>]*for="([^"]+)"[^>]*>([\s\S]*?)<\/label>/g)];
  assert(labels.length >= 10, variant + ' has persistent labels');
  for (const [, id, text] of labels) {
    assert(ids.includes(id), 'label must point to rendered input: ' + id);
    assert(text.replace(/<[^>]+>/g, '').trim(), 'label must be non-empty');
  }
  for (const m of html.matchAll(/<(input|select|textarea)\b([^>]+)>/g)) {
    if (/type="hidden"|name="_gotcha"/.test(m[2])) continue;
    if (/type="radio"/.test(m[2])) {
      assert(html.slice(0, m.index).lastIndexOf('<label') > html.slice(0, m.index).lastIndexOf('</label>'), 'sample radio retains implicit wrapping label');
      continue;
    }
    const id = m[2].match(/\sid="([^"]+)"/)?.[1];
    assert(id && labels.some(l => l[1] === id), variant + ' each visible control must have label');
  }
  assert(html.includes('Custom Axminster 80/20 Wool-Nylon Hotel Carpet'), 'product prefill preserved');
  console.log('PASS', variant, labels.length / 2, 'labels per instance, unique IDs and prefill');
}
console.log('PASS exact business-logic invariant; no requests or real submission performed');
