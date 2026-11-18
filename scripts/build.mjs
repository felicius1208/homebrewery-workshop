// Baut index.html aus src/. Braucht nur Node 18 oder neuer, keine Pakete.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = f => fs.readFileSync(path.join(root, 'src', f), 'utf8');
const out = read('app.template.html')
  .replace('/*__HBFM__*/', () => read('hbfm.bundle.js').replace(/<\/script/gi, '<\\/script'))
  .replace('/*__THEME__*/', () => JSON.stringify(read('theme.css')))
  .replace('/*__FONTS__*/', () => JSON.stringify(read('fonts.css')))
  .replace('/*__STANDALONE__*/', () => 'true');
fs.writeFileSync(path.join(root, 'index.html'), out);
console.log('index.html written (' + (out.length / 1024).toFixed(0) + ' KB)');
