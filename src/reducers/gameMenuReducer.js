const initialState = {
    menuDisplay: 'flex',
}

const gameMenuReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'START_NEW_GAME':
            return {
                menuDisplay: 'none'
            }
        default:
            return state;
        }
    
}

export default gameMenuReducer;