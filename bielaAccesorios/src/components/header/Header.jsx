import React, { useState } from 'react'
import "./header.css"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div>
      <header className="header">

        <div className="logo">
          <a href="#inicio">Bielaaccesorios</a>
        </div>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <a href="#inicio" onClick={closeMenu}>Inicio</a>
          <a href="#products" onClick={closeMenu}>Artículos</a>
          <a href="#aboutMe" onClick={closeMenu}>Sobre nosotros</a>
          <a href="#contact" onClick={closeMenu}>Contacto</a>
        </nav>

      </header>
    </div>
  )
}

export default Header