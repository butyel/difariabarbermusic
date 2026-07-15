import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

export function getBookingAdminDb() {
  const projectId = process.env.GBARBER_FIREBASE_PROJECT_ID?.trim();
  const clientEmail = process.env.GBARBER_FIREBASE_CLIENT_EMAIL?.trim();
  const privateKey = process.env.GBARBER_FIREBASE_PRIVATE_KEY?.replace(
    /\\n/g,
    "\n",
  );

  if (!projectId || !clientEmail || !privateKey) return null;

  const existingApp = getApps().find(
    (currentApp) => currentApp.name === "gbarber-booking-admin",
  );
  const app =
    existingApp ||
    initializeApp(
      {
        credential: cert({ projectId, clientEmail, privateKey }),
      },
      "gbarber-booking-admin",
    );

  return getFirestore(app);
}

export function getBookingBarbershopId() {
  const barbershopId = process.env.GBARBER_BARBEARIA_ID?.trim() || "";
  return /^[A-Za-z0-9_-]{8,160}$/.test(barbershopId)
    ? barbershopId
    : "";
}
