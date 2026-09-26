import { API_URL } from './api'

export const login = async (usuario, password) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ usuario, password })
  })

  if (!res.ok) throw new Error('Usuario o contraseña incorrectos')

  const data = await res.json()
  localStorage.setItem('token', data.token)
  return data
}

export const logout = () => {
  localStorage.removeItem('token')
}

export const getToken = () => {
  return localStorage.getItem('token')
}

export const isAuthenticated = () => {
  return !!getToken()
}