import styled from 'styled-components'

export const NavBarWrapper = styled.div`
    grid-area: 1 / 1 / span 2 / span 5;
    background-color: #c53211;
    display: grid;
    grid-template-columns: repeat( autofill 5, minmax(0, 1fr));
    grid-template-rows: auto auto;

    .div {
        grid-area: 1 / 1;
        display: block;
    } 
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
