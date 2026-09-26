import { Router } from 'express'
import { getAllProducts, createProduct, deleteProduct } from '../controllers/product.controller.js'
import upload from '../middlewares/uploads.js'
import verifyToken from '../middlewares/auth.js'

const router = Router()

router.get('/', getAllProducts)                                      
router.post('/', verifyToken, upload.single('image'), createProduct)  
router.delete('/:id', verifyToken, deleteProduct)                     

export default router