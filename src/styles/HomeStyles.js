import styled from 'styled-components'

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
        switch(props.windowSize){
            case 'phone':
                return '1.3rem'
            case 'sm': 
                return '1.5rem'
            case 'md':
                return '2rem'
            case 'lg':
                return '2.5rem'
            default: 
                return '3rem'
        }
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
        switch(props.windowSize){
            case 'phone':
                return '1rem'
            case 'sm': 
                return '1.3rem'
            case 'md':
                return '1.5rem'
            case 'lg':
                return '1.7rem'
            default: 
                return '2rem'
        }
    }}
`