import Product from '../models/Product.js'

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' })
  }
}

export const createProduct = async (req, res) => {
  try {
    const { name, description } = req.body
    if (!req.file) return res.status(400).json({ error: 'La imagen es obligatoria' })

    const newProduct = new Product({ name, description, image: req.file.path })
    await newProduct.save()
    res.status(201).json(newProduct)
  } catch (error) {
    res.status(500).json({ error: 'Error al crear producto' })
  }
}

export const deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id)
    if (!deleted) return res.status(404).json({ error: 'Producto no encontrado' })
    res.json({ mensaje: 'Producto eliminado', deleted })
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar producto' })
  }
}