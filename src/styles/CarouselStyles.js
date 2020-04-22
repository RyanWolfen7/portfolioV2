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
        width: 100%;
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