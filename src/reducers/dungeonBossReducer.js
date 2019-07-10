const initialState = {
    dungeonBossHP: 350,
    dungeonBossAtk: 35,
    playerAttack: 10,
    monsterLevel: 1,
    dungeonBossLevel: 1,
    bossDisplay: 'none',
    top: 512,
    left: 480,
    gold: 10,
}

const dungeonBossReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'PLAYER_ATTACK_DUNGEON_BOSS':
            return {
                ...state,
                dungeonBossHP: state.dungeonBossHP - action.payload.playerAtk
            };
        case 'BATTLE_END_DUNGEON_BOSS':
            return {
                ...state,
                dungeonBossHP: 350,
                bossDisplay: 'none',
                gold: state.gold + action.payload.gold
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
        case "BATTLE_STATUS_DUNGEON_BOSS":
            return {
                ...state,
                ...action.payload
            }
        case 'INCREASE_MONSTER_LEVEL':
                return {
                    ...state,
                    dungeonBossHP: state.dungeonBossHP + action.payload.dungeonBossHP,
                    dungeonBossAttack: state.dungeonBossAtk + action.payload.dungeonBossAttack,
                    dungeonBossLevel: state.dungeonBossLevel + action.payload.dungeonBossLevel
                }
        default:
            return state;
    }
}

export default dungeonBossReducer;