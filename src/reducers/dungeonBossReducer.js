const initialState = {
    dungeonBossHP: 350,
    dungeonBossAttack: 35,
    playerAttack: 10,
    monsterLevel: 1,
    dungeonBossLevel: 1,
    bossDisplay: 'none',
    top: 20,
    left: 260,
    gold: 10,
}

const dungeonBossReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'PLAYER_ATTACK':
            return {
                ...state,
                // Instead of action.payload.dmg, state.playerAttack from the monsterReducer's
                // initialState will provide the value to damage the monster.
                // dungeonBossHP: state.dungeonBossHP - state.playerAttack
            };
        case 'BATTLE_END':
            return {
                ...state,
                dungeonBossHP: 350,
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
        case 'DISPLAY_DUNGEON_BOSS':
            return {
                ...state,
                ...action.payload
            }
        case 'DUNGEON_BOSS_BATTLE':
                return {
                    ...state,
                    ...action.payload
                }
        default:
            return state;
    }
}

export default dungeonBossReducer;