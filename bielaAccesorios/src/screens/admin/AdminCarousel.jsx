import { useState, useEffect } from 'react'
import {
  getCarouselImagesAdmin,
  createCarouselImage,
  deleteCarouselImage,
  toggleCarouselImage
} from '../../services/carouselService'
import { useNavigate } from 'react-router-dom'
import "./admin.css"

const AdminCarousel = () => {
  const navigate = useNavigate()
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({ alt: '', orden: 0, image: null })
  const [submitting, setSubmitting] = useState(false)

  const fetchImages = () => {
    getCarouselImagesAdmin()
      .then(setImages)
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchImages()
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
      data.append('alt', formData.alt)
      data.append('orden', formData.orden)
      data.append('image', formData.image)

      await createCarouselImage(data)
      setFormData({ alt: '', orden: 0, image: null })
      e.target.reset()
      fetchImages()
    } catch (err) {
      console.error(err)
      alert('Error al crear la imagen')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('¿Seguro que querés eliminar esta imagen?')) return
    try {
      await deleteCarouselImage(id)
      fetchImages()
    } catch (err) {
      console.error(err)
      alert('Error al eliminar')
    }
  }

  const handleToggle = async (id) => {
    try {
      await toggleCarouselImage(id)
      fetchImages()
    } catch (err) {
      console.error(err)
      alert('Error al actualizar')
    }
  }

  if (loading) return <p>Cargando...</p>

  return (
    <div className='fondo'>
      <div className="admin-carousel">
        <div className='admin-header'>
          <h2>Nueva imagen del carousel</h2>
          <button onClick={() => navigate('/admin')} className="admin-back-btn">
            ← Volver al panel
          </button>
        </div>

        <div className='form-container'>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="alt"
              placeholder="Texto alternativo"
              value={formData.alt}
              onChange={handleChange}
            />
            <input
              type="number"
              name="orden"
              placeholder="Orden"
              value={formData.orden}
              onChange={handleChange}
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
              {submitting ? 'Guardando...' : 'Agregar imagen'}
            </button>
          </form>
        </div>

        <h2>Imágenes del carousel</h2>
        <table>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Alt</th>
              <th>Orden</th>
              <th>Activa</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {images.map((img) => (
              <tr key={img._id}>
                <td><img src={img.url} alt={img.alt} width="60" /></td>
                <td>{img.alt}</td>
                <td>{img.orden}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={img.activa}
                    onChange={() => handleToggle(img._id)}
                  />
                </td>
                <td><button onClick={() => handleDelete(img._id)}>Eliminar</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminCarousel