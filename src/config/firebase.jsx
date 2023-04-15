import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC1bGsuWT5YNG-JSXLj3Ta3iXyktS52qEQ",
  authDomain: "iconcile.firebaseapp.com",
  projectId: "iconcile",
  storageBucket: "iconcile.appspot.com",
  messagingSenderId: "392344099794",
  appId: "1:392344099794:web:52b6af924c463cc755860b",
  measurementId: "G-QCDMQT1PZK"
};

const app = initializeApp(firebaseConfig);

// authentication i.e., user signin & signup
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// database
export const db = getFirestore(app);
