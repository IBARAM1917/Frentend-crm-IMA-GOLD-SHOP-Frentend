// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "iba-gold-shop.firebaseapp.com",
  projectId: "iba-gold-shop",
  storageBucket: "iba-gold-shop.appspot.com",
  messagingSenderId: "588760970399",
  appId: "1:588760970399:web:08c1a65791913488585eaa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);