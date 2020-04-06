import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import Header from '../Header/Header'
import { useWindowDimensions, determinWindowSize } from '../../helpers/index'
import NavBar from '../NavBar/NavBar'
import Home from '../Home/Home'
import { ContentWrapper } from '../../styles/MainView'
import Footer from '../Footer/Footer'

const MainView = props => {
    const [selected, setSelected] = useState({home: true, about: false, skills: false, projects: false, more: false})
    const { height, width } = useWindowDimensions()
    const windowSize = determinWindowSize(height, width)

    const handleSelectedTab = tab => {
        const resetSelected = {home: false, about: false, skills: false, projects: false, more: false}
        setSelected({...resetSelected, ...{ [tab]: true }})
    }
    
    return ( <>
            <Header
                window={windowSize}
            />
            <NavBar
                window={windowSize}
                selected={selected}
                handleSelectedTab={handleSelectedTab}
            />
            <ContentWrapper>
                {selected.home && <Home window={windowSize}/>}
            </ContentWrapper>
            <Footer/>
        </>
    )
}

export default withRouter(MainView)