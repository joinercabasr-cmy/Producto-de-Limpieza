import React from 'react';
import { Link } from 'react-router-dom';

const formato = (n) => `$${Number(n).toLocaleString('es-CO')}`;
const mostrarPrecio = (s) =>
  s.precioMin !== undefined && s.precioMax !== undefined
    ? `${formato(s.precioMin)} - ${formato(s.precioMax)} COP`
    : `${formato(s.precio)} COP`;

export default function ProductoCard({ producto }) {
  return (
    <div className="card-producto">
      <img src={producto.imagen} alt={producto.nombre} className="card-img" />
      <div className="card-body">
        {producto.categoria && <span className="card-badge">{producto.categoria}</span>}
        <h4>{producto.nombre}</h4>
        <p className="card-desc">{producto.descripcion}</p>

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

        <Link to={`/portafolio/${producto.id}`} className="btn-detalle">
          Ver Detalle
        </Link>
      </div>
    </div>
  );
}