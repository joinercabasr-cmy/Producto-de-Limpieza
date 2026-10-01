import React from 'react';
import { PRODUCTOS } from '../data/productos';
import ProductoCard from '../Components/ProductoCard';

export default function Portafolio() {
  return (
    <section className="page-section">
      <h1>Portafolio de Servicios</h1>
      <p>Conoce nuestros servicios de limpieza y desinfección.</p>

      <div className="grid-productos">
        {PRODUCTOS.map((tipo) => (
          <ProductoCard key={tipo.id} producto={tipo} />
        ))}
      </div>
    </section>
  );
}