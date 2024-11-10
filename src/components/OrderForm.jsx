// OrderForm.jsx
import { useState } from "react";
import "../styles/layout/_orderForm.scss";

export default function OrderForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    telefono: "",
    email: "",
    confirmEmail: "",
  });
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Si es uno de los campos de email, valida coincidencia
    if (name === "email" || name === "confirmEmail") {
      validateEmails(
        value,
        name === "email" ? formData.confirmEmail : formData.email
      );
    }
  };

  const validateEmails = (email, confirmEmail) => {
    if (email && confirmEmail && email !== confirmEmail) {
      setEmailError("Los correos electrónicos no coinciden");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailError) {
      alert("Por favor, asegúrese de que los correos electrónicos coinciden.");
      return;
    }
    onSubmit(formData); // Enviar los datos del formulario a CartDetail
  };

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <h2>Datos de Contacto</h2>

      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="apellidos">Apellidos</label>
        <input
          type="text"
          id="apellidos"
          name="apellidos"
          value={formData.apellidos}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="telefono">Teléfono</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="confirmEmail">Confirmar Email</label>
        <input
          type="email"
          id="confirmEmail"
          name="confirmEmail"
          value={formData.confirmEmail}
          onChange={handleChange}
          required
        />
        {emailError && <p className="error-message">{emailError}</p>}
      </div>

      <button type="submit" className="submit-btn">
        Generar Pedido
      </button>
    </form>
  );
}
