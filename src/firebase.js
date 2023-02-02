// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyArI4E4eeHlxevx0ZgSeQpRxwbXP2HmniU",
    authDomain: "tsec-hacks-6e88b.firebaseapp.com",
    projectId: "tsec-hacks-6e88b",
    storageBucket: "tsec-hacks-6e88b.appspot.com",
    messagingSenderId: "571372438189",
    appId: "1:571372438189:web:d0620515d4f045833cfc24"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);