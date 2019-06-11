import { connect } from 'react-redux';
import BattleCaveBoss from '../components/battle/BattleCaveBoss';
import { battleTiles, townTiles } from '../config/constants';

const mapStateToProps = (state) => {
    return {
        hp: state.player.maxPlayerHP,
        caveBossHP: state.caveBoss.caveBossHP,
        exp: state.player.playerExp,
        gold: state.player.gold,
        lvl: state.player.playerLevel,
        playerAtk: state.player.playerAttack,
        caveBossAtk: state.caveBoss.caveBossAttack,
        inBattleCaveBoss: state.player.inBattleCaveBoss,
        spriteLocation: state.lastLocation.spriteLocation,
        monsterHP: state.monster.monsterHP
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // Although monsterAttack has no payload, playerReducer.js will call the dispatch
        // and damage the player.
        caveBossAttack: (caveBossAtk) => {
            dispatch({ type: 'CAVE_BOSS_ATTACK', payload: {
                caveBossAtk
            }})
        },
        // Although playerAttack has no payload, playerReducer.js will call the dispatch
        // and damage the player.
        playerAttackCaveBoss: (playerAtk) => {
            dispatch({ type: 'PLAYER_ATTACK_CAVE_BOSS', payload: { 
                playerAtk
            }})
        },
        killedCaveBoss: () => {
            dispatch({ type: 'BATTLE_END_CAVE_BOSS', payload: {
                gold: 300,
            }})
        },
        levelUp: () => {
            dispatch({ type: 'LEVEL_UP', payload: {
                lvl: 5,
                playerAtk: 50,
                hp: 50
            }})
        },
        battleOn: () => {
            dispatch({ type: 'BATTLE_STATUS_CAVE_BOSS', payload: {
                inBattleCaveBoss: 'flex',
                tiles: battleTiles,
                
            }})
        },
        battleOff: () => {
            dispatch({ type: 'BATTLE_STATUS_CAVE_BOSS', payload: {
                inBattleCaveBoss: 'none',
                bossDisplay: 'none',
                tiles: townTiles,
                isListening: true
            }})
        },
        battleDoneLocation: (position) => {
            dispatch({ type: 'MOVE_PLAYER', payload: {
                position
            }})
        },
        levelUpAllMonsters: () => {
            dispatch({ type: 'INCREASE_MONSTER_LEVEL', payload: {
                monsterLevel: 1,
                monsterHP: 50,
                monsterAttack: 25,
                caveBossLevel: 1,
                caveBossHP: 50,
                caveBossAttack: 25,
                monsterLevel: 1,
                dungeonBossHP: 50,
                dungeonBossAttack: 25,
                dungeonBossLevel: 1,
            }})
        },
        killedMonster: () => {
            dispatch({ type: 'BATTLE_END', payload: {
                exp: 100,
                gold: 10
            }})
        },
    }
} 

const makeBattleCaveBossSmart = connect(mapStateToProps, mapDispatchToProps);
const smartBattleCaveBoss = makeBattleCaveBossSmart(BattleCaveBoss);
export default smartBattleCaveBoss;
