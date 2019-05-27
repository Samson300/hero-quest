import { connect } from 'react-redux';
import ItemStore from '../components/ItemStore/ItemStore';

const mapStateToProps = (state) => {
    return {
        hp: state.player.maxPlayerHP,
        addedHP: state.player.addedHP,
        monsterHP: state.monster.monsterHP,
        exp: state.player.playerExp,
        gold: state.player.gold,
        lvl: state.player.playerLevel,
        playerAtk: state.player.playerAttack,
        inStore: state.player.inStore

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buySword: () => {
            dispatch({ type: 'BUY_SWORD', payload: {
                playerAttack: 5
            }})
        },
        buyArmor: () => {
            dispatch({ type: 'BUY_ARMOR', payload: { 
                hp: 10
            }})
        },
        closeStore: () => {
            dispatch({ type: 'STORE_STATUS', payload: {
                inStore: 'none'
            }})
        }
    }
} 

const makeItemStoreSmart = connect(mapStateToProps, mapDispatchToProps);
const smartItemStore = makeItemStoreSmart(ItemStore);
export default smartItemStore;