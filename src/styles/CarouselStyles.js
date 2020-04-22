import styled from 'styled-components'
import { applySizedText } from '../helpers/index'

export const CarouselContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    display: grid;
    grid-template-columns: 10% 80% 10%;
    align-items: center;

    img {
        place-self: center;
        cursor: pointer;
        height: ${ props => { 
            const sizes = { phone: '.8rem', sm: '1.2rem', md: '1.3rem', lg: '1.4rem', mx: '1.5rem'}
            return applySizedText(props.windowSize, sizes) 
        }};
        width: auto;
        transition: transform ease-in 0.1s;

        &:hover {
            transform: scale(1.2);
        }
    }
`

export const TestimonialCard = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    color: #2E3831;
    overflow-y: scroll;

    scrollbar-width: thin;
    scrollbar-color: #C53212 #2e3830;

    ::-webkit-scrollbar {
        width: ${props => props.windowSize === 'phone' ? '8px' : '12px'};               
    }
    ::-webkit-scrollbar-track {
        background: #E6DBC9; 
    }
    ::-webkit-scrollbar-thumb {
        background-color: #C53212; 
        border: 2px solid #2e3830;      
    }
`

export const CardContent = styled.div`
    display: grid;
    grid-template-rows: auto 5% auto;
    height: 100%;
    font-family: "Arial Black", Gadget, sans-serif;
    place-items: center;
    transition: .5s, 1.5s;

    h1 {
        align-self: end;
        justify-self: start;
        margin-bottom: 0;
        font-size: ${ props => { 
            const sizes = { phone: '1.5rem', sm: '1.7rem', md: '1.9rem', lg: '2.1rem', mx: '2.3rem'}
            return applySizedText(props.windowSize, sizes) 
        }};

        ${props => {
            if(props.linkedIn) 
                return `
                transition: 2s;
                cursor: pointer;

                &:hover {
                    color: #E6DBC9;
                    transform: scale(1.005);
                    background: #2E3831;
                    padding: 1vw;
                }`
        }}
    }
    h2 {
        place-self: start;
        margin-top: 0;
        font-size: ${ props => { 
            const sizes = { phone: '.8rem', sm: '1.2rem', md: '1.3rem', lg: '1.4rem', mx: '1.5rem'}
            return applySizedText(props.windowSize, sizes) 
        }}
    }
    p {
        padding-top: 1vh;
        align-self: start;
        font-size: ${ props => { 
            const sizes = { phone: '.8rem', sm: '1.1rem', md: '1.2rem', lg: '1.3rem', mx: '1.4rem'}
            return applySizedText(props.windowSize, sizes) 
        }}
    }
`

export const DotContainer = styled.div`
    position: absolute;
    bottom: 1vw;
    width: auto;
    display: grid;
    grid-template-columns: repeat( ${props => props.number}, 1fr);
    place-items: center;
    place-self: center;
    transition: .5s, 1.5s;
`

export const Dot = styled.span`
    padding: ${ props => { 
        const sizes = { phone: '.3rem', sm: '.4rem', md: '.5rem', lg: '.5rem', mx: '.5rem'}
        return applySizedText(props.windowSize, sizes) 
    }};
    margin-right: .5vw;
    cursor: pointer;
    border-radius: 50%;
    border: ${ props => { 
        const sizes = { phone: '.1rem', sm: '.1rem', md: '.2rem', lg: '.2rem', mx: '.2rem'}
        return applySizedText(props.windowSize, sizes)
    }} solid #2E3831;
    background: ${props => props.active ? '#2e3830' : '#E6DBC9'};
    opacity: .5;
    transition: 2s;

    &:hover {
        opacity: 1;
        background: #2E3831;
        transform: scale(1.1);
    }
`