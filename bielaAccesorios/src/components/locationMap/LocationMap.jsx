import React from 'react'
import "./locationMap.css"

const LocationMap = () => {
  return (
    <iframe
      className="map-iframe"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.8009700106904!2d-63.7204596!3d-29.898835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9431a3002a1f2cb9%3A0x9227454f8b865186!2sBiela%20accesorios!5e0!3m2!1ses-419!2sar!4v1790452143019!5m2!1ses-419!2sar"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      title="Ubicación Bielaaccesorios"
    ></iframe>
  )
}

export default LocationMap