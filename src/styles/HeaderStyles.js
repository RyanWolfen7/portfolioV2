import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    grid-area: 1 / 1 / span 2 / span 5;
    background-color: #c53211;
    display: grid;
    grid-template-columns: repeat( 5, minmax(0, 1fr));
    height: 100%;
`

export const LogoContainer = styled.div`
    grid-area: 1 / 1 / span 2 / span 2;
    display: grid;
`

export const TitleContainer = styled.div`
    grid-column-start: 3;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 3;
    display: grid;

    h1 {
        color:  #e6dbc9;
        font-variant-caps: petite-caps;
        align-self: end;
        justify-self: center;
        margin: .6rem 0 0;
        font-size: ${ props => {
                switch(props.windowSize){
                    case 'phone':
                        return '2rem'
                        break
                    case 'sm': 
                    return '3rem'
                        break
                    case 'md':
                        return '4rem'
                        break
                    case 'lg':
                        return '5rem'
                        break
                    default: 
                        return '6rem'
                }
            }
        }
    }
    h2 {
        color:  #e6dbc9;
        justify-self: center;
        align-self: start;
        margin: 0 0 .8rem;
        font-size: ${ props => {
                switch(props.windowSize){
                    case 'phone':
                        return '1rem'
                        break
                    case 'sm': 
                        return '1.5rem'
                        break
                    case 'md':
                        return '2rem'
                        break
                    case 'lg':
                        return '2.5rem'
                        break
                    default: 
                        return '3rem'
                }
            }
        }
    }
}
`

export const Logo = styled.img`
    place-self: center;
    object-fit: contain;
    width: 80%;
    max-height: 80%;
    border: 1vh solid #2e3830;
`