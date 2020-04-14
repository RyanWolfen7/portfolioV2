import React, { useState } from 'react'
import { PhotoWrapper, AboutContentWrapper, Photo, ContentCard, CardContent, CardHeader, Body } from '../../styles/AboutViewStyles'
import Me from '../../assets/images/Me.jpg'
import Return from '../../assets/images/return.png'
import { renderStory, renderTitle} from './StorySchema'
import StoryFooter from './StoryFooter' 

const AboutView = props => {
    const { window } = props
    const phone = window === 'phone'
    const [selectedStory, setSelectedStory] = useState({default: false, veteran: false, traveler: false, coder: true})

    const handleSelectedStory = story => {
        const resetSelected = {default: false, veteran: false, traveler: false, coder: false}
        setSelectedStory({...resetSelected, ...{ [story]: true }})
    }

    return (<>
        { !phone && <PhotoWrapper> 
            <Photo src={Me} windowSize={window}/>
        </PhotoWrapper>}

        <AboutContentWrapper windowSize={window}>
            <ContentCard>
                <CardHeader windowSize={window}> 
                    <h4> {renderTitle(selectedStory)} </h4>
                    {! selectedStory.default && <img src={Return} onClick={() => handleSelectedStory('default')}/>}
                </CardHeader>

                <CardContent windowSize={window}>
                    <Body>{renderStory(selectedStory)}</Body>
                </CardContent>

                <StoryFooter
                    selectedStory={selectedStory}
                    handleSelectedStory={handleSelectedStory}
                    phone={phone}
                />
            </ContentCard>
        </AboutContentWrapper>
    </>)
}

export default AboutView