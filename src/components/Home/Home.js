import React from 'react'
import { HomeWrapper, HomeText, HomeCard, HomeCardHeader } from '../../styles/HomeStyles'

const Home = props => {
    const window = props.window

    return (
        <HomeWrapper>
            <HomeCard>
                <HomeCardHeader windowSize={window}> Welcome to my website</HomeCardHeader>
                <HomeText windowSize={window}>
                    This is a static website built in React.
                    It was built with a redux thunk structure for future improvements and 
                    you can find this site's source code <a href='https://github.com/RyanWolfen7/portfolioV2'>here</a>. 
                    Peruse at your leisure and feel free to contact me with one of the below links.
                </HomeText>
            </HomeCard>
        </HomeWrapper>
    )
}

export default Home