import { connect } from 'react-redux';
import store from '../config/store';
import Battle from '../components/battle/Battle';

const playerInfo = store.getState().player;
console.log(playerInfo.hp);
console.log(playerInfo.monsterAttack)


const mapDispatchToProps = (dispatch) => {
    return {
        monsterAttack: () => {
            dispatch({ type: 'ATTACK', payload: {
                hp: playerInfo.hp - playerInfo.monsterAttack
            }})
            }
        }
    } 
    
const makeBattleSmart = connect(null, mapDispatchToProps);
const smartBattle = makeBattleSmart(Battle);
export default smartBattle;