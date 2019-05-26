import { connect } from 'react-redux';
import Battle from '../components/battle/Battle';

const mapStateToProps = (state) => {
    return {
        // hp will display maxPlayerHp
        hp: state.player.maxPlayerHP,
        addedHP: state.player.addedHP,
        monsterHP: state.monster.monsterHP,
        exp: state.player.playerExp,
        gold: state.player.gold,
        lvl: state.player.playerLevel,
        // playerAtk will provide the value of increasing the player's attack power
        // from BattleContainer to playerReducer.
        playerAtk: state.player.playerAttack,
        inBattle: state.player.inBattle

        // I thought monsterAtk will be needed to damage the player,
        // but it is actually unnecessary.
        // monsterAtk: state.monster.monsterAttack

        // *** PLEASE DELETE MY COMMENTS AFTER REVIEWING, OR YOU CAN LEAVE THEM
        // TO UNDERSTAND WHAT IS GOING ON. ****
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // Although monsterAttack has no payload, playerReducer.js will call the dispatch
        // and damage the player.
        monsterAttack: () => {
            dispatch({ type: 'MONSTER_ATTACK', payload: {
                // monsterAtk: 5
            }})
        },
        // Although playerAttack has no payload, playerReducer.js will call the dispatch
        // and damage the player.
        playerAttack: () => {
            dispatch({ type: 'PLAYER_ATTACK', payload: { 
                // playerAtk: 10
            }})
        },
        killedMonster: () => {
            dispatch({ type: 'BATTLE_END', payload: {
                exp: 100,
                gold: 10,
            }})
        },
        levelUp: () => {
            dispatch({ type: 'LEVEL_UP', payload: {
                lvl: 1,

                // Player's attack will increase by 10 after leveling up.
                // See monsterReducer.js to see what's going on.
                playerAtk: 10,

                // Player will gain 10 hp to their max health after leveling up.
                // See playerReducer.js to see what's going on.
                hp: 10
            }})
        },
        battleOn: () => {
            dispatch({ type: 'BATTLE_END', payload: {
                inBattle: 'flex'
            }})
        },
    }
} 

const makeBattleSmart = connect(mapStateToProps, mapDispatchToProps);
const smartBattle = makeBattleSmart(Battle);
export default smartBattle;