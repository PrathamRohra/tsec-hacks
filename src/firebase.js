// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAOp78G5_SmFt20hycBYkKwMZovPqGjhG8",

    authDomain: "saathi-6e34b.firebaseapp.com",

    projectId: "saathi-6e34b",

    storageBucket: "saathi-6e34b.appspot.com",

    messagingSenderId: "1020977481241",

    appId: "1:1020977481241:web:e436035780f956b39a4c88",
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);