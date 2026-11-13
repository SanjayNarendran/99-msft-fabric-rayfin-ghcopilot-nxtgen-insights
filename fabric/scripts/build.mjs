// Builds the Rayfin static site in dist/ from the deck at the repository root. The deck is one self-contained file,
// so the build copies it and the font licence it embeds.
import { cpSync, existsSync, mkdirSync, rmSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const app = join(dirname(fileURLToPath(import.meta.url)), '..');
const repo = join(app, '..');
const out = join(app, 'dist');

if (existsSync(out)) rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
for (const f of ['index.html', 'FiraSans-LICENSE.txt']) cpSync(join(repo, f), join(out, f));
console.log(`Built dist/index.html (${(statSync(join(out, 'index.html')).size / 1024 / 1024).toFixed(1)} MB)`);
