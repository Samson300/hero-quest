import { connect } from 'react-redux';
import store from '../config/store';
import Battle from '../components/battle/Battle';

const playerInfo = store.getState().player;
const monsterInfo = store.getState().monster;
// console.log(playerInfo.hp); undefined
// console.log(playerInfo.monsterAttack)
const mapStateToProps = (state) => {
    return {
        hp: state.player.playerHP
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        monsterAttack: () => {
            dispatch({ type: 'MONSTER_ATTACK', payload: {
                // playerHP: playerInfo.playerHP - playerInfo.monsterAttack
                dmg: 5
            }})
            },
        playerAttack: () => {
            dispatch({ type: 'PLAYER_ATTACK', payload: {
                monsterHP: monsterInfo.monsterHP - playerInfo.playerAttack
            }})
            }
        }
    } 
    
const makeBattleSmart = connect(mapStateToProps, mapDispatchToProps);
const smartBattle = makeBattleSmart(Battle);
export default smartBattle;