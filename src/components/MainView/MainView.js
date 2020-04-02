import React from 'react'
import { withRouter } from 'react-router-dom'
import Header from '../Header/Header'

const MainView = props => {
    return ( <>
            <Header/>
        </>
    )
}

export default withRouter(MainView)