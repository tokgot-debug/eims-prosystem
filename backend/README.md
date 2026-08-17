# EIMS Backend

Everything server-side. Nothing in here imports from `frontend/` at runtime.

```
backend/
  functions/     Cloud Functions -- the Firebase deploy source
    index.js     event-triggered, callable and scheduled functions
    rules.js     business rules that must hold server-side
    package.json its own manifest, required by Firebase
  firestore/     security rules and composite indexes
  seed/
    seed.js               the 23 demo datasets, single source of truth
    seed-firestore.mjs    loads them into Firestore
  check-rules.js  guards rules.js against frontend/src/lib/models.js
```

## Commands

Run from the repo root or from here.

| Command | What it does |
|---|---|
| `npm run seed` | Loads `seed/seed.js` into Firestore. Targets the **emulator** (`127.0.0.1:8085`) unless `FIRESTORE_EMULATOR_HOST` says otherwise, so it cannot overwrite production by accident. |
| `npm run check` | Asserts the duplicated rules still agree with the frontend models. |
| `npm run emulators` | Functions + Firestore emulators. |
| `npm run deploy` | Deploys functions and Firestore config. |

## Functions

**Event-triggered** — writes that must cause other writes:

- `onClaimCreated` scores fraud server-side, sets the authoritative triage, and opens an SIU investigation for red-path claims.
- `onClaimStatusChanged` schedules a settlement when a claim is approved and notifies the claimant.
- `onPolicyCreated` computes PHCF, training levy and stamp duty under Cap 487.
- `onPayoutReleased` marks the claim disbursed and writes the notification log.

**Callable** — actions the client must not perform itself:

- `verifyPlate` — NTSA registry lookup; the credential stays server-side.
- `issueCertificate` — AKI digital certificate with a SHA-256 verification payload.
- `settleClaim` — runs in a transaction and reads the amount **from the claim**, so a caller cannot name its own figure, and cannot pay a claim twice.
- `fileIraReturn` — totals active policies for a period and freezes the figures.

**Scheduled** — `dispatchRenewalNotices` daily at 07:00 EAT, `iraSolvencyReminder` monthly.

## The one duplication

`functions/rules.js` restates the triage thresholds, statutory rates, fraud scoring and settlement guard from `frontend/src/lib/models.js`. Firebase deploys `functions/` in isolation, so sharing the module would need a build step for about thirty lines.

`check-rules.js` fails if the two drift. Run it after touching either file — money and fraud scoring disagreeing silently is the failure mode it exists to prevent.

## Seed data

`seed/seed.js` is the single source of demo data. The Next app imports it directly at runtime (`frontend/src/lib/db.js`), and `seed-firestore.mjs` pushes the same rows into Firestore for the functions. Change a dataset once and both follow.
