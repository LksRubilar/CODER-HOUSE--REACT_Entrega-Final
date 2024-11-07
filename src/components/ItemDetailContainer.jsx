// ItemDetailContainer.jsx
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Button from "./Button";
import StockCount from "./StockCount";
import Loading from "./Loading";
import { getProductById } from "../services/collectionRegisters";
import { CartContext } from "../context/CartProvider"; // Importar el contexto

export default function ItemDetailContainer() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext); // Acceder a addToCart desde el contexto
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleCountChange = (newCount) => {
    setCount(newCount);
  };

  const handleAddToCart = (quantity) => {
    if (product && quantity > 0) {
      addToCart(product, quantity); // Llama a addToCart del contexto con el producto y la cantidad
    }
  };

  return (
    <div className="card-grid_detail">
      {loading ? (
        <Loading />
      ) : product ? (
        <div>
          <div className="card-detail">
            <img src={`../src/img/${product.image}.jpg`} alt="" />
          </div>
          <div className="card-info">
            <h2>{product.title}</h2>
            <h3>Precio: ${product.price}</h3>
            <p>{product.description}</p>
            <Button
              onCountChange={handleCountChange}
              onAddToCart={handleAddToCart}
            />
            <StockCount initialStock={product.stock} count={count} />
          </div>
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
}
