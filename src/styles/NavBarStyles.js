import styled from 'styled-components'

export const NavBarWrapper = styled.div`
    grid-area: 1 / 1 / span 2 / span 5;
    background-color: #c53211;
    display: grid;
    grid-template-columns: repeat( 5, minmax(0, 1fr));
    grid-template-rows: repeat( 2, minmax(0, 1fr));
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
`

export const Logo = styled.img`
    place-self: center;
    object-fit: contain;
    width: 80%;
    max-height: 80%;
    border: 1vw solid #2e3830;
`

// export const ImageContainer = styled.div`
//     grid-column: 1 / span 2;
//     grid-row: 1 / span 2;
//     display: grid;
//     background-color: yellow;

//     .profile {
//         display: grid;
//         height: 80%;
//         object-fit: cover;
//         border-radius: 10%;
//         border-style: outset;
//         border-color: #2e3830;
//         place-self: center;
//     }
// `
// export const TitleContainer = styled.div`
//     display: grid;
//     background-color: pink;
//     grid-column: 3 / span 3;
//     grid-row: 1 / span 2;
//     width: 100%;
// `
