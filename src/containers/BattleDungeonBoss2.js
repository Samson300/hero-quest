import { connect } from 'react-redux';
import { battleTiles, townTiles, dungeonTiles2 } from '../config/constants';
import BattleDungeonBossTwo from '../components/battle/BattleDungeonBoss2';

const mapStateToProps = (state) => {
    return {
        hp: state.player.maxPlayerHP,
        addedHP: state.player.addedHP,
        dungeonBossTwoHP: state.dungeonBossTwo.dungeonBossHP,
        exp: state.player.playerExp,
        lvl: state.player.playerLevel,
        playerAtk: state.player.playerAttack,
        dungeonBossTwoAtk: state.dungeonBossTwo.dungeonBossTwoAtk,
        inBattleDungeonBossTwo: state.player.inBattleDungeonBossTwo,
        position: state.lastLocation.position,
        spriteLocation: state.lastLocation.spriteLocation,
        direction: state.lastLocation.direction,
        walkIndex: state.lastLocation.walkIndex,
        dungeonBossTwoLevel: state.dungeonBossTwo.dungeonBossTwoLevel
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // Although monsterAttack has no payload, playerReducer.js will call the dispatch
        // and damage the player.
        dungeonBossTwoAttack: (dungeonBossTwoAtk) => {
            console.log(dungeonBossTwoAtk);
            dispatch({ type: 'DUNGEON_BOSS_2_ATTACK', payload: {
                dungeonBossTwoAtk
            }})
        },
        // Although playerAttack has no payload, playerReducer.js will call the dispatch
        // and damage the player.
        playerAttackDungeonBoss2: (playerAtk) => {
            dispatch({ type: 'PLAYER_ATTACK_DUNGEON_BOSS_2', payload: { 
                playerAtk
            }})
        },
        killedDungeonBossTwo: () => {
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
                inBattleDungeonBossTwo: 'none',
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
                dungeonBossTwoLevel: 1,
                dungeonBossTwoHP: 50,
                dungeonBossTwoAttack: 25
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

const makeBattleDungeonTwoSmart = connect(mapStateToProps, mapDispatchToProps);
const smartBattleDungeonBossTwo = makeBattleDungeonTwoSmart(BattleDungeonBossTwo);
export default smartBattleDungeonBossTwo;