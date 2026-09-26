import React from 'react'
import "./contact.css"
import LocationMap from '../../components/locationMap/LocationMap.jsx'

const Contact = () => {
  return (
    <section id='contact' className="section-contact">

      <div className="contact-content">

        <h2 className='contact-title'>Contacto</h2>

        <p className='contact-text'>
          ¿Viste algo que te gustó? ¿Tenés alguna consulta?
          ¡Escribinos!
        </p>

        <div className="contact-items">

          <a href="https://www.instagram.com/bielaaccesorioss/" className='contact-item' target="_blank">
            📱 Instagram
          </a>

          <a href="https://wa.me/5493522411086" className='contact-item' target="_blank">
            💬 WhatsApp
          </a>

        </div>

        <p className='contact-queries'>
          Respondemos consultas de lunes a sábado.
        </p>

      </div>
      
      <LocationMap/>

    </section>
  )
}

export default Contact
