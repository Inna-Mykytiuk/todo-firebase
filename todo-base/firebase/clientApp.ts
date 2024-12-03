// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration using environment variables
const firebaseConfig = {
  apiKey: "AIzaSyDwswPSaTUr-h20nKI-CPWdTs7_COT1MmI",
  authDomain: "firetodo-dd07b.firebaseapp.com",
  projectId: "firetodo-dd07b",
  storageBucket: "firetodo-dd07b.firebasestorage.app",
  messagingSenderId: "160022041715",
  appId: "1:160022041715:web:481c930b8edb91f2580606",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
