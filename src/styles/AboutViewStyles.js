import styled from 'styled-components'
import { applySizedText } from '../helpers/index'

export const PhotoWrapper = styled.div`
    display: grid;
    grid-area: 2 / 1 / span 4 / span 2;
    width: 100%;
`

export const Photo = styled.img`
    place-self: center;
    object-fit: contain;
    width: auto;
    max-height: 90%;
    border: .3vw solid #2e3830;
    border-radius: 3%;
`

export const AboutContentWrapper = styled.div`
    display: grid;
    grid-area: ${props => {
        return props.windowSize === 'phone' ? '1 / 1 / span 6 / span 5' : '1 / 3 / span 6 / span 3'
    }};
    width: 100%
`

export const ContentCard = styled.div`
    display: grid;
    background-color: #2e3830;
    place-self: center;
    width: 80%;
    height: 80%;
    color: #E6DBC9;
    grid-template-rows: 90% auto;
`
export const CardContent = styled.div`
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: #C53212 #2e3830;

    ::-webkit-scrollbar {
        width: 12px;               
    }
    ::-webkit-scrollbar-track {
        background: #E6DBC9; 
        border: 3px solid #2e3830;      
    }
    ::-webkit-scrollbar-thumb {
        background-color: #C53212; 
        border: 3px solid #2e3830;      
    }
`

export const CardFooter = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    color: #E6DBC9;
    background: #C53212;
`

export const History = styled.h4`
    display: grid;
    place-self: center;
    margin: 0;
    cursor: pointer;
`