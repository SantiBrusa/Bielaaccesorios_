import React, { useState, useEffect } from 'react'
import "./carousel.css"
import { getCarouselImages } from '../../services/carouselService'

const Carousel = () => {
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getCarouselImages()
            .then(setImages)
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
    }, [])

    if (loading) return <div className="carousel-skeleton" style={{ aspectRatio: '4/5' }} />
    if (!images || images.length === 0) return null

    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                {images.map((img, index) => (
                    <div
                        key={img._id}
                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                    >
                        <img src={img.url} className="d-block w-100" alt={img.alt} />
                    </div>
                ))}
            </div>

            {images.length > 1 && (
                <>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </>
            )}
        </div>
    )
}

export default Carousel