const initialState = {
    menuDisplay: 'flex',
}

const gameMenuReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'GAME_START_NEW':
            // change whatever needs to be changed to start a new game here, basically everthing goes to starting state
            // maybe something as simple as just ...state for everything else
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
        }
    
}

export default gameMenuReducer;