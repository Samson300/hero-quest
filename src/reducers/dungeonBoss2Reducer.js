const initialState = {
    dungeonBoss2HP: 50,
    dungeonBoss2InitialHP: 500,
    dungeonBoss2Attack: 50,
    isListening: true,
    // playerAttack is needed to damage the monster and have an incrementing value
    // as the player levels up.
    playerAttack: 10,
    monsterLevel: 1,
    dungeonBossLevel: 1,
    bossDisplay: 'none',
    backgroundPosition: 'left top',
    top: 20,
    left: 260,
    gold: 10
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
                bossDisplay: 'none',
                gold: state.gold + action.payload.gold
            }
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