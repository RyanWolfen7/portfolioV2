import React, { useState, useEffect, useRef } from 'react'

const CardCarousel = props => {
    const getWidth = () => window.innerWidth
    const [ state, setState ] = useState({ activeIndex: 0, translate: 0, translation: 0.45 })
    const { translate, transition, activeIndex } = state

    const nextSlide = direction => {
        if(direction === 'forward'){
            if(activeIndex === props.sides.length - 1 ) return setState({...state, translate: 0, activeIndex: 0})
            setState({...state, activeIndex: activeIndex + 1, translate: (activeIndex + 1) * getWidth()})
        }
        if(direction === 'backward'){
            if(activeIndex === 0 ) return setState({...state, translate: (props.slides.length - 1) * getWidth(), activeIndex: props.slides.length - 1})
            setState({...state, activeIndex: activeIndex - 1, translate: (activeIndex - 1) * getWidth()})
        }
    }

    return (
        <CardCarousel>
            
        </CardCarousel>
    )
}

export default CardCarousel