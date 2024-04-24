// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwXVk1wfduBq44FXnNpqaSDR2RchNmwQw",
  authDomain: "tiendazapatos-68b6b.firebaseapp.com",
  projectId: "tiendazapatos-68b6b",
  storageBucket: "tiendazapatos-68b6b.appspot.com",
  messagingSenderId: "1092093822687",
  appId: "1:1092093822687:web:f78ec57edd5f97b9d94b6a",
  measurementId: "G-XEJY4YM0N5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);