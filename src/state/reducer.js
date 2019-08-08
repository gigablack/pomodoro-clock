import {
    ADD_ONE,
    SUB_ONE,
    SUB_SECOND,
    TOGGLE_PLAY,
    RESET_CLOCK
} from './actions/actions'
import addOneToBreakOrSession from './helperFunctions/addOneToBreakOrSession'
import subOneToBreakOrSession from './helperFunctions/subOneToBreakOrSession'
import subSecond from './helperFunctions/subSecond'
import togglePlay from './helperFunctions/togglePlay'
import resetClock from './helperFunctions/resetClock'

const reducer = (state,action) => {
    switch(action.type){
        case ADD_ONE:
            return addOneToBreakOrSession(state,action)
        case SUB_ONE:
            return subOneToBreakOrSession(state,action)
        case SUB_SECOND:
            return subSecond(state)
        case TOGGLE_PLAY:
            return togglePlay(state)
        case RESET_CLOCK:
            return resetClock(state)
        default:
            return state
    }
}

export default reducer