// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFireDatabase } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
import { getTorage } from "firebase/torage";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-8cc43.firebaseapp.com",
  projectId: "reactchat-8cc43",
  storageBucket: "reactchat-8cc43.appspot.com",
  messagingSenderId: "815980289439",
  appId: "1:815980289439:web:3c738c8d4e836773ea31aa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFireDatabase();
export const torage = getTorage();
