import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">

    <div className="footer-contenido">

      <div className="footer-logo">
        <h3>Bielaaccesorios</h3>
        <p>Accesorios para cada estilo 💕</p>
      </div>

      <div className="footer-links">

        <a href="#inicio">Inicio</a>
        <a href="#products">Artículos</a>
        <a href="#aboutMe">Sobre nosotros</a>
        <a href="#contact">Contacto</a>

      </div>

      <div className="footer-redes">

        <a href="#">Instagram</a>
        <a href="#">WhatsApp</a>

      </div>

    </div>

    <div className="footer-bottom">

      <p>
        © 2026 Bielaaccesorios. Todos los derechos reservados.
      </p>

      <p className="footer-dev">
          Desarrollado por{' '}
          <a href="#" target="_blank" rel="noopener noreferrer">
            Santino Vissani Brusadin
          </a>
      </p>

    </div>

  </footer>
  )
}

export default Footer
