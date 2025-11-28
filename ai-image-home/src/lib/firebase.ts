// Firebase client initializer
// Only used on the client; avoids analytics on the server.

import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Analytics must only be imported/used in the browser
// to avoid accessing window during SSR.
let analytics: import("firebase/analytics").Analytics | undefined;

const firebaseConfig = {
  apiKey: "AIzaSyDOOuoUN4fJsK6BoxJ4hVKpo9UDtwkpYgg",
  authDomain: "image-editor-fda6f.firebaseapp.com",
  projectId: "image-editor-fda6f",
  storageBucket: "image-editor-fda6f.firebasestorage.app",
  messagingSenderId: "700645993218",
  appId: "1:700645993218:web:0b18fce9b3ddc7d40ff01b",
  measurementId: "G-PFP4C76E4M",
};

function createFirebaseApp(): FirebaseApp {
  return !getApps().length ? initializeApp(firebaseConfig) : getApp();
}

export const app = createFirebaseApp();
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export async function initAnalytics() {
  if (typeof window === "undefined") return undefined;
  try {
    if (!analytics) {
      const { getAnalytics, isSupported } = await import("firebase/analytics");
      const supported = await isSupported();
      if (!supported) return undefined;
      analytics = getAnalytics(app);
    }
    return analytics;
  } catch {
    return undefined;
  }
}
