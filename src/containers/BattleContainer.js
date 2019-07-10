import { connect } from 'react-redux';
import Battle from '../components/battle/Battle';
import { battleTiles, wildernessTiles, townTiles } from '../config/constants';

const mapStateToProps = (state) => {
    return {
        // hp will display maxPlayerHp
        hp: state.player.maxPlayerHP,
        addedHP: state.player.addedHP,
        basePlayerHP: state.player.basePlayerHP,
        monsterHP: state.monster.monsterHP,
        exp: state.player.playerExp,
        gold: state.player.gold,
        lvl: state.player.playerLevel,
        playerAtk: state.player.playerAttack,
        monsterAtk: state.monster.monsterAttack,
        inBattle: state.player.inBattle,
        position: state.lastLocation.position,
        spriteLocation: state.lastLocation.spriteLocation,
        walkIndex: state.player.walkIndex,
        direction: state.player.direction,
        displayMonster: state.monster.displayMonster
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // Although monsterAttack has no payload, playerReducer.js will call the dispatch
        // and damage the player.
        monsterAttack: (monsterAtk) => {
            dispatch({ type: 'MONSTER_ATTACK', payload: {
                monsterAtk
            }})
        },
        // Although playerAttack has no payload, playerReducer.js will call the dispatch
        // and damage the player.
        playerAttack: (playerAtk) => {
            dispatch({ type: 'PLAYER_ATTACK', payload: { 
                playerAtk
            }})
        },
        killedMonster: () => {
            dispatch({ type: 'BATTLE_END', payload: {
                exp: 100,
                gold: 10
            }})
        },
        levelUp: () => {
            dispatch({ type: 'LEVEL_UP', payload: {
                lvl: 1,
                playerAtk: 10,
                hp: 10
            }})
        },
        battleOn: () => {
            dispatch({ type: 'BATTLE_STATUS', payload: {
                inBattle: 'flex',
                tiles: battleTiles
            }})
        },
        battleOff: () => {
            dispatch({ type: 'BATTLE_STATUS', payload: {
                inBattle: 'none',
                tiles: wildernessTiles,
                isListening: true,
                displayMonster: 'none'
            }})
        },
        battleOffToTown: () => {
            dispatch({ type: 'BATTLE_STATUS', payload: {
                inBattle: 'none',
                tiles: townTiles,
                isListening: true,
                displayMonster: 'none'
            }})
        },
        battleDoneLocation: (position) => {
            dispatch({ type: 'MOVE_PLAYER', payload: {
                position
            }})
        },
        // when the player dies they are sent back to town at this position
        playerDied: (direction) => {
            dispatch({ type: 'MOVE_PLAYER', payload: {
                position: [224,448],
                direction
            }});
            dispatch({ type: 'PLAYER_DIED_PENALTY', payload: {
                maxPlayerHP: 100,
                addedHP: 0,
                playerAttack: 25
            }});
            dispatch({ type: 'BATTLE_STATUS', payload: {
                inBattle: 'none',
                tiles: townTiles,
                isListening: true,
                displayMonster: 'none'
            }})
        },
    }
} 

const makeBattleSmart = connect(mapStateToProps, mapDispatchToProps);
const smartBattle = makeBattleSmart(Battle);
export default smartBattle;