import {createStore} from 'redux'
import reducer from './reducer'


const state = {
    breakLength: 1,
    sessionLength: 1,
    play: false,
    sessionTime: true,
    timer: {
        minutes: 1,
        seconds: 0
    }
}

export default () => createStore(reducer,state)