const initialState = {
    tiles: [],
}

// Manages how we are changing the state
const mapReducer = (state=initialState, action) => {
    switch(action.type) {
        // this represents the case for our first map
        case "BATTLE_STATUS":
            if(action.payload.tiles) {
                return {
                    tiles: action.payload.tiles
                }
            } else {
                return state
            }
        case "ADD_TILES":
            return {
                ...action.payload
            }
        case "ADD_WILDERNESS_TILES":
            return {
                ...action.payload
            }
        case "ADD_BATTLE_TILES":
            return {
                ...action.payload
            }
        // case "STORE_STATUS":
        //     return {
        //         ...state,
        //         tiles: action.payload.tiles
        //     }
        default:
            return state
    }
}

export default mapReducer;