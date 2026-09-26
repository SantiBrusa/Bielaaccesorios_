import React from 'react'
import "./card.css"

const Wsp_Number = "5493522411086"

const Card = ({image, name, description}) => {
  const message = `Hola! Quiero más info de ${name}`
  const wspLink = `https://wa.me/${Wsp_Number}?text=${encodeURIComponent(message)}`

  return (
    <div className="card">
        <img src={image} className='card-img' alt="ImageProduct"/>
        <div className='card-body'>
            <h5 className='card-name'>{name}</h5>
            <p className='card-desc'>{description}</p>    
            <a href={wspLink} className='card-link' rel="noopener noreferrer" target="_blank">Consultar</a>
        </div>
    </div>
  )
}

export default Card
