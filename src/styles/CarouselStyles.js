import styled from 'styled-components'
import { applySizedText } from '../helpers/index'

export const CarouselContainer = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
    overflow: hidden;
`

export const DotContainer = styled.div`
    position: absolute;
    bottom: 25px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Dot = styled.span`
    padding: 10px;
    margin-right: 5px;
    cursor: pointer;
    border-radius: 50%;
    background: ${props => props.active ? 'black' : 'white'};
`