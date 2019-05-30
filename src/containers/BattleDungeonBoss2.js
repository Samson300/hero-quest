import { connect } from 'react-redux';
import BattleDungeonBoss from '../components/battle/BattleDungeonBoss';
import { battleTiles, townTiles, dungeonTiles2 } from '../config/constants';

const mapStateToProps = (state) => {
    return {
        hp: state.player.maxPlayerHP,
        addedHP: state.player.addedHP,
        dungeonBoss2HP: state.dungeonBoss.dungeonBossHP,
        exp: state.player.playerExp,
        gold: state.player.gold,
        lvl: state.player.playerLevel,
        playerAtk: state.player.playerAttack,
        dungeonBoss2Atk: state.dungeonBoss.dungeonBossAtk,
        inBattleDungeonBoss2: state.player.inBattleDungeonBoss,
        position: state.lastLocation.position,
        spriteLocation: state.lastLocation.spriteLocation,
        direction: state.lastLocation.direction,
        walkIndex: state.lastLocation.walkIndex,
        dungeonBoss2Level: state.dungeonBoss2Level.monsterLevel
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // Although monsterAttack has no payload, playerReducer.js will call the dispatch
        // and damage the player.
        dungeonBossAttack: (dungeonBoss2Atk) => {
            dispatch({ type: 'DUNGEON_BOSS_2_ATTACK', payload: {
                dungeonBoss2Atk
            }})
        },
        // Although playerAttack has no payload, playerReducer.js will call the dispatch
        // and damage the player.
        playerAttackDungeonBoss: (playerAtk) => {
            dispatch({ type: 'PLAYER_ATTACK_DUNGEON_BOSS_2', payload: { 
                playerAtk
            }})
        },
        killedDungeonBoss: () => {
            dispatch({ type: 'BATTLE_END_DUNGEON_BOSS_2', payload: {
                level: 1,
                gold: 100,
            }})
        },
        battleOn: () => {
            dispatch({ type: 'BATTLE_STATUS_DUNGEON_BOSS_2', payload: {
                inBattleDungeonBoss: 'flex',
                tiles: battleTiles,
                
            }})
        },
        battleOff: () => {
            dispatch({ type: 'BATTLE_STATUS_DUNGEON_BOSS_2', payload: {
                inBattleDungeonBoss: 'none',
                tiles: dungeonTiles2,
                isListening: true
            }})
        },
        // can we add
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
                dungeonBoss2Level: 1,
                dungeonBoss2HP: 50,
                dungeonBoss2Attack: 25
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

const makeBattleDungeonSmart = connect(mapStateToProps, mapDispatchToProps);
const smartBattleDungeonBoss = makeBattleDungeonSmart(BattleDungeonBoss);
export default smartBattleDungeonBoss;