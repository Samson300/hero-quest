const initialState = {
    battleOn: false,
    playerHealth: 0,
    playerAttack: 0,
    monsterHealth: 100,
    monsterAttack: 10
    
}

// Manages how we are changing the state
const battleReducer = (state=initialState, action) => {
    switch(action.type) {
        // this represents the case for our first map
        case "PLAYER_ATTACK":
        return {
            ...action.payload
        }
        default:
            return state
    }
}

export default battleReducer;