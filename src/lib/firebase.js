// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAGsDPnQP31MJHo8xle5PjC3wEPNFFXy9A",
  authDomain: "reactchat-8cc43.firebaseapp.com",
  projectId: "reactchat-8cc43",
  storageBucket: "reactchat-8cc43.appspot.com",
  messagingSenderId: "815980289439",
  appId: "1:815980289439:web:3c738c8d4e836773ea31aa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
