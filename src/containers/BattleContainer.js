import { connect } from 'react-redux';
import store from '../config/store';
import Battle from '../components/battle/Battle';

const playerInfo = store.getState().player;
const monsterInfo = store.getState().monster;
// console.log(playerInfo.hp); undefined
// console.log(playerInfo.monsterAttack)


const mapDispatchToProps = (dispatch) => {
    return {
        monsterAttack: () => {
            dispatch({ type: 'ATTACK', payload: {
                playerHP: playerInfo.playerHP - playerInfo.monsterAttack
            }})
            },
        playerAttack: () => {
            dispatch({ type: 'PLAYER_ATTACK', payload: {
                monsterHP: monsterInfo.monsterHP - playerInfo.playerAttack
            }})
            }
        }
    } 
    
const makeBattleSmart = connect(null, mapDispatchToProps);
const smartBattle = makeBattleSmart(Battle);
export default smartBattle;