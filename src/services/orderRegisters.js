// orderRegisters.js
import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

// Función para cargar una orden
export const cargarOrden = async (orderData) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), orderData);
    return docRef.id;
  } catch (error) {
    throw error;
  }
};

// Nueva función para obtener la orden por ID
export const getOrderById = async (orderId) => {
  try {
    const docRef = doc(db, "orders", orderId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
  } catch (error) {
    throw error;
  }
};
