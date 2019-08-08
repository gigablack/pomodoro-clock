import React,{Component} from 'react'
import {connect} from 'react-redux'
import togglePlay from '../state/actions/actionsCreators/togglePlay'
import subSecond from '../state/actions/actionsCreators/subSecond'
import resetClock from '../state/actions/actionsCreators/resetClock'
import {customButton} from '../styles/button.module.scss'

class ControlPadDisplay extends Component {
    constructor(props){
        super(props)
        this.state = {
            interval: null
        }
    }

    toggleButton = () => {
        const {interval} = this.state
        const {togglePlayButton,subSecondToTimer} = this.props
        if(interval){
            togglePlayButton()
            this.pauseInterval(interval)
        } else {
            togglePlayButton()
            this.setState({
                interval: setInterval(()=>{
                    subSecondToTimer()
                },1000)
            })
        }
    }

    pauseInterval = interval => {
        clearInterval(interval)
        this.setState({
            interval: null
        })
    }

    reset = () => {
        const {reInitClock} = this.props
        const {interval} = this.state
        if(interval){
            this.pauseInterval(interval)
        }
        reInitClock()
    }
    render(){
        const {isPlaying} = this.props
        return (
            <div>
                <button onClick={this.toggleButton} className={customButton}>{isPlaying ? (<i className='fas fa-pause fa-3x'></i>) : (<i className='fas fa-play fa-3x'></i>)}</button>
                <button className={customButton} onClick={this.reset}><i className='fas fa-stop fa-3x'></i></button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isPlaying: state.play
    }
}

const mapDispatchToProps = dispatch => {
    return {
        togglePlayButton: () => dispatch(togglePlay()),
        subSecondToTimer: () => dispatch(subSecond()),
        reInitClock: () => dispatch(resetClock())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ControlPadDisplay)