// components/ItemDetailContainer.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "./Button";
import StockCount from "./StockCount";
import Loading from "./Loading";
import { getProductById } from "../services/collectionRegisters";

export default function ItemDetailContainer() {
  const { id } = useParams();
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
            <Button onCountChange={handleCountChange} />
            <StockCount initialStock={product.stock} count={count} />
          </div>
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
}
