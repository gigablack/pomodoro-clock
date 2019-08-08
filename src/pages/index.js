import React from "react"
import Header from '../components/Header.jsx'
import Controls from '../components/Controls.jsx'
import Display from '../components/Display.jsx'
import '../styles/global.scss'
import {Helmet} from 'react-helmet'

const HomePage = () => {
    return (
        <main>
            <Helmet>
                <title>Pomodoro</title>
                <script src="https://kit.fontawesome.com/b12372e360.js"></script>
            </Helmet>
            <Header />
            <Controls />
            <Display />
        </main>
    )
}

export default HomePage
