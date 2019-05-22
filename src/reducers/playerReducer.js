const initialState = {
    position: [0,0],
    spriteLocation: 'center top',
    direction: 'SOUTH',
    walkIndex: 0,
    hp: 100,
    attack: 20,
    monsterAttack: 10
}


// Manages how we are changing the state
const playerReducer = (state=initialState, action) => {
    switch(action.type) {
        // this handles our move player action
        case 'MOVE_PLAYER':
            return {
                ...action.payload
            }
        case 'ATTACK':
            console.log(action.payload)
            return {
                ...action.payload
            }
        default:
            return state
    }
}

export default playerReducer;