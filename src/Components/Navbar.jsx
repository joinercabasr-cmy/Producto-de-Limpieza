import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar-header">
      <div className="navbar-brand">
        <Link to="/">
          <img src="/limpieza.jpg" alt="Sistema de Limpieza JS" className="logo-img" />
        </Link>
      </div>
      <nav className="navbar-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')} end>
          Inicio
        </NavLink>
        <NavLink to="/portafolio" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Portafolio
        </NavLink>
        <NavLink to="/nosotros" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Nosotros
        </NavLink>
        <NavLink to="/contacto" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Contacto
        </NavLink>
      </nav>
    </header>
  );
}