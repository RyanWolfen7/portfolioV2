import React, { useState } from 'react'
import { CarouselContainer, TestimonialCard, CardContent, DotContainer, Dot } from '../../styles/CarouselStyles'
import leftArrow from '../../assets/images/leftArrow.png'
import rightArrow from '../../assets/images/rightArrow.png'

const CardCarousel = props => {
    const [ index, setIndex ] = useState(0)
    const { schema, windowSize } = props
    const { name, company, position, testimonial, linkedIn} = schema[index]

    const cycleCard = direction => {
        if(direction === 'left') {
            index === 0 ? setIndex(schema.length - 1) : setIndex(index - 1)
        } else {
            index === schema.length - 1 ? setIndex(0) : setIndex(index + 1)
        }
    }

    const renderDots = () => {
        return schema.map( (testimonial, i) => {
            return <Dot onClick={() => setIndex(i)} key={i} active={i === index} windowSize={windowSize}/>
        })
    }

    return (
        <CarouselContainer windowSize={windowSize}>
            { schema.length > 1 ? <img onClick={() => cycleCard('left')} src={leftArrow} alt={leftArrow}/> : <div/> }

            <TestimonialCard windowSize={windowSize}>
                <CardContent windowSize={windowSize} linkedIn={linkedIn}>
                    <h1 onClick={() => { if(linkedIn) window.open(linkedIn, name) } }> { name } </h1>
                    <h2> { position } @ { company} </h2>
                    <p> " { testimonial } "</p>
                </CardContent>
            </TestimonialCard>

            { schema.length > 1 ? <img onClick={() => cycleCard('right')} src={rightArrow} alt={rightArrow}/> : <div/> }
            <DotContainer number={schema.length}> { schema.length > 1 && renderDots() }</DotContainer>
        </CarouselContainer>
    )
}

export default CardCarousel