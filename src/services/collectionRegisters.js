// CollectionRegisters.js
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase"; // Importar db desde firebase.js

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
