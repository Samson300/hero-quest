const initialState = {
    dungeonBossTwoHP: 500,
    dungeonBossTwoInitialHP: 500,
    dungeonBossTwoAtk: 50,
    monsterLevel: 1,
    dungeonBossTwoLevel: 1,
    bossDisplay: 'none',
    top: '200px',
    left: '200px',
    gold: 10
}

const dungeonBoss2Reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'PLAYER_ATTACK_DUNGEON_BOSS_2':
            return {
                ...state,
                dungeonBossTwoHP: state.dungeonBossTwoHP - action.payload.playerAtk
            };
        case 'BATTLE_END_DUNGEON_BOSS_2':
            return {
                ...state,
                dungeonBossTwoHP: 350,
                bossDisplay: 'none',
                gold: state.gold + action.payload.gold
            }
        case 'DISPLAY_DUNGEON_BOSS_2':
            return {
                ...state,
                ...action.payload
            }
        case 'BATTLE_STATUS':
                return {
                    ...state,
                }
        case 'DUNGEON_BOSS_2_BATTLE':
                return {
                    ...state,
                    ...action.payload
                }
        case 'INCREASE_MONSTER_LEVEL':
                return {
                    ...state,
                    dungeonBossTwoHP: state.dungeonBossTwoHP + action.payload.dungeonBossTwoHP,
                    dungeonBossTwoAtk: state.dungeonBossTwoAtk + action.payload.dungeonBossTwoAttack,
                    dungeonBossTwoLevel: state.dungeonBossTwoLevel + action.payload.dungeonBossTwoLevel
                }
        default:
            return state;
    }
}

export default dungeonBoss2Reducer;