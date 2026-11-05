import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import ts from 'typescript';
const nativeRequire=createRequire(import.meta.url);
function loader(ref) {
 const cache=new Map();
 function load(file){
  if(cache.has(file))return cache.get(file).exports;
  const source=ref?execFileSync('git',['show',`${ref}:${file}`],{encoding:'utf8',maxBuffer:16*1024*1024}):fs.readFileSync(file,'utf8');
  const output=ts.transpileModule(source,{compilerOptions:{target:ts.ScriptTarget.ES2020,module:ts.ModuleKind.CommonJS,esModuleInterop:true,jsx:ts.JsxEmit.ReactJSX}}).outputText;
  const record={exports:{}};cache.set(file,record);
  function require(spec){
   if(!spec.startsWith('@/')&&!spec.startsWith('.'))return nativeRequire(spec);
   let target=spec.startsWith('@/')?'src/'+spec.slice(2):path.posix.join(path.posix.dirname(file),spec);
   if(!path.extname(target))target+='.ts';
   return load(target);
  }
  vm.runInNewContext(`(function(require,module,exports){${output}\n})`,{console,URL,Response,process},{filename:file})(require,record,record.exports);
  return record.exports;
 }
 return load;
}
const baseline=loader('922fb225644d660a830fbcc24e41e35e0a08e014');
const current=loader();
const evidence=JSON.parse(fs.readFileSync('ops/sitemap-lastmod-evidence-20261105.json','utf8')).entries;
const normalize=(url)=>url.replace(/\/$/,'');
const entries=(xml)=>[...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m)=>({url:m[1].match(/<loc>(.*?)<\/loc>/)[1],date:m[1].match(/<lastmod>(.*?)<\/lastmod>/)[1]}));
test('only evidence-backed dates differ in root sitemap; all other fields preserved',()=>{
 const before=baseline('src/lib/sitemap-data.ts').getSitemapEntries();
 const after=current('src/lib/sitemap-data.ts').getSitemapEntries();
 assert.equal(after.length,289);assert.deepEqual(JSON.parse(JSON.stringify(after.map(entry=>({...entry,lastModified:undefined})))),JSON.parse(JSON.stringify(before.map(entry=>({...entry,lastModified:undefined})))));
 for(let i=0;i<after.length;i++){
  const p=new URL(after[i].url).pathname;
  assert.equal(after[i].lastModified,evidence[p]?.date??before[i].lastModified);
 }
});
test('all seven split sitemaps retain loc/frequency/priority and agree with root dates',async()=>{
 const roots=new Map(current('src/lib/sitemap-data.ts').getSitemapEntries().map(x=>[normalize(x.url),x.lastModified]));
 for(const route of ['sitemaps/pages.xml','sitemaps/products.xml','sitemaps/projects.xml','sitemaps/resources.xml','sitemaps/blog.xml','sitemap-ru.xml','sitemap-markets.xml']){
  const f=`src/app/${route}/route.ts`;const oldResponse=baseline(f).GET();const newResponse=current(f).GET();
  assert.deepEqual([...newResponse.headers],[...oldResponse.headers]);
  const oldXml=await oldResponse.text();const newXml=await newResponse.text();
  assert.equal(newXml.replace(/<lastmod>.*?<\/lastmod>/g,'<lastmod/>'),oldXml.replace(/<lastmod>.*?<\/lastmod>/g,'<lastmod/>'),route);
  for(const entry of entries(newXml))assert.equal(entry.date,roots.get(normalize(entry.url)),`${route} ${entry.url}`);
 }
});
test('registry is explicit, evidence-backed and preserves unrelated dates',()=>{
 const {sitemapLastModified}=current('src/lib/sitemap-lastmod.ts');
 assert.equal(Object.keys(evidence).length,34);
 for(const [p,e] of Object.entries(evidence)){
  assert.match(e.date,/^\d{4}-\d{2}-\d{2}$/);assert.ok(e.date<='2026-11-05');assert.ok(e.commit&&e.reason);
  assert.equal(sitemapLastModified(p,'old'),e.date);assert.equal(sitemapLastModified('https://www.vcarpets.com'+p,'old'),e.date);
 }
 assert.equal(sitemapLastModified('/unrelated-page','2026-08-06'),'2026-08-06');
});
