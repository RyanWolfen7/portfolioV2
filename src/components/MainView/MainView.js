import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import Header from '../Header/Header'
import { useWindowDimensions, determinWindowSize } from '../../helpers/index'
import NavBar from '../NavBar/NavBar'

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
        </>
    )
}

export default withRouter(MainView)