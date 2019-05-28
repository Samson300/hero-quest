import { connect } from 'react-redux';
import BattleCaveBoss from '../components/battle/BattleCaveBoss';
import { battleTiles, townTiles } from '../config/constants';

const mapStateToProps = (state) => {
    return {
        // hp will display maxPlayerHp
        hp: state.player.maxPlayerHP,
        addedHP: state.player.addedHP,
        caveBossHP: state.caveBoss.caveBossHP,
        exp: state.player.playerExp,
        gold: state.player.gold,
        lvl: state.player.playerLevel,
        playerAtk: state.player.playerAttack,
        inBattleCaveBoss: state.player.inBattleCaveBoss,
        position: state.lastLocation.position,
        spriteLocation: state.lastLocation.spriteLocation,
        direction: state.lastLocation.direction,
        walkIndex: state.lastLocation.walkIndex
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // Although monsterAttack has no payload, playerReducer.js will call the dispatch
        // and damage the player.
        caveBossAttack: () => {
            dispatch({ type: 'CAVE_BOSS_ATTACK', payload: {
                caveBossAttack: 50
            }})
        },
        // Although playerAttack has no payload, playerReducer.js will call the dispatch
        // and damage the player.
        playerAttackCaveBoss: () => {
            dispatch({ type: 'PLAYER_ATTACK_CAVE_BOSS', payload: { 
                // playerAtk: 10
            }})
        },
        killedCaveBoss: () => {
            dispatch({ type: 'BATTLE_END_CAVE_BOSS', payload: {
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
            dispatch({ type: 'BATTLE_STATUS_CAVE_BOSS', payload: {
                inBattleCaveBoss: 'flex',
                tiles: battleTiles
            }})
        },
        battleOff: () => {
            dispatch({ type: 'BATTLE_STATUS_CAVE_BOSS', payload: {
                inBattleCaveBoss: 'none',
                tiles: townTiles
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

const makeBattleCaveBossSmart = connect(mapStateToProps, mapDispatchToProps);
const smartBattleCaveBoss = makeBattleCaveBossSmart(BattleCaveBoss);
export default smartBattleCaveBoss;