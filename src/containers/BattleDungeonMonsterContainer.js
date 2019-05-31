import { connect } from 'react-redux';
import BattleDungeonMonster from '../components/battle/BattleDungeonMonster';
import { battleTiles, dungeonTiles, townTiles } from '../config/constants';

const mapStateToProps = (state) => {
    return {
        // hp will display maxPlayerHp
        hp: state.player.maxPlayerHP,
        addedHP: state.player.addedHP,
        basePlayerHP: state.player.basePlayerHP,
        dungeonMonsterHP: state.dungeonMonster.dungeonMonsterHP,
        exp: state.player.playerExp,
        gold: state.player.gold,
        lvl: state.player.playerLevel,
        playerAtk: state.player.playerAttack,
        dungeonMonsterAtk: state.dungeonMonster.dungeonMonsterAttack,
        inBattleDungeonMonster: state.player.inBattleDungeonMonster,
        position: state.lastLocation.position,
        spriteLocation: state.lastLocation.spriteLocation,
        walkIndex: state.player.walkIndex,
        direction: state.player.direction,
        displayDungeonMonster: state.dungeonMonster.displayDungeonMonster
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // Although monsterAttack has no payload, playerReducer.js will call the dispatch
        // and damage the player.
        dungeonMonsterAttack: (dungeonMonsterAtk) => {
            dispatch({ type: 'DUNGEON_MONSTER_ATTACK', payload: {
                dungeonMonsterAtk
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
            dispatch({ type: 'BATTLE_END_DUNGEON_MONSTER', payload: {
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
            dispatch({ type: 'BATTLE_STATUS_DUNGEON_MONSTER', payload: {
                inBattleDungeonMonster: 'flex',
                tiles: battleTiles
            }})
        },
        battleOff: () => {
            dispatch({ type: 'BATTLE_STATUS_DUNGEON_MONSTER', payload: {
                inBattleDungeonMonster: 'none',
                tiles: dungeonTiles,
                isListening: true,
                displayMonster: 'none'
            }})
        },
        battleOffToTown: () => {
            dispatch({ type: 'BATTLE_STATUS_DUNGEON_MONSTER', payload: {
                inBattleDungeonMonster: 'none',
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
        playerDied: (direction, basePlayerHP) => {
            dispatch({ type: 'MOVE_PLAYER', payload: {
                position: [224,448],
                direction
            }});
            dispatch({ type: 'HEAL_PLAYER', payload: {
                maxPlayerHP: basePlayerHP
            }});
            dispatch({ type: 'BATTLE_STATUS', payload: {
                inBattleDungeonMonster: 'none',
                tiles: townTiles,
                isListening: true,
                displayDungeonMonster: 'none'
            }})
        },
    }
} 

const makeBattleSmart = connect(mapStateToProps, mapDispatchToProps);
const smartBattle = makeBattleSmart(BattleDungeonMonster);
export default smartBattle;