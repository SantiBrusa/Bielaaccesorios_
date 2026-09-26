import React, { useState, useEffect } from 'react'
import "./products.css"
import Card from '../../components/card/Card.jsx'
import { getProducts } from '../../services/productService'

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p>Cargando productos...</p>
  if (products.length === 0) return <p>Todavía no hay productos cargados.</p>

  return (
    <section id='products' className='section-products'>
      <div className="products-grid">
        {products.map((p) => (
          <div className='container-cards'>
            <Card
              key={p._id}
              image={p.image}
              name={p.name}
              description={p.description}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Products