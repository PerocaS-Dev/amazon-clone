// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJzb3QPVZLm9OLWuAFfu_WvLY5aqtrKYs",
  authDomain: "clone-25dd5.firebaseapp.com",
  projectId: "clone-25dd5",
  storageBucket: "clone-25dd5.firebasestorage.app",
  messagingSenderId: "593004651923",
  appId: "1:593004651923:web:e3232940c1a493522e7466",
  measurementId: "G-35Z4JPLD0P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }; // Make sure this export is correct
