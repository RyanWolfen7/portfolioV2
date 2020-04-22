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
        height: ${ props => { 
            const sizes = { phone: '.8rem', sm: '1.2rem', md: '1.3rem', lg: '1.4rem', mx: '1.5rem'}
            return applySizedText(props.windowSize, sizes) 
        }};
        width: auto;
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

    h1 {
        align-self: end;
        justify-self: start;
        margin-bottom: 0;
        font-size: ${ props => { 
            const sizes = { phone: '1.5rem', sm: '1.7rem', md: '1.9rem', lg: '2.1rem', mx: '2.3rem'}
            return applySizedText(props.windowSize, sizes) 
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

// export const DotContainer = styled.div`
//     position: absolute;
//     bottom: 25px;
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `

// export const Dot = styled.span`
//     padding: 10px;
//     margin-right: 5px;
//     cursor: pointer;
//     border-radius: 50%;
//     background: ${props => props.active ? 'black' : 'white'};
// `

// export const ArrowContainer = styled.div`
//     display: flex;
//     position: absolute;
//     top: 50%;
//     ${props => props.direction === 'right' ? `right: 25px` : `left: 25px`};
//     height: 50px;
//     width: 50px;
//     justify-content: center;
//     background: white;
//     border-radius: 50%;
//     cursor: pointer;
//     align-items: center;
//     transition: transform ease-in 0.1s;

//     &:hover {
//         transform: scale(1.1);
//     }

//     img {
//         transform: translateX(${props => props.direction === 'left' ? '-2' : '2'}px);
//         &:focus {
//             outline: 0;
//         }
//     }
// `

// export const CarouselContent = styled.div`
//     transform: translateX(-10px);
//     transition: transform ease-out 1ds;
//     height: 100%;
//     width: 100%;
//     display: grid;
// `

// export const Card = styled.div`
//     height: 100;
//     width: 100%;
//     background-image: url('${props => props.content}');
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center;
// `