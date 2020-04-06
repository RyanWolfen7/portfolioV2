import styled from 'styled-components'
import { applySizedText } from '../helpers/index'

export const HeaderWrapper = styled.div`
    grid-area: 1 / 1 / span 2 / span 5;
    background-color: #c53211;
    display: grid;
    grid-template-columns: repeat( 5, minmax(0, 1fr));
    height: 100%;
`

export const LogoContainer = styled.div`
    grid-area: 1 / 1 / span 2 / span 2;
    display: grid;
`

export const TitleContainer = styled.div`
    grid-column-start: 3;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 3;
    display: grid;

    h1 {
        color:  #e6dbc9;
        font-variant-caps: petite-caps;
        align-self: end;
        justify-self: center;
        margin: .6rem 0 0;
        font-size: ${ props => { 
            const sizes = { phone: '2rem', sm: '3rem', md: '4rem', lg: '5rem', mx: '6rem'}
            return applySizedText(props.windowSize, sizes) 
        }}
    }
    h2 {
        color:  #e6dbc9;
        justify-self: center;
        align-self: start;
        margin: 0 0 .8rem;
        font-size: ${ props => { 
            const sizes = { phone: '1rem', sm: '1.5rem', md: '2rem', lg: '2.5rem', mx: '3rem'}
            return applySizedText(props.windowSize, sizes) 
        }}
    }
`

export const Logo = styled.img`
    place-self: center;
    object-fit: contain;
    width: 70%;
    max-height: 70%;
    border: 1vh solid #2e3830;
`