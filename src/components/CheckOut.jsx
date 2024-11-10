import { useLocation, useParams } from "react-router-dom";

export default function CheckOut() {
  const location = useLocation();
  const { cartItems, totalProducts, totalPrice } = location.state || {};
  const { orderId } = useParams();

  if (!cartItems) {
    return <p>No hay productos en la orden.</p>;
  }

  return (
    <div className="checkout">
      <h2 className="summary-title">Resumen del Pedido</h2>
      <div className="checkout-summary">
        <div className="summary-code">
          <h3 className="summary-subtt">Codigo del pedido: </h3>
          <h3 className="summary-subtt">{orderId}</h3>
        </div>

        <div className="summary-total">
          <h3 className="summary-subtt">Productos:</h3>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <p>
                  {item.title} - {item.quantity} x ${item.price}
                </p>
              </li>
            ))}
          </ul>
          <h3>Total de Productos: {totalProducts}</h3>
          <h3>Total de la Compra: ${totalPrice.toFixed(2)}</h3>
        </div>

        <div className="summary-customer">
          <h3 className="summary-subtt">Informacion del comprador:</h3>
        </div>
        <h2 className="summary-close">Gracias por su Compra</h2>
      </div>
    </div>
  );
}
