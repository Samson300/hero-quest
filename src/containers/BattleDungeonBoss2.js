import { connect } from 'react-redux';
import { battleTiles, townTiles, dungeonTiles2 } from '../config/constants';
import BattleDungeonBoss2 from '../components/battle/BattleDungeonBoss2';

const mapStateToProps = (state) => {
    return {
        hp: state.player.maxPlayerHP,
        addedHP: state.player.addedHP,
        dungeonBoss2HP: state.dungeonBoss.dungeonBossHP,
        exp: state.player.playerExp,
        lvl: state.player.playerLevel,
        playerAtk: state.player.playerAttack,
        dungeonBoss2Atk: state.dungeonBoss2.dungeonBoss2Atk,
        inBattleDungeonBoss2: state.player.inBattleDungeonBoss2,
        position: state.lastLocation.position,
        spriteLocation: state.lastLocation.spriteLocation,
        direction: state.lastLocation.direction,
        walkIndex: state.lastLocation.walkIndex,
        dungeonBoss2Level: state.dungeonBoss2.dungeonBoss2Level
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // Although monsterAttack has no payload, playerReducer.js will call the dispatch
        // and damage the player.
        dungeonBoss2Attack: (dungeonBoss2Atk) => {
            console.log(dungeonBoss2Atk);
            dispatch({ type: 'DUNGEON_BOSS_2_ATTACK', payload: {
                dungeonBoss2Atk
            }})
        },
        // Although playerAttack has no payload, playerReducer.js will call the dispatch
        // and damage the player.
        playerAttackDungeonBoss2: (playerAtk) => {
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

const makeBattleDungeon2Smart = connect(mapStateToProps, mapDispatchToProps);
const smartBattleDungeonBoss2 = makeBattleDungeon2Smart(BattleDungeonBoss2);
export default smartBattleDungeonBoss2;