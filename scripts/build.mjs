import {build} from 'esbuild';
import {mkdir,writeFile,rm} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
process.chdir(fileURLToPath(new URL('..',import.meta.url)));
await mkdir('docs/assets',{recursive:true});
await mkdir('docs/aurelia',{recursive:true});
await mkdir('.build',{recursive:true});
await build({entryPoints:['src/client.tsx'],outfile:'docs/assets/site.js',bundle:true,minify:true,jsx:'automatic',format:'esm',platform:'browser',target:['es2020'],define:{'process.env.NODE_ENV':'"production"'},legalComments:'linked'});
await build({entryPoints:['src/render.tsx'],outfile:'.build/render.mjs',bundle:true,jsx:'automatic',format:'esm',platform:'node',packages:'external',loader:{'.css':'empty'}});
const {render}=await import('../.build/render.mjs?build='+Date.now());
for (const page of ['home','aurelia']) {
 const prefix=page==='home'?'./':'../';
 const html='<!doctype html><html lang="ja"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>MAYA WASHIYA — Visual Retoucher / Creator</title><meta name="description" content="映像・画像のレタッチを軸に、Beauty領域を中心としたVisual制作からWeb・デジタル領域まで。MAYA WASHIYAのポートフォリオ。"><link rel="icon" href="'+prefix+'favicon.svg"><link rel="stylesheet" href="'+prefix+'assets/site.css"></head><body class="antialiased" data-page="'+page+'"><div id="root">'+render(page)+'</div><script type="module" src="'+prefix+'assets/site.js"></script></body></html>';
 await writeFile(page==='home'?'docs/index.html':'docs/aurelia/index.html',html);
}
await writeFile('docs/.nojekyll','');
await rm('.build',{recursive:true,force:true});
console.log('Built docs/: ready for GitHub Pages (main /docs). Media preserved.');
