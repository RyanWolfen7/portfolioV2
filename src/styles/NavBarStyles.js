import styled from 'styled-components'

export const NavWrapper = styled.div`
    background-color: #2e3830;
    grid-area: 3 /1 / span 1 / span 6;
    display: grid;
    grid-template-columns: repeat( 5, minmax(0, 1fr));
    align-content: center;
    justify-items: center;
    color: #e6dbc9;
    font-size: ${ props => {
        switch(props.windowSize){
            case 'phone':
                return '1rem'
            case 'sm': 
                return '1.2rem'
            case 'md':
                return '1.5rem'
            case 'lg':
                return '1.8rem'
            default: 
                return '2rem'
        }
    }}
`

export const NavButton = styled.div`
    cursor: pointer;
    ${ props => {
        if(props.selected){
        return (
            `padding-bottom: 3px;
            border-bottom: 3px solid #c53211;`
        )}
    }}
    
`