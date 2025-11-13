// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDkJszVFTb7z6tEAjtHSlvdwVv0PzkgIDQ",
    authDomain: "investmentuiux.firebaseapp.com",
    projectId: "investmentuiux",
    storageBucket: "investmentuiux.firebasestorage.app",
    messagingSenderId: "882995402077",
    appId: "1:882995402077:web:ca2519a5d18de2c2eec4b4",
    measurementId: "G-4TGF7WGQTH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
