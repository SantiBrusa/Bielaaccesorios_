import CarouselImage from '../models/CarouselImages.js'

export const getCarouselImages = async (req, res) => {
  try {
    const images = await CarouselImage.find({ activa: true }).sort({ orden: 1 })
    res.json(images)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener imágenes del carousel' })
  }
}

export const getAllCarouselImagesAdmin = async (req, res) => {
  try {
    const images = await CarouselImage.find().sort({ orden: 1 })
    res.json(images)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener imágenes del carousel' })
  }
}

export const createCarouselImage = async (req, res) => {
  try {
    const { alt, orden } = req.body
    if (!req.file) return res.status(400).json({ error: 'La imagen es obligatoria' })

    const newImage = new CarouselImage({
      url: req.file.path,
      alt: alt || '',
      orden: orden ? Number(orden) : 0
    })
    await newImage.save()
    res.status(201).json(newImage)
  } catch (error) {
    res.status(500).json({ error: 'Error al crear imagen del carousel' })
  }
}

export const deleteCarouselImage = async (req, res) => {
  try {
    const deleted = await CarouselImage.findByIdAndDelete(req.params.id)
    if (!deleted) return res.status(404).json({ error: 'Imagen no encontrada' })
    res.json({ mensaje: 'Imagen eliminada', deleted })
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar imagen' })
  }
}

export const toggleActiva = async (req, res) => {
  try {
    const image = await CarouselImage.findById(req.params.id)
    if (!image) return res.status(404).json({ error: 'Imagen no encontrada' })

    image.activa = !image.activa
    await image.save()
    res.json(image)
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar imagen' })
  }
}