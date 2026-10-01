import React from 'react';

export default function FiltroPrecio({ precioMaximo, onPrecioChange, onReset }) {
  return (
    <div className="filtro-container">
      <h3>Filtrar Catálogo por Precio Máximo</h3>
      <div className="filtro-controls">
        <label htmlFor="precioInput">
          Precio Máximo: <strong>${precioMaximo}</strong>
        </label>
        <input
          id="precioInput"
          type="range"
          min="0"
          max="1500"
          step="50"
          value={precioMaximo}
          onChange={(e) => onPrecioChange(Number(e.target.value))}
        />
        <button onClick={onReset} className="btn-reset">
          Restablecer Filtro
        </button>
      </div>
    </div>
  );
}
