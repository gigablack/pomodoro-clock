import React from 'react'
import Timer from './Timer.jsx'
import ControlPadDisplay from './ControlPadDisplay.jsx'
import {container} from '../styles/display.module.scss'

const Display = () => {
    return (
        <section className={container}>
            <Timer />
            <ControlPadDisplay />
        </section>
    )
}

export default Display