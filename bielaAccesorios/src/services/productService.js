import { API_URL } from './api'
import { getToken } from './authService'

export const getProducts = async () => {
  const res = await fetch(`${API_URL}/products`)
  if (!res.ok) throw new Error('Error al traer productos')
  return res.json()
}

export const createProduct = async (formData) => {
  const res = await fetch(`${API_URL}/products`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${getToken()}` },
    body: formData
  })
  if (!res.ok) throw new Error('Error al crear producto')
  return res.json()
}

export const deleteProduct = async (id) => {
  const res = await fetch(`${API_URL}/products/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${getToken()}` }
  })
  if (!res.ok) throw new Error('Error al eliminar producto')
  return res.json()
}