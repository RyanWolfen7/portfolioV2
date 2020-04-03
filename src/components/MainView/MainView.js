import React from 'react'
import { withRouter } from 'react-router-dom'
import Header from '../Header/Header'
import { useWindowDimensions, determinWindowSize } from '../../helpers/index'
import NavBar from '../NavBar/NavBar'

const MainView = props => {
    const { height, width } = useWindowDimensions()
    const windowSize = determinWindowSize(height, width)

    return ( <>
            <Header
                window={windowSize}
            />
            <NavBar
                window={windowSize}
            />
        </>
    )
}

export default withRouter(MainView)