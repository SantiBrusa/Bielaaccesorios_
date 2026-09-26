import express from 'express'
import cors from 'cors'
import productRoutes from './routes/product.routes.js'
import carouselRoutes from './routes/carousel.routes.js'
import authRoutes from './routes/auth.routes.js'

const app = express()

const allowedOrigins = process.env.FRONTEND_URL
  ? [process.env.FRONTEND_URL, 'http://localhost:5173']
  : true

app.use(cors({ origin: allowedOrigins }))
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
app.use('/api/carousel', carouselRoutes)

export default app