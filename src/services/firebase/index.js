import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBOgRPhcYBT-tY9nJkYPkI9YXdD5jTV5fQ",
  authDomain: "gs-clone.firebaseapp.com",
  projectId: "gs-clone",
  storageBucket: "gs-clone.appspot.com",
  messagingSenderId: "25307326016",
  appId: "1:25307326016:web:2ca469bec0a4d2265021a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);