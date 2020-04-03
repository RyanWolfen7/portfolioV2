import React from 'react'
import { NavWrapper, NavButton } from '../../styles/NavBarStyles'

const NavBar = props => {
    const window = props.window

    return(
        <NavWrapper windowSize={window}>
            <NavButton>Home</NavButton>
            <NavButton>About</NavButton>
            <NavButton>Skills</NavButton>
            <NavButton>Projects</NavButton>
            <NavButton>More</NavButton>
        </NavWrapper>
    )
}

export default NavBar