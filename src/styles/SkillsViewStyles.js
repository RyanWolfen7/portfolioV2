import styled from 'styled-components'
import { applySizedText } from '../helpers/index'

export const SkillViewHeader = styled.div`
    grid-area: 6 / 1 / span 1 / span 5;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    background-color:  #C53212;
`

export const SkillsContainer = styled.div`
    grid-area: 1 / 1 / span 5/ span 5;
    display: grid;
`

export const SkillTab = styled.a`
    display: grid;
    place-self: center;
    margin: 0;
    cursor: pointer;
    transition: .5s, 1.5s;
    background-color: #C53212;
    color: #E6DBC9 ;
    border-radius: 5%;
    font-size: ${ props => { 
        const sizes = { phone: '.9rem', sm: '1.1rem', md: '1.4rem', lg: '1.7rem', mx: '1.9rem'}
        return applySizedText(props.windowSize, sizes) 
    }};

    ${ props => {
        if(props.selected){
        return (
            `background-color: #2E3831;
            border: .3vw solid #2E3831;
            color: #E6DBC9;
            padding: 3%;`
        )} else {
            return `
                :hover {
                    padding: .5vw;
                    border: .2vw solid #2E3831;
                    background-color: C;
                    color: #E6DBC9;
                }  
            `
        }
    }}
`