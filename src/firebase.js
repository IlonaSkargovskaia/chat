import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6goT3O0B-Vl9pgBvGjvQkocRpijMeCzQ",
  authDomain: "chat-c1c8b.firebaseapp.com",
  projectId: "chat-c1c8b",
  storageBucket: "chat-c1c8b.appspot.com",
  messagingSenderId: "730087403159",
  appId: "1:730087403159:web:4a5153702fc9ebb38143d2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);