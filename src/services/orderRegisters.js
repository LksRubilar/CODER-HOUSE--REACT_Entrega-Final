import {
  collection,
  addDoc,
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBfs53WvydMadA6j20dQ4MmxbNYzgkaWX4",
  authDomain: "entrega-final-react-173ab.firebaseapp.com",
  projectId: "entrega-final-react-173ab",
  storageBucket: "entrega-final-react-173ab.appspot.com",
  messagingSenderId: "583193565184",
  appId: "1:583193565184:web:143728db6170c3d00460e5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const cargarOrden = async (orderData) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), orderData);
    return docRef.id;
  } catch (error) {
    throw error;
  }
};

export const checkOrderExists = async (orderId) => {
  try {
    const docRef = doc(db, "orders", orderId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};
