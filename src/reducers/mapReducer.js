const initialState = {
    tiles: [],
}

// Manages how we are changing the state
const mapReducer = (state=initialState, action) => {
    switch(action.type) {
        // this represents the case for our first map
        case "ADD_TILES":
        return {
            ...action.payload
        }
        default:
            return state
    }
}

export default mapReducer;