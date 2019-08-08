const subOneToBreakOrSession = (state,action) => {
    const {title} = action
    const {breakLength,sessionLength,play,timer:{seconds}} = state
    if(title === 'Break' && breakLength < 2){
        return state
    } else if(title === 'Session' && sessionLength < 2){
        return state
    }
    if(title === 'Break' && !play && seconds === 0){
        return Object.assign(
            {},
            state,
            {
                breakLength: breakLength-1
            }
        )
    } else {
        if(!play && seconds === 0){
            return Object.assign(
                {},
                state,
                {
                    sessionLength: sessionLength-1,
                    timer: {
                        minutes: sessionLength-1,
                        seconds: 0
                    }
                }
            )
        } else {
            return state
        }
    }
}

export default subOneToBreakOrSession