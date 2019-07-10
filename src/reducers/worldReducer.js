const initialState = {
    gameWorldDisplay: 'none'
}


const worldReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'START_NEW_GAME':
            return {
                gameWorldDisplay: action.payload.gameWorldDisplay
            }
            default:
                return state
    }
}

export default worldReducer;