import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAOh3YxRyd1Sbd1DFgRlZDsEe-rqLdyA4k",
    authDomain: "do-chat-e2aa5.firebaseapp.com",
    projectId: "do-chat-e2aa5",
    storageBucket: "do-chat-e2aa5.appspot.com",
    messagingSenderId: "666281311428",
    appId: "1:666281311428:web:de6934099535a4f568dd91"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();