// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "free-blog-1124.firebaseapp.com",
  projectId: "free-blog-1124",
  storageBucket: "free-blog-1124.firebasestorage.app",
  messagingSenderId: "930283935912",
  appId: "1:930283935912:web:2a747a8e070c02bc6c4a9d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);