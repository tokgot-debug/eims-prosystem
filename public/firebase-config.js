import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDJQijVIe0dkWYReEkdIEs60qfYLYJJfwY",
  authDomain: "eims-prosystem.firebaseapp.com",
  projectId: "eims-prosystem",
  storageBucket: "eims-prosystem.firebasestorage.app",
  messagingSenderId: "572169355526",
  appId: "1:572169355526:web:a3e8e3745073699d24de87",
  measurementId: "G-92CN19SZ3Z"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

window.eimsFirebase = { app, db, auth, analytics };
console.log("🔥 Production Firebase Web SDK 10 initialized for eims-prosystem");
