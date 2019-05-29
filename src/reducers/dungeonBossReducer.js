const initialState = {
    dungeonBossHP: 200,
    dungeonBossHPInitial: 200,
    dungeonBossAttack: 50,
    isListening: true,
    top: 200,
    left: 200,
    // playerAttack is needed to damage the monster and have an incrementing value
    // as the player levels up.
    playerAttack: 10,
    monsterLevel: 1,
    dungeonBossLevel: 1,
    bossDisplay: 'flex',
    backgroundPosition: 'left top',
    top: 20,
    left: 260,
    gold: 10
}

const dungeonBossReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'PLAYER_ATTACK_DUNGEON_BOSS':
            return {
                ...state,
                // Instead of action.payload.dmg, state.playerAttack from the monsterReducer's
                // initialState will provide the value to damage the monster.
                dungeonBossHP: state.dungeonBossHP - action.payload.playerAtk
            };
        case 'BATTLE_END':
            return {
                ...state,
                gold: state.gold + action.payload.gold
            }
        // After beating the Boss, this case will possibly only increment the player's stats in this reducer,
        // and not in the other reducers (monster, dungeon, player)
        case 'BATTLE_END_DUNGEON_BOSS':
            return {
                ...state,
                dungeonBossHP: state.dungeonBossHPInitial,
                bossDisplay: 'none',
                gold: state.gold + action.payload.gold
            }
        // The player's attack will increase as the player levels up.
        // case 'LEVEL_UP':
        // return {
        //     ...state,
        //     playerAttack: state.playerAttack + action.payload.playerAtk
        // }
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
        case 'DISPLAY_DUNGEON_BOSS':
            return {
                ...state,
                ...action.payload
            }
        case 'DUNGEON_BOSS_BATTLE':
                return {
                    ...state,
                    ...action.payload,
                    backgroundPosition: action.payload.backgroundPosition,
                    
                }
        case 'INCREASE_MONSTER_LEVEL':
            return {
                ...state,
                dungeonBossHP: state.caveBossHP + action.payload.caveBossHP,
                dungeonBossAttack: state.caveBossAttack + action.payload.caveBossAttack,
                caveBossLevel: state.caveBossLevel + action.payload.caveBossLevel
            }
        default:
            return state;
    }
}

export default dungeonBossReducer;