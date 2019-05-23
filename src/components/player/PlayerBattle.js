import store from '../../config/store';
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT, wildernessTiles, battleTiles, townTiles  } from '../../config/constants';
import PlayerMovement from './PlayerMovement';
import { getWalkIndex } from '../player/PlayerMovement';

export default function PlayerBattle(player) {
    function dispatchFromBattleMap(direction, newMapPos) {
        const walkIndex = PlayerMovement.getWalkIndex();
        // const oldPos = store.getState().player.position;
        // const newPos = getNewPosition(oldPos, direction);
        // const newMapPos = [0,192];
        // const battlePos = [160 ,288];
        // const backToTownPos = [608, 224]
        store.dispatch({
            type: 'ADD_BATTLE_TILES',
            payload: {
                tiles: wildernessTiles
            }
        });
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: PlayerMovement.oldPos,
                direction,
                walkIndex,
                spriteLocation: PlayerMovement.getSpriteLocation(direction, walkIndex)
            }
        });
    }

    function getMonsterHP() {
        const monsterHP = store.getState().monster.monsterHP;
        if (monsterHP === 0)
            dispatchFromBattleMap()
    }
    getMonsterHP();
}