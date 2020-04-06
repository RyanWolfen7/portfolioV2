import React from 'react'
import { FooterWrapper, BadgeContainer, Badge } from '../../styles/FooterStyles'
import github from '../../assets/images/github.png'
import linkedIn from '../../assets/images/linkedin.png'
import faceBook from '../../assets/images/fb.png'
import youtube from '../../assets/images/youtube.png'
import gmail from '../../assets/images/gmail.png'

const Footer = props => {
    return (
        <FooterWrapper>
            <div></div>
            <BadgeContainer>
                <Badge src={github} />
            </BadgeContainer>
            <BadgeContainer>
                <Badge src={linkedIn} />
            </BadgeContainer>
            <BadgeContainer>
                <Badge src={faceBook} />
            </BadgeContainer>
            <BadgeContainer>
                <Badge src={youtube} />
            </BadgeContainer>
            <BadgeContainer>
                <Badge src={gmail} />
            </BadgeContainer>
        </FooterWrapper>
    )
}

export default Footer