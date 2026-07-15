import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey:
    process.env.NEXT_PUBLIC_GBARBER_FIREBASE_API_KEY ||
    "AIzaSyDWekViME0_KzJmciJ_upj-koxHdWcOgWs",
  authDomain:
    process.env.NEXT_PUBLIC_GBARBER_FIREBASE_AUTH_DOMAIN ||
    "gpragas.firebaseapp.com",
  projectId:
    process.env.NEXT_PUBLIC_GBARBER_FIREBASE_PROJECT_ID || "gpragas",
  storageBucket:
    process.env.NEXT_PUBLIC_GBARBER_FIREBASE_STORAGE_BUCKET ||
    "gpragas.firebasestorage.app",
  messagingSenderId:
    process.env.NEXT_PUBLIC_GBARBER_FIREBASE_MESSAGING_SENDER_ID ||
    "206713090720",
  appId:
    process.env.NEXT_PUBLIC_GBARBER_FIREBASE_APP_ID ||
    "1:206713090720:web:d958cb0bb3eab2118acfc5",
};

const app =
  getApps().find((currentApp) => currentApp.name === "gbarber-booking") ||
  initializeApp(firebaseConfig, "gbarber-booking");

export const bookingDb = getFirestore(app);

export const configuredBarbershopId =
  process.env.NEXT_PUBLIC_GBARBER_BARBEARIA_ID?.trim() || "";
