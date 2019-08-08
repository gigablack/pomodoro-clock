const togglePlay = state => {
    return Object.assign(
        {},
        state,
        {
            play: !state.play
        }
    )
}

export default togglePlay