const initialState = {
    monsterHP: 125,
    monsterHPBase: 125,
    monsterAttack: 10,
    monsterAddedHP: 0,
    monsterAddedAttack: 0,
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
                monsterHP: state.monsterHP - action.payload.playerAtk
            };
        case 'BATTLE_END':
            return {
                ...state,
                monsterHP: state.monsterHPBase + state.monsterAddedHP,
                gold: state.gold + action.payload.gold
            }
        case "BATTLE_STATUS":
            return {
                ...state,
                ...action.payload
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