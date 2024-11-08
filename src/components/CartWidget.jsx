// CartWidget.jsx
import { IoBagHandleOutline } from "react-icons/io5";
import { useCart } from "../context/CartProvider";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Link to="cart" className="toolbar-link">
      <div className="toolbar-icon mr-sm">
        <IoBagHandleOutline className="icon" />
        <div className="toolbar-count">{totalQuantity}</div>
      </div>
    </Link>
  );
}
