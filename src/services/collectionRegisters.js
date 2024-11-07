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
  apiKey: "AIzaSyBfs53WvydMadA6j20dQ4MmxbNYzgkaWX4",
  authDomain: "entrega-final-react-173ab.firebaseapp.com",
  projectId: "entrega-final-react-173ab",
  storageBucket: "entrega-final-react-173ab.appspot.com",
  messagingSenderId: "583193565184",
  appId: "1:583193565184:web:143728db6170c3d00460e5",
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
