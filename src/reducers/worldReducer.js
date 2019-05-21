import { townTiles } from "../config/constants";

const initialState = {
    map: townTiles
}

const worldReducer = (state=initialState, action) => {
    switch(action.type) {
        // this handles our move player action
        case 'CHANGE_TO_WILDERNESS':
            return {
                ...action.payload
            }
            default:
                return state
    }
}