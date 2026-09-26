import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div>
        <header className="header">

            <div className="logo">
            <a href="#inicio">Bielaaccesorios</a>
            </div>

            <nav className="nav">
            <a href="#inicio">Inicio</a>
            <a href="#products">Artículos</a>
            <a href="#aboutMe">Sobre nosotros</a>
            <a href="#contact">Contacto</a>
            </nav>

        </header>
    </div>
  )
}

export default Header
