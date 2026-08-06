# ☂️ EIMS ProSystem - Firebase Ready Project

African Merchant Assurance Company Ltd (AMACO Insurance)
County Government Enterprise Insurance Management System (EIMS)

---

## 🚀 Project Structure

```
EIMS ProSystem/
├── firebase.json               # Firebase Hosting & Firestore configuration
├── .firebaserc                 # Project alias target configuration
├── firestore.rules             # Secure Cloud Firestore rules
├── firestore.indexes.json      # Cloud Firestore indexes
├── package.json                # npm scripts & dependency manifest
├── README.md                   # Setup guide
└── public/                     # Public web root deployed to Firebase Hosting
    ├── index.html              # EIMS Single-Page Application UI (24 views, 7 SVG accordions)
    ├── index.css               # Design System & Styling
    ├── app.js                  # State Engine, ANPR, QR Engine & Logic
    ├── firebase-config.js      # Firebase Web SDK initialization
    ├── qrcode.min.js           # ISO 18004 QR Code engine
    └── amaco_logo.png          # Official logo
```

---

## 🛠️ Local Development Commands

### 1. Run Local Firebase Hosting Server
```bash
npm run serve
```
*Access live application on:* `http://localhost:8282`

### 2. Start Firebase Local Emulators (Firestore & Hosting)
```bash
npm run dev
```

---

## ☁️ Deployment Commands

### Deploy Entire Project to Firebase
```bash
npm run deploy
```

### Deploy Hosting Only
```bash
npm run deploy:hosting
```
