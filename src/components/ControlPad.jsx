import React,{Component} from 'react'
import {connect} from 'react-redux'
import  addOne from '../state/actions/actionsCreators/addOne'
import subOne from '../state/actions/actionsCreators/subOne'
import {container} from '../styles/controlPad.module.scss'
import {customButton} from '../styles/button.module.scss'

class ControlPad extends Component {
    render(){
        const {
            title,
            breakLength,
            sessionLength,
            addOneToState,
            subOneToState
        } = this.props
        return (
            <div className={container}>
                <h2>{title}</h2>
                <div>
                    <button className={customButton} onClick={()=>addOneToState(title)}><i className='fas fa-arrow-up fa-3x'></i></button>
                    <p>{title === 'Break' ? breakLength : sessionLength}</p>
                    <button className={customButton} onClick={()=>subOneToState(title)}><i className='fas fa-arrow-down fa-3x'></i></button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        breakLength: state.breakLength,
        sessionLength: state.sessionLength
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addOneToState: title => {
            dispatch(addOne(title))
        },
        subOneToState: title => {
            dispatch(subOne(title))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ControlPad)