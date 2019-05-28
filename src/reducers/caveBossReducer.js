const initialState = {
    caveBossHP: 50,
    caveBossHPInitial: 500,
    caveBossAttack: 50,
    // playerAttack is needed to damage the monster and have an incrementing value
    // as the player levels up.
    playerAttack: 10,
    monsterLevel: 1,
    bossDisplay: 'none',
    backgroundPosition: 'left top',
    top: 20,
    left: 260
}

const caveBossReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'PLAYER_ATTACK_CAVE_BOSS':
            return {
                ...state,
                // Instead of action.payload.dmg, state.playerAttack from the monsterReducer's
                // initialState will provide the value to damage the monster.
                caveBossHP: state.caveBossHP - state.playerAttack
            };
        case 'BATTLE_END_CAVE_BOSS':
            return {
                ...state,
                caveBossHP: state.caveBossHPInitial,
                bossDisplay: 'none',
            }
        // The player's attack will increase as the player levels up.
        case 'LEVEL_UP_CAVE_BOSS':
        return {
            ...state,
            playerAttack: state.playerAttack + action.payload.playerAtk
        }
        // the player's attack will increase as player buys swords
        case 'BUY_SWORD':
            return {
                ...state,
                playerAttack: state.playerAttack + action.payload.playerAttack
            }
        case 'DISPLAY_CAVE_BOSS':
            return {
                ...state,
                ...action.payload
            }
        case 'CAVE_BOSS_BATTLE':
                return {
                    ...state,
                    ...action.payload,
                    backgroundPosition: action.payload.backgroundPosition
                }
        default:
            return state;
    }
}

export default caveBossReducer;