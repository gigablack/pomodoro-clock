
const subSecond = (state) => {
    const {seconds,minutes} = state.timer
    const {sessionTime} = state
    if(seconds > 0){
        return Object.assign(
            {},
            state,
            {
                timer: {
                    minutes: state.timer.minutes,
                    seconds: state.timer.seconds-1
                }
            }
        )
    } else { 
        if(minutes < 1){
            if(sessionTime){
                return Object.assign(
                    {},
                    state,
                    {
                        sessionTime: false,
                        timer: {
                            minutes: state.breakLength,
                            seconds: 0
                        }
                    }
                )
            } else {
                return Object.assign(
                    {},
                    state,
                    {
                        sessionTime: true,
                        timer: {
                            minutes: state.sessionLength,
                            seconds: 0
                        }
                    }
                )
            }
        } else {
            return Object.assign(
                {},
                state,
                {
                    timer: {
                        minutes: state.timer.minutes-1,
                        seconds: 59
                    }
                }
            )
        }
    }
}

export default subSecond