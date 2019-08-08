import React from 'react'
import {title} from '../styles/header.module.scss'

const Header = () => {
    return (
        <header>
            <h1 className={title}>Pomodoro <span>Clock!</span></h1>
        </header>
    )
}

export default Header