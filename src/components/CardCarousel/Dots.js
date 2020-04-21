import React from 'react'
import { DotContainer, Dot } from '../../styles/CarouselStyles'

const Dots = ({ slides, activeIndex }) => {
    return <DotContainer>
        {slides.map((slide, i) => (
            <Dot key={slide} active={activeIndex === i}/>
        ))}
    </DotContainer>
}

export default Dots