const initialState = {
    caveBossHP: 750,
    caveBossHPInitial: 750,
    caveBossAttack: 50,
    isListening: true,
    // playerAttack is needed to damage the monster and have an incrementing value
    // as the player levels up.
    playerAttack: 10,
    monsterLevel: 1,
    caveBossLevel: 1,
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
                caveBossHP: state.caveBossHP - action.payload.playerAtk
            };
        // After beating the Boss, this case will possibly only increment the player's stats in this reducer,
        // and not in the other reducers (monster, dungeon, player)
        case 'BATTLE_END_CAVE_BOSS':
            return {
                ...state,
                caveBossHP: state.caveBossHPInitial,
                bossDisplay: 'none',
                gold: state.gold + action.payload.gold
            }
        // The player's attack will increase as the player levels up.
        case 'DISPLAY_CAVE_BOSS':
            return {
                ...state,
                ...action.payload
            }
        case 'CAVE_BOSS_BATTLE':
                return {
                    ...state,
                    ...action.payload,
                    backgroundPosition: action.payload.backgroundPosition,
                    
                }
        case 'INCREASE_MONSTER_LEVEL':
            return {
                ...state,
                caveBossHP: state.caveBossHP + action.payload.caveBossHP,
                caveBossAttack: state.caveBossAttack + action.payload.caveBossAttack,
                caveBossLevel: state.caveBossLevel + action.payload.caveBossLevel
            }
        default:
            return state;
    }
}

export default caveBossReducer;