import React from 'react'
import { PhotoWrapper, AboutContentWrapper, Photo, ContentCard, CardContent, CardFooter, History } from '../../styles/AboutViewStyles'
import Me from '../../assets/images/Me.jpg'

const AboutView = props => {
    const { window } = props
    const phone = window === 'phone'

    return (<>
        { !phone && <PhotoWrapper> 
            <Photo src={Me} windowSize={window}/>
        </PhotoWrapper>}
        <AboutContentWrapper windowSize={window}>
            <ContentCard>
                <CardContent windowSize={window}>
                    
                </CardContent>
                <CardFooter>
                    <History> {!phone && 'The'} Veteran </History>
                    <History> {!phone && 'The'} Traveler </History>
                    <History> {!phone && 'The'} Coder </History>
                </CardFooter>
            </ContentCard>
        </AboutContentWrapper>
    </>)
}

export default AboutView