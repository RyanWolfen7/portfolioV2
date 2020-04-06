import styled from 'styled-components'
import { applySizedText } from '../helpers/index'

export const HomeWrapper = styled.div`
    display: grid;
    place-items: center;
    color: #2e3830;
`

export const HomeCard = styled.div`
    text-align: center;
    padding: 0 15vw 0; 
`

export const HomeCardHeader = styled.h1`
    font-size: ${ props => { 
        const sizes = { phone: '1.3rem', sm: '1.5rem', md: '2rem', lg: '2.5rem', mx: '3rem'}
        return applySizedText(props.windowSize, sizes) 
    }}

`
export const HomeText = styled.p`
    a {
        color: #c53211;
        text-decoration: none;
        font-variant-caps: petite-caps;
        font-family: "Arial Black", Gadget, sans-serif;
    }
    font-size: ${ props => {
        const sizes = { phone: '1rem', sm: '1.3', md: '1.5rem', lg: '1.7rem', mx: '3rem'}
        return applySizedText(props.windowSize, sizes)
    }}
`