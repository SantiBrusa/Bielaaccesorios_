import { Router } from 'express'
import {
  getCarouselImages,
  getAllCarouselImagesAdmin,
  createCarouselImage,
  deleteCarouselImage,
  toggleActiva
} from '../controllers/carousel.controller.js'
import upload from '../middlewares/uploads.js'
import verifyToken from '../middlewares/auth.js'

const router = Router()

router.get('/', getCarouselImages)                                        
router.get('/admin', verifyToken, getAllCarouselImagesAdmin)               
router.post('/', verifyToken, upload.single('image'), createCarouselImage) 
router.delete('/:id', verifyToken, deleteCarouselImage)                    
router.patch('/:id/toggle', verifyToken, toggleActiva)                     

export default router