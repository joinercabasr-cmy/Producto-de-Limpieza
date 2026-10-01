import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTOS } from '../data/productos';

const formato = (n) => `$${Number(n).toLocaleString('es-CO')}`;
const mostrarPrecio = (s) =>
  s.precioMin !== undefined && s.precioMax !== undefined
    ? `${formato(s.precioMin)} - ${formato(s.precioMax)} COP`
    : `${formato(s.precio)} COP`;

export default function DetalleProducto() {
  const { id } = useParams();
  const producto = PRODUCTOS.find((p) => p.id === id);

  if (!producto) {
    return (
      <section className="page-section">
        <h2>Producto No Encontrado</h2>
        <p>El producto con identificador "{id}" no existe en el catálogo.</p>
        <Link to="/portafolio" className="btn-back">⬅ Volver al Portafolio</Link>
      </section>
    );
  }

  return (
    <section className="page-section detalle-container">
      <Link to="/portafolio" className="btn-back">⬅ Volver al Portafolio</Link>
      <div className="detalle-content">
        <img src={producto.imagen} alt={producto.nombre} className="detalle-img" />
        <div className="detalle-info">
          {producto.categoria && <span className="card-badge">{producto.categoria}</span>}
          <h1>{producto.nombre}</h1>
          <p>{producto.descripcion}</p>

          <ul className="servicios-lista">
            {(producto.servicios || []).map((s) => (
              <li key={s.nombre}>
                <div className="servicio-info">
                  <span className="servicio-nombre">{s.nombre}</span>
                  <p className="servicio-desc">{s.descripcion}</p>
                </div>
                <strong className="servicio-precio">{mostrarPrecio(s)}</strong>
              </li>
            ))}
          </ul>

          <p><strong>ID del Producto:</strong> <code>{producto.id}</code></p>
        </div>
      </div>
    </section>
  );
}
