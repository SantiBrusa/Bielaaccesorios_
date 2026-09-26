import { useNavigate } from 'react-router-dom'
import { logout } from '../../services/authService'
import "./adminDashboard.css"

const AdminDashboard = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/admin/login')
  }

  return (
    <div className="admin-dashboard">
      <div className="admin-dashboard-header">
        <h1>Panel de administración</h1>
        <div className='header-buttons'>
        <button onClick={() => navigate('/')} className="admin-btn">
          Ver sitio
        </button>
        <button onClick={handleLogout} className="admin-btn">
          Cerrar sesión
        </button>
        </div>
      </div>

      <div className="admin-dashboard-grid">
        <button className="admin-dashboard-card" onClick={() => navigate('/admin/products')}>
          <span className="admin-dashboard-icon">🛍️</span>
          <h3>Productos</h3>
          <p>Crear, ver y eliminar productos del catálogo</p>
        </button>

        <button className="admin-dashboard-card" onClick={() => navigate('/admin/carousel')}>
          <span className="admin-dashboard-icon">🖼️</span>
          <h3>Carousel</h3>
          <p>Gestionar las imágenes del carousel principal</p>
        </button>
      </div>
    </div>
  )
}

export default AdminDashboard