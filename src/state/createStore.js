import {createStore} from 'redux'
import reducer from './reducer'


const state = {
    breakLength: 5,
    sessionLength: 25,
    play: false,
    sessionTime: true,
    timer: {
        minutes: 25,
        seconds: 0
    }
}

export default () => createStore(reducer,state)