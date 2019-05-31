const initialState = {
    monsterHP: 125,
    monsterHPBase: 200,

    // monsterAttack is moved to playerReducer.js in order to damage player.
    // monsterAttack: 10,

    // playerAttack is needed to damage the monster and have an incrementing value
    // as the player levels up.
    // playerAttack: 10,
    monsterAttack: 10,
    monsterAddedHP: 0,
    monsterAddedAttack: 0,
    // See case 'PLAYER_ATTACK' & 'LEVEL_UP'
    monsterLevel: 1,
    gold: 10,
    displayMonster: 'none'
}

const monsterReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'PLAYER_ATTACK':
        console.log(state.monsterHP);
        console.log(action.payload.playerAtk);
            return {
                ...state,
                // Instead of action.payload.dmg, state.playerAttack from the monsterReducer's
                // initialState will provide the value to damage the monster.
                monsterHP: state.monsterHP - action.payload.playerAtk
            };
        case 'BATTLE_END':
            return {
                ...state,
                monsterHP: state.monsterHPBase + state.monsterAddedHP,
                gold: state.gold + action.payload.gold
                // displayMonster: 'none'
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
            case "BATTLE_STATUS":
                return {
                ...state,
                // ...action.payload,
                displayMonster: action.payload.displayMonster
            }
            case "INCREASE_MONSTER_LEVEL":
                return {
                    ...state,
                    monsterLevel: state.monsterLevel + action.payload.monsterLevel,
                    monsterAddedHP: state.monsterAddedHP + action.payload.monsterHP,
                    monsterAttack: state.monsterHP + action.payload.monsterAttack,
                    
                }
        default:
            return state;
    }
}

export default monsterReducer;