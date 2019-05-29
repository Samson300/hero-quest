import { connect } from 'react-redux';
import BattleDungeonBoss from '../components/battle';
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
        caveBossAtk: state.caveBoss.caveBossAttack,
        inBattleCaveBoss: state.player.inBattleCaveBoss,
        position: state.lastLocation.position,
        spriteLocation: state.lastLocation.spriteLocation,
        direction: state.lastLocation.direction,
        walkIndex: state.lastLocation.walkIndex,
        monsterLevel: state.monster.monsterLevel,
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
                tiles: battleTiles,
                
            }})
        },
        battleOff: () => {
            dispatch({ type: 'BATTLE_STATUS_CAVE_BOSS', payload: {
                inBattleCaveBoss: 'none',
                tiles: townTiles,
                isListening: true
            }})
        },
        battleDoneLocation: (position) => {
            dispatch({ type: 'MOVE_PLAYER', payload: {
                position
                // spriteLocation: state.lastLocation.spriteLocation,
                // direction: state.lastLocation.direction,
                // walkIndex: state.lastLocation.walkIndex
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
                dungeonBossAttack: 25
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