import React from 'react'
import "./aboutme.css"

const AboutMe = () => {
  return (
    <section id='aboutMe' className="aboutMe-section">

      <div className="aboutMe-content">

        <h2 className='aboutMe-title'>Sobre nosotros</h2>

        <p className='aboutMe-text'>
          Somos Bielaaccesorios, un emprendimiento creado para ofrecer
          accesorios únicos y detalles que hagan la diferencia.
        </p>

        <p className='aboutMe-text'>
          Nos encanta buscar productos lindos, originales y de calidad
          para que puedas encontrar ese accesorio que va perfecto con
          tu estilo.
        </p>

        <p className='aboutMe-text'>
          Nuestro objetivo es que cada compra sea una linda experiencia
          y que encuentres algo que realmente te represente. 💕
        </p>

      </div>

    </section>
  )
}

export default AboutMe
