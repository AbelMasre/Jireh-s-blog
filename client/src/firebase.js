// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "jireh-blog.firebaseapp.com",
  projectId: "jireh-blog",
  storageBucket: "jireh-blog.appspot.com",
  messagingSenderId: "1067149913910",
  appId: "1:1067149913910:web:c0bafa0411277bfc104d97",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
