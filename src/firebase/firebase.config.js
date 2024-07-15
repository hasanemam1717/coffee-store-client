// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVOnHWiAi0kv9WdSMdIUf0twjvAZHDB84",
  authDomain: "coffee-store-15aa0.firebaseapp.com",
  projectId: "coffee-store-15aa0",
  storageBucket: "coffee-store-15aa0.appspot.com",
  messagingSenderId: "35219538263",
  appId: "1:35219538263:web:d8cdf77b19fe1a11f9be12",
  measurementId: "G-XFGJ6JT5WR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;