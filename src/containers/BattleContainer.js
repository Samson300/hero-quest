import { connect } from 'react-redux';
import Battle from '../components/battle/Battle';
import { battleTiles, wildernessTiles } from '../config/constants';

const mapStateToProps = (state) => {
    return {
        // hp will display maxPlayerHp
        hp: state.player.maxPlayerHP,
        addedHP: state.player.addedHP,
        // monsterHP: state.monster.monsterHP,
        exp: state.player.playerExp,
        gold: state.player.gold,
        lvl: state.player.playerLevel,
        playerAtk: state.player.playerAttack,
        inBattle: state.player.inBattle,
        position: state.lastLocation.position,
        spriteLocation: state.lastLocation.spriteLocation,
        direction: state.lastLocation.direction,
        walkIndex: state.lastLocation.walkIndex,
        monsterHP: state.monster.monsterHP
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
        playerAttack: (playerAtk) => {
            dispatch({ type: 'PLAYER_ATTACK', payload: { 
                playerAtk: playerAtk
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

                // Player's attack will increase by 10 after leveling up.
                // See monsterReducer.js to see what's going on.
                playerAtk: 10,

                // Player will gain 10 hp to their max health after leveling up.
                // See playerReducer.js to see what's going on.
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
        battleDoneLocation: (position) => {
            dispatch({ type: 'MOVE_PLAYER', payload: {
                position
                // spriteLocation: state.lastLocation.spriteLocation,
                // direction: state.lastLocation.direction,
                // walkIndex: state.lastLocation.walkIndex
            }})
        }
    }
} 

const makeBattleSmart = connect(mapStateToProps, mapDispatchToProps);
const smartBattle = makeBattleSmart(Battle);
export default smartBattle;