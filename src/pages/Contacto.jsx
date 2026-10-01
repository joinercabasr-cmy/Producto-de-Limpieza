import React, { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <section className="page-section">
      <h1>Contáctanos</h1>
      <p>Envíanos tus dudas o consultas mediante este formulario interactivo.</p>
      
      {enviado ? (
        <div className="state-box success">
          <h3>✅ ¡Mensaje enviado con éxito!</h3>
          <p>
            Gracias <strong>{formData.nombre}</strong>, te responderemos al correo{' '}
            <strong>{formData.email}</strong>.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contacto-form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre Completo:</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              value={formData.nombre}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="4"
              required
              value={formData.mensaje}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn-submit">
            Enviar Mensaje
          </button>
        </form>
      )}
    </section>
  );
}