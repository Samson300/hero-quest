const initialState = {
    position: [0,0],
    spriteLocation: 'center top',
    direction: 'SOUTH',
    walkIndex: 0,
    playerHP: 100,
    playerAttack: 20,
    monsterAttack: 10,
    playerLevel: 1,
    playerExp: 0,
    gold: 0
}

// Manages how we are changing the state
const playerReducer = (state=initialState, action) => {
    switch(action.type) {
        // this handles our move player action
        case 'MOVE_PLAYER':
            return {
                ...state,
                ...action.payload
            }
        case 'MONSTER_ATTACK':
            // console.log(action.payload);
            return {
                // ...action.payload
                ...state,
                playerHP: state.playerHP - action.payload.dmg
            }
        case 'BATTLE_END':
            return {
                ...state,
                playerExp: state.playerExp + action.payload.exp,
                gold: state.gold + action.payload.gold
            }
        case 'LEVEL_UP':
            return {
                ...state,
                playerExp: 0,
                playerLevel: state.playerLevel + action.payload.lvl
            }
        default:
            return state
    }
}

export default playerReducer;