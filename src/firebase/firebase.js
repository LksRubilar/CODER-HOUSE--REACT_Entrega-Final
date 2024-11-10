// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfs53WvydMadA6j20dQ4MmxbNYzgkaWX4",
  authDomain: "entrega-final-react-173ab.firebaseapp.com",
  projectId: "entrega-final-react-173ab",
  storageBucket: "entrega-final-react-173ab.appspot.com",
  messagingSenderId: "583193565184",
  appId: "1:583193565184:web:143728db6170c3d00460e5",
};

// Inicializar Firebase y Firestore solo una vez
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
