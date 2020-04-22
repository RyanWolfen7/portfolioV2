import React from 'react'
import { SkillsContainer, TestimonialContainer } from '../../styles/SkillsViewStyles'
import CardCarousel from '../CardCarousel/CardCarousel'
import testimonials from './TestimonialSchema'

const Testimonials = props => {
    const { windowSize } = props

    return (
        <TestimonialContainer>
            <CardCarousel schema={testimonials} windowSize={windowSize}/>
        </TestimonialContainer>
    )
}

export default Testimonials