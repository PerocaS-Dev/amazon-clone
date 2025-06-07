import firebase from 'firebase/compact/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJzb3QPVZLm9OLWuAFfu_WvLY5aqtrKYs",
    authDomain: "clone-25dd5.firebaseapp.com",
    projectId: "clone-25dd5",
    storageBucket: "clone-25dd5.firebasestorage.app",
    messagingSenderId: "593004651923",
    appId: "1:593004651923:web:e3232940c1a493522e7466",
    measurementId: "G-35Z4JPLD0P"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export{db, auth};