const initialState = {
    position: [0,0],
    spriteLocation: 'center top',
    direction: 'SOUTH',
    walkIndex: 0,

    // basePlayerHP will be constant in order for the HP to increment
    // as the player levels.
    basePlayerHP: 100,

    // addedHP will be added to the basePlayerHP.
    addedHP: 10,

    // maxPlayerHP is the total/max HP of adding basePlayerHP & addedHP.
    maxPlayerHP: 100,
    
    // playerAttack is moved to monsterReducer.js in order to damage the monster
    // and increment as the player levels up.
    // playerAttack: 20,

    // monsterAttack is needed to damage in order to damage the player.
    monsterAttack: 10,
    // See case 'MONSTER_ATTACK'

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
            return {
                ...state,
                // monsterAttack damages the player
                maxPlayerHP: state.maxPlayerHP - state.monsterAttack
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
                // addedHP will be added by the hp from BattleContainer's action.payload.hp.
                addedHP: state.addedHP + action.payload.hp,
                // maxPlayerHP is the max HP after leveling up.
                maxPlayerHP: state.basePlayerHP + state.addedHP,
                playerExp: 0,
                playerLevel: state.playerLevel + action.payload.lvl
            }
        default:
            return state
    }
}

export default playerReducer;