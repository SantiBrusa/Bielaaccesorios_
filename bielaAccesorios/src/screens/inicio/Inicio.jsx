import React from 'react'
import './inicio.css'
import Carousel from '../../components/carousel/Carousel.jsx'

const Inicio = () => {
  return (
    <section id='inicio'>
      <div className='container'>
        <div>
          <h1>
            Bielaaccesorioss
          </h1>
          <p>
            Soy @priiarevalo_ 🪭💋 y vendo muchas cositas lindas ❤️‍🔥 Accesorios 》Sahumerios y más 💋
          </p>
        </div>
        <div>
          <Carousel/>
        </div>
      </div>
    </section>
  )
}

export default Inicio
