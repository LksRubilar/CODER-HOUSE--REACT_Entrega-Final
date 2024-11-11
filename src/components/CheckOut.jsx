// CheckOut.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrderById } from "../services/orderRegisters";

export default function CheckOut() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const orderData = await getOrderById(orderId);
        setOrder(orderData);
      } catch (error) {
        console.error("Error al obtener la orden:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [orderId]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!order) {
    return <p>No se encontró la orden.</p>;
  }

  return (
    <div className="checkout">
      <h2 className="summary-title">Resumen del Pedido</h2>
      <div className="checkout-summary">
        <div className="summary-code">
          <h3 className="summary-subtt">Código del pedido:</h3>
          <h3 className="summary-subtt">
            <span>{order.id}</span>
          </h3>
        </div>

        <div className="summary-total">
          <h3 className="summary-subtt">Productos:</h3>
          <ul>
            {order.items.map((item) => (
              <li key={item.id}>
                <p>
                  <span>
                    {item.title} - {item.quantity} x ${item.price}
                  </span>
                </p>
              </li>
            ))}
          </ul>
          <p>Total de Productos: {order.totalProducts}</p>
          <p>Total de la Compra: ${order.totalPrice.toFixed(2)}</p>
        </div>

        <div className="summary-customer">
          <h3 className="summary-subtt">Información del comprador:</h3>
          <p>
            Nombre: {order.customerData.nombre} {order.customerData.apellidos}
          </p>
          <p>Teléfono: {order.customerData.telefono}</p>
          <p>Email: {order.customerData.email}</p>
        </div>
        <h2 className="summary-close">Gracias por su compra</h2>
      </div>
    </div>
  );
}
