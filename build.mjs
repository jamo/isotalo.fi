import { mkdir, copyFile, cp, rm } from 'node:fs/promises';
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
for (const file of ['index.html', 'privacy.html', 'fonts.css', 'style.css', 'script.js', 'favicon.svg', '_headers', 'robots.txt', 'sitemap.xml']) {
  await copyFile(file, `dist/${file}`);
}
await cp('assets', 'dist/assets', { recursive: true });
console.log('Built company site → dist/');
