import React,{Component} from 'react'
import {connect} from 'react-redux'
import Tone from 'tone'
import {container,timeUp,timeRunning} from '../styles/timer.module.scss'

class Timer extends Component {
    constructor(props){
        super(props)
        this.state = {
            synth: new Tone.Synth().toMaster()
        }
    }
    render(){
        const {timer:{minutes,seconds}} = this.props
        const {synth} = this.state
        if(minutes < 1 && seconds < 1) {
            synth.triggerAttackRelease('C5','2n')
        }
        return (
            <div className={container}>
                <p className={minutes < 1 ? timeUp : timeRunning}>{`${minutes}:${seconds < 10 ? '0'+seconds : seconds}`}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        timer: state.timer
    }
}

export default connect(mapStateToProps,null)(Timer)