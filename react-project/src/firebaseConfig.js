// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider, signInWithPopup} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqe8T7sfNEmhr19cfyHIMOg593wLm9fWM",
  authDomain: "demovideo-6016e.firebaseapp.com",
  projectId: "demovideo-6016e",
  storageBucket: "demovideo-6016e.firebasestorage.app",
  messagingSenderId: "1027053779226",
  appId: "1:1027053779226:web:a3c71ec26d9605783994a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider= new GoogleAuthProvider()

export{auth, provider, signInWithPopup}