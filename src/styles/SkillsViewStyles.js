import styled from 'styled-components'
import { applySizedText } from '../helpers/index'

export const SkillViewHeader = styled.div`
    grid-area: 6 / 1 / span 1 / span 5;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
`

export const SkillTab = styled.a`
    display: grid;
    place-self: center;
    margin: 0;
    cursor: pointer;
    transition: .5s, 1.5s;
    border: .3vw solid #2E3831;
    background-color: #C53212;
    color: #E6DBC9 ;
    padding: 5%;
    border-radius: 5%;

    ${ props => {
        if(props.selected){
        return (
            `background-color: #2E3831;
            border: .3vw solid #C53212;
            color: #E6DBC9;
            padding: 5%;`
        )} else {
            return `
                :hover {
                    padding: .5vw;
                    border: .3vw solid #C53212;
                    background-color: #C53212;
                    color: #E6DBC9;
                }  
            `
        }
    }}
`