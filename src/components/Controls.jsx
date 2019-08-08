import React from 'react'
import ControlPad from './ControlPad.jsx'
import {container} from '../styles/controls.module.scss'
import {connect} from 'react-redux'

const Controls = ({isPlaying,isSessionTime}) => {
    return (
        <section className={container}>
            <ControlPad title='Break'/>
            {isPlaying ? (<h2><span>{isSessionTime ? 'Session' : 'Break'}</span> Time!</h2>) : (<h2>Push Play!</h2>)}
            <ControlPad title='Session'/>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        isPlaying: state.play,
        isSessionTime: state.sessionTime
    }
}

export default connect(mapStateToProps,null)(Controls)