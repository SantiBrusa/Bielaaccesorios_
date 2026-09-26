import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../services/authService'
import "./adminLogin.css"

const AdminLogin = () => {
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(usuario, password)
      navigate('/admin')
    } catch (err) {
      setError('Usuario o contraseña incorrectos')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="admin-login-fondo">
      <div className='admin-login-container'>
        <div className='admin-login'>
          <h2>Ingresar</h2>
          <form onSubmit={handleSubmit} className='form-login-admin'>
            <input
              type="text"
              placeholder="Usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className='input-login-admin'
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='input-login-admin'
              required
            />
            {error && <p className='error-login-admin'>{error}</p>}
            <button type="submit" disabled={loading} className='submit-login-admin'>
              {loading ? 'Ingresando...' : 'Ingresar'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin