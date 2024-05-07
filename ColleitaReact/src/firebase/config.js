// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDw5G4sYb-A1MhP9A1LCm_ZVGemhD-ddMg",
  authDomain: "a-colleita-cddf0.firebaseapp.com",
  projectId: "a-colleita-cddf0",
  storageBucket: "a-colleita-cddf0.appspot.com",
  messagingSenderId: "546202830168",
  appId: "1:546202830168:web:6593219e6a57ba3b17912d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);