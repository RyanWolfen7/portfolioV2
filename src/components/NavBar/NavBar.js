import React from 'react'
import { NavBarWrapper, Logo, LogoContainer, TitleContainer } from '../../styles/NavBarStyles'
import LogoImg from '../../assets/images/Logo.png'

const NavBar = props => {

    return (
        <NavBarWrapper>
            <LogoContainer>
                <Logo src={LogoImg} alt='blah'/>
            </LogoContainer>
            <TitleContainer>

            </TitleContainer>
        </NavBarWrapper>
    )
}

export default NavBar