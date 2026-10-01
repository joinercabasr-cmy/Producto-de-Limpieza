import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="page-section">
      <h1>404 - Página no encontrada</h1>
      <p>La sección a la que intentas acceder no existe.</p>
      <Link to="/" className="btn-back">⬅ Volver al Inicio</Link>
    </section>
  );
}