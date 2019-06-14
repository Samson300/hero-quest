const initialState = {
    menuDisplay: 'flex',
}

const gameMenuReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'START_NEW_GAME':
            return {
                menuDisplay: 'none'
            }
        case 'USER_WANTS_LOGIN':
            return {
                menuDisplay: action.payload.menuDisplay
            }
        default:
            return state;
        }
    
}

export default gameMenuReducer;