// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';
import {getStorage} from "@firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA79H7Az1jLOsSG_MVVNaaoU7CI5oK6dME",
  authDomain: "localket.firebaseapp.com",
  projectId: "localket",
  storageBucket: "localket.appspot.com",
  messagingSenderId: "923784017759",
  appId: "1:923784017759:web:c5eaefb425747d3b3de8ea",
  measurementId: "G-621DX08RL8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);