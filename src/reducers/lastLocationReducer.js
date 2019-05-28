const initialState = {    
    position: [0,0],
    spriteLocation: 'center top',
    direction: 'SOUTH',
    walkIndex: 0,
}

const lastLocationReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LAST_LOCATION":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }

}

export default lastLocationReducer;