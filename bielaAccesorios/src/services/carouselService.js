import { API_URL } from './api'
import { getToken } from './authService'

export const getCarouselImages = async () => {
  const res = await fetch(`${API_URL}/carousel`)
  if (!res.ok) throw new Error('Error al traer imágenes del carousel')
  return res.json()
}

export const getCarouselImagesAdmin = async () => {
  const res = await fetch(`${API_URL}/carousel/admin`, {
    headers: { Authorization: `Bearer ${getToken()}` }
  })
  if (!res.ok) throw new Error('Error al traer imágenes del carousel')
  return res.json()
}

export const createCarouselImage = async (formData) => {
  const res = await fetch(`${API_URL}/carousel`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${getToken()}` },
    body: formData
  })
  if (!res.ok) throw new Error('Error al crear imagen')
  return res.json()
}

export const deleteCarouselImage = async (id) => {
  const res = await fetch(`${API_URL}/carousel/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${getToken()}` }
  })
  if (!res.ok) throw new Error('Error al eliminar imagen')
  return res.json()
}

export const toggleCarouselImage = async (id) => {
  const res = await fetch(`${API_URL}/carousel/${id}/toggle`, {
    method: 'PATCH',
    headers: { Authorization: `Bearer ${getToken()}` }
  })
  if (!res.ok) throw new Error('Error al actualizar imagen')
  return res.json()
}