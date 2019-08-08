const resetClock = state => {
    return Object.assign(
        {},
        state,
        {
            play: false,
            sessionTime: true,
            timer: {
                minutes: state.sessionLength,
                seconds: 0
            }
        }
    )
}

export default resetClock