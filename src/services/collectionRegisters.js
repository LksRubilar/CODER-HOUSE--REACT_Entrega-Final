// services/collectionRegisters.js

import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Obtener todos los productos
export const getAllProducts = async () => {
  const products = [];
  const querySnapshot = await getDocs(collection(db, "mockData"));
  querySnapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() });
  });
  return products;
};

// Obtener productos por categoría
export const getProductsByCategory = async (category) => {
  const products = [];
  const q = query(
    collection(db, "mockData"),
    where("category", "==", category)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() });
  });
  return products;
};

// Obtener producto por ID
export const getProductById = async (id) => {
  const docRef = doc(db, "mockData", id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};
