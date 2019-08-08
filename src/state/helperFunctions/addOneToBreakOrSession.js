
const addOneToBreakOrSession = (state,action) => {
    const {title} = action
    const {play,timer:{seconds}} = state
    if(title === 'Break' && !play && seconds === 0){
        return Object.assign(
            {},
            state,
            {
                breakLength: state.breakLength+1
            }
        )
    } else {
        if(!play && seconds === 0){
            return Object.assign(
                {},
                state,
                {
                    sessionLength: state.sessionLength+1,
                    timer: {
                        minutes: state.sessionLength+1,
                        seconds: 0
                    }
                }
            )
        } else {
            return state
        }
    }
}

export default addOneToBreakOrSession