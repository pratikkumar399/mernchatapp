// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration

{/*
    1. FireBase Config is a JSON object that contains all the information that is required to connect our app to the Firebase project.
*/}

const firebaseConfig = {
    apiKey: "AIzaSyDz7rleJJj-Jk__mJNZ8143ziEELueAgrQ",
    authDomain: "nexuschat-c3292.firebaseapp.com",
    projectId: "nexuschat-c3292",
    storageBucket: "nexuschat-c3292.appspot.com",
    messagingSenderId: "593885449223",
    appId: "1:593885449223:web:25395bca5c2d2bf7316ea2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();