const initialState = {
    dungeonBoss2HP: 50,
    dungeonBoss2Atk: 35,
    dungeonBoss2Level: 1,
    dungeon2BossDisplay: 'none',
    top: 20,
    left: 260,
    gold: 10,
    display: 'none',
}

const dungeonBoss2Reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'PLAYER_ATTACK_DUNGEON_BOSS_2':
            return {
                ...state,
                dungeonBoss2HP: state.dungeonBoss2HP - action.payload.playerAtk
            };
        case 'BATTLE_END_DUNGEON_BOSS_2':
            return {
                ...state,
                dungeonBoss2HP: 350,
                dungeon2BossDisplay: 'none',
                gold: state.gold + action.payload.gold
            }
        // the player's attack will increase as player buys swords
        // case "BUY_SWORD":
        //     if (state.gold >= 5) {
        //         return {
        //             ...state,
        //             playerAttack: state.playerAttack + action.payload.playerAttack,
        //             gold: state.gold - action.payload.gold
        //         }
        //     } else {
        //         return {
        //             ...state,
        //         }
        //     }
        case 'DISPLAY_DUNGEON_BOSS_2':
            return {
                ...state,
                ...action.payload
            }
        case 'DUNGEON_BOSS_2_BATTLE':
                return {
                    ...state,
                    ...action.payload
                }
        case 'INCREASE_MONSTER_LEVEL':
                return {
                    ...state,
                    dungeonBoss2HP: state.dungeonBoss2HP + action.payload.dungeonBoss2HP,
                    dungeonBoss2Attack: state.dungeonBoss2Atk + action.payload.dungeonBoss2Attack,
                    dungeonBoss2Level: state.dungeonBoss2Level + action.payload.dungeonBoss2Level
                }
        default:
            return state;
    }
}

export default dungeonBoss2Reducer;