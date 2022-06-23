// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYZXaR4TzObyBTR0Pk2aSG_ENqbsiCGhc",
  authDomain: "quora-9c0a6.firebaseapp.com",
  projectId: "quora-9c0a6",
  storageBucket: "quora-9c0a6.appspot.com",
  messagingSenderId: "732953947816",
  appId: "1:732953947816:web:8111a60e75068c1f5c5c9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;