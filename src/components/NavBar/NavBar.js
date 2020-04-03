import React from 'react'
import { NavWrapper, NavButton } from '../../styles/NavBarStyles'

const NavBar = props => {
    const {window, selected, handleSelectedTab }= props

    const handleSelect = event => {
        handleSelectedTab(event.target.id)
    }
    return(
        <NavWrapper windowSize={window}>
            <NavButton id={'home'} selected={selected.home} onClick={event => handleSelect(event)}>Home</NavButton>
            <NavButton id={'about'} selected={selected.about} onClick={event => handleSelect(event)}>About</NavButton>
            <NavButton id={'skills'} selected={selected.skills} onClick={event => handleSelect(event)}>Skills</NavButton>
            <NavButton id={'projects'} selected={selected.projects} onClick={event => handleSelect(event)}>Projects</NavButton>
            <NavButton id={'more'} selected={selected.more} onClick={event => handleSelect(event)}>More</NavButton>
        </NavWrapper>
    )
}

export default NavBar