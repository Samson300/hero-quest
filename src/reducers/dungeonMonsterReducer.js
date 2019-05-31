const initialState = {
    dungeonMonsterHP: 200,
    dungeonMonsterHPBase: 200,

    // monsterAttack is moved to playerReducer.js in order to damage player.
    // monsterAttack: 10,

    // playerAttack is needed to damage the monster and have an incrementing value
    // as the player levels up.
    // playerAttack: 10,
    dungeonMonsterAttack: 10,
    dungeonMonsterAddedHP: 0,
    dungeonMonsterAddedAttack: 0,
    // See case 'PLAYER_ATTACK' & 'LEVEL_UP'
    dungeonMonsterLevel: 1,
    gold: 10,
    displayDungeonMonster: 'none'
}

const dungeonMonsterReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'PLAYER_ATTACK_DUNGEON_MONSTER':
            return {
                ...state,
                // Instead of action.payload.dmg, state.playerAttack from the monsterReducer's
                // initialState will provide the value to damage the monster.
                dungeonMonsterHP: state.dungeonMonsterHP - action.payload.playerAtk
            };
        case 'BATTLE_END_DUNGEON_MONSTER':
            return {
                ...state,
                dungeonMonsterHP: state.dungeonMonsterHPBase + state.dungeonMonsterAddedHP,
                gold: state.gold + action.payload.gold
                // displayMonster: 'none'
            }
            case "BATTLE_STATUS_DUNGEON_MONSTER":
                return {
                ...state,
                // ...action.payload,
                displayDungeonMonster: action.payload.displayDungeonMonster
            }
            case "INCREASE_MONSTER_LEVEL":
                return {
                    ...state,
                    dungeonMonsterLevel: state.dungeonMonsterLevel + action.payload.dungeonMonsterLevel,
                    dungeonMonsterAddedHP: state.dungeonMonsterAddedHP + action.payload.dungeonMonsterHP,
                    dungeonMonsterAttack: state.dungeonMonsterHP + action.payload.dungeonMonsterAttack,
                    
                }
        default:
            return state;
    }
}

export default dungeonMonsterReducer;