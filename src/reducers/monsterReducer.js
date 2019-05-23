const initialState = {
    monsterHP: 100,
    monsterAttack: 10,
    monsterLevel: 1
}

const monsterReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'PLAYER_ATTACK':
            return {
                ...state,
                monsterHP: state.monsterHP - action.payload.dmg
            };
        default:
            return state;
    }
}

export default monsterReducer;