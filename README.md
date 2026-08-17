# AMACO EIMS ProSystem

Enterprise Insurance Management System for African Merchant Assurance Company (AMACO) — claims, underwriting, settlement and statutory compliance for the Kenyan market.

## Layout

```
backend/     Cloud Functions, Firestore rules and indexes, seed data
frontend/    Next.js 16 app -- the portal and the public site
public/      legacy static build (being replaced, see Migration)
tools/       headless render + UI guards
android/     Capacitor shell
```

Each part has its own `package.json`. The root one only holds repo-wide scripts.

## Running it

| Command | What it does |
|---|---|
| `npm --prefix frontend run dev` | Next app on :3000 |
| `npm run dev` | Firebase emulators (hosting :8282, Firestore :8085, functions :5001, UI :4005) |
| `npm run seed` | Loads `backend/seed/seed.js` into the Firestore emulator |
| `npm run check` | Legacy UI guards + headless render of the legacy build |
| `npm --prefix frontend run check` | Headless render of the Next app, with screenshots |
| `npm run check:rules` | Asserts backend rules still match the frontend models |

## Checks

Nothing visual is considered done until it has been rendered and looked at. `tools/check-render.js` and `frontend/check-render.js` drive the real routes in headless Edge (`puppeteer-core` against the installed browser — no Chromium download), assert computed layout, and write screenshots to `screenshots/`.

They also run `tools/perf-probe.js`, which fails if an idle page exceeds 30 style recalculations. That guard exists because animating a non-composited property once cost the whole app its frame budget; see the CSS performance notes at the end of `frontend/src/app/globals.css`.

## Migration status

The app is mid-port from the legacy static build in `public/` to the Next app in `frontend/`.

- **Ported:** public landing, login, portal shell, executive dashboard, master claims directory, claim registration (FNOL).
- **Pending:** 21 views, which still resolve to a placeholder route in the Next app and still run fully in `public/`.

`public/` stays until parity is reached — deleting it earlier would remove 21 working screens. Firebase hosting still serves it; that switches to the Next build in the same change that removes it.

## Data

`backend/seed/seed.js` is the single source of demo data (23 datasets). The Next app imports it directly at runtime; `npm run seed` pushes the same rows into Firestore for the Cloud Functions. See `backend/README.md`.
