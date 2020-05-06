import styled from 'styled-components'
import { applySizedText } from '../helpers/index'

export const ProjectContainer = styled.div`
    grid-area: 1 / 1 / span 6 / span 5; 
    display: grid;
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
        border: 3px solid #2e3830;      
    }
`