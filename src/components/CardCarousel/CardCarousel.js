import React, { useState } from 'react'
import { CarouselContainer, CarouselContent } from '../../styles/CarouselStyles'

const CardCarousel = props => {
    const [ testimonial, setTestimonial ] = useState(0)

    return (
        <CarouselContainer>
            <h1>h</h1> {/* left arrow */}
            <p>balaljfh</p>
            <h1>h</h1> {/* right arrow */}
        </CarouselContainer>
    )
}

export default CardCarousel