import mongoose from 'mongoose'

const carouselImageSchema = new mongoose.Schema({
  url: { type: String, required: true },
  alt: { type: String, default: '' },
  orden: { type: Number, default: 0 },
  activa: { type: Boolean, default: true }
})

export default mongoose.model('CarouselImages', carouselImageSchema)