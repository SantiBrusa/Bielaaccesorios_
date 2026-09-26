import { useState, useEffect } from 'react'
import { getProducts, createProduct, deleteProduct } from '../../services/productService'
import { useNavigate } from 'react-router-dom'
import "./admin.css"

const AdminProducts = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({ name: '', description: '', image: null })
  const [submitting, setSubmitting] = useState(false)

  const fetchProducts = () => {
    getProducts()
      .then(setProducts)
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, image: e.target.files[0] }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.image) return alert('Falta seleccionar una imagen')

    setSubmitting(true)
    try {
      const data = new FormData()
      data.append('name', formData.name)
      data.append('description', formData.description)
      data.append('image', formData.image)

      await createProduct(data)
      setFormData({ name: '', description: '', image: null })
      e.target.reset() // limpia el input file visualmente
      fetchProducts() // refresca la tabla
    } catch (err) {
      console.error(err)
      alert('Error al crear el producto')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('¿Seguro que querés eliminar este producto?')) return
    try {
        await deleteProduct(id)
        fetchProducts()
    } catch (err) {
        console.error(err)
        alert('Error al eliminar')
    }
  }

  if (loading) return <p>Cargando...</p>

  return (
    <div className='fondo'>
      <div className="admin-products">
        <div className='admin-header'>
          <h2>Nuevo Producto</h2>
          <button onClick={() => navigate('/admin')} className="admin-back-btn">
            ← Volver al panel
          </button>
        </div>

        <div className='form-container'>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <textarea
              name="description"
              placeholder="Descripción"
              value={formData.description}
              onChange={handleChange}
              required
            />
            <label className="file-input-label">
            📁 Elegir archivo
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              required
              className="file-input-hidden"
            />
          </label>
          {formData.image && <span className="file-name">{formData.image.name}</span>}
            <button type="submit" disabled={submitting}>
              {submitting ? 'Guardando...' : 'Crear producto'}
            </button>
          </form>
        </div>

        <h2>Productos</h2>
        <table>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p._id}>
                <td><img src={p.image} alt={p.name} width="60" /></td>
                <td>{p.name}</td>
                <td>{p.description}</td>
                <td><button onClick={() => handleDelete(p._id)}>Eliminar</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminProducts