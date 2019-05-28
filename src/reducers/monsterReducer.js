const initialState = {
    monsterHP: 100,

    // monsterAttack is moved to playerReducer.js in order to damage player.
    // monsterAttack: 10,

    // playerAttack is needed to damage the monster and have an incrementing value
    // as the player levels up.
    playerAttack: 10,
    // See case 'PLAYER_ATTACK' & 'LEVEL_UP'
    
    monsterLevel: 1,
    gold: 10
}

const monsterReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'PLAYER_ATTACK':
            return {
                ...state,
                // Instead of action.payload.dmg, state.playerAttack from the monsterReducer's
                // initialState will provide the value to damage the monster.
                monsterHP: state.monsterHP - state.playerAttack
            };
        case 'BATTLE_END':
            return {
                ...state,
                monsterHP: 100,
                gold: state.gold + action.payload.gold
            }
        // The player's attack will increase as the player levels up.
        case 'LEVEL_UP':
        return {
            ...state,
            playerAttack: state.playerAttack + action.payload.playerAtk

        }
        // the player's attack will increase as player buys swords
        case "BUY_SWORD":
            if (state.gold >= 5) {
                return {
                    ...state,
                    playerAttack: state.playerAttack + action.payload.playerAttack,
                    gold: state.gold - action.payload.gold
                }
            } else {
                return {
                    ...state,
                }
            }
        default:
            return state;
    }
}

export default monsterReducer;