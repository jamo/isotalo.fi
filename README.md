# Isotalo company site

Independent static landing page for https://isotalo.fi. This repository owns the company site and its Worker configuration. The personal site lives in the separate jarmoisotalo.com repository.

Run commands from this directory:

```sh
npm run dev
npm run build
```

Run `npm ci` once after cloning to install the pinned deployment CLI. The preview is at http://127.0.0.1:4187. The build copies the deployable files to `dist/`.

## Cloudflare Workers

Both company and personal sites deploy to Cloudflare Workers. This company site uses Workers Static Assets; its domain, account, and assets directory are defined in `wrangler.jsonc`.

From this directory:

```sh
npm run deploy
```

The command builds `dist/` and deploys the `isotalo-fi` Worker. Wrangler manages the `isotalo.fi` custom domain automatically. No recurring manual DNS changes are required.

Live site: https://isotalo.fi
Worker preview: https://isotalo-fi.jarmoisotalo.workers.dev
Cloudflare dashboard: https://dash.cloudflare.com/1b78c2c2ad7bb6cc4b3541a647072a22/workers/services/view/isotalo-fi/production

If authentication expires, run `npx wrangler login`.

The original Pages deployment is retained as a rollback copy at https://isotalo-fi.pages.dev; the production domain is served by the Worker. Its former apex CNAME was preserved under `pages-backup.isotalo.fi` to clear the migration conflict; use the pages.dev URL for rollback preview.

Contact links use the address verified in the personal site: jarmo@isotalo.fi. Company branding is “Isotalo”, with the legal name Isotalo Consulting Oy; career references describe Jarmo's employment history, not consultancy clients. No analytics or cookies are installed.
