import store from '../../config/store';
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT, wildernessTiles, battleTiles, townTiles, dungeonTiles, caveFirstLevel, caveSecondLevel, dungeonTiles2 } from '../../config/constants';

// Controlls player movement capabilities
export default function PlayerMovement(player) {
// Returns new position on map based on what direction Player is going
    function getNewPosition(oldPos, direction) {
        switch(direction) {
            case 'WEST':
                return [ oldPos[0]-SPRITE_SIZE, oldPos[1] ]

            case 'EAST':
                return [ oldPos[0]+SPRITE_SIZE, oldPos[1] ]

            case 'NORTH':
                return [  oldPos[0], oldPos[1]-SPRITE_SIZE ]

            case 'SOUTH':
                return [  oldPos[0], oldPos[1]+SPRITE_SIZE ]
        }
    }

// Changes area of the sprite sheet that is rendered based on what direction character is going
    function getSpriteLocation(direction, walkIndex) {
        switch(direction) {
            case 'SOUTH':
                return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*0}px`
            case 'NORTH':
                return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*1}px`
            case 'EAST':
                return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*2}px`
            case 'WEST':
                return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*3}px`
        }
    }

// Tracks what index will be used to render sprite
    function getWalkIndex() {
        const walkIndex = store.getState().player.walkIndex
        return walkIndex >= 2 ? 0 : walkIndex + 1
    }

// Sets the boundaries character can move for map
    function observeBoundaries(oldPos, newPos) {
        return (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_SIZE) &&
                (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE)
    }

// Sets what tiles Player can not pass through
    function observeImpassable(oldPos, newPos) {
        const tiles = store.getState().map.tiles
        const y = newPos[1] / SPRITE_SIZE
        const x = newPos[0] / SPRITE_SIZE
        const nextTile = tiles[y][x]
        // console.log(nextTile);
        return nextTile < 61
    }

    function observeCollision(oldPos, newPos) {
        const tiles = store.getState().map.tiles;
        const y = newPos[1] / SPRITE_SIZE;
        const x = newPos[0] / SPRITE_SIZE;
        const nextTile = tiles[y][x];
        // console.log(nextTile)
        return nextTile
    }

// This will update the Player state regaurding movement
    function dispatchMove(direction, newPos) {
        const walkIndex = getWalkIndex()
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: newPos,
                direction,
                walkIndex,
                spriteLocation: getSpriteLocation(direction, walkIndex),
            }
        });
    }



    // Move area function, pass in the tiles you would like to be displayed when calling
    function dispatchCharacterMoveNewArea(direction, newMapPos, tiles) {
        const walkIndex = getWalkIndex();
        store.dispatch({
            type: 'ADD_TILES',
            payload: {
                tiles: tiles
            }
        });
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: newMapPos,
                direction,
                walkIndex,
                spriteLocation: getSpriteLocation(direction, walkIndex),
            }
        });
    }

    // Records previous location
    function dispatchRecordLastLocation(direction, newMapPos) {
        const walkIndex = getWalkIndex();
        store.dispatch({
            type: "LAST_LOCATION",
            payload: {
                position: newMapPos,
                direction,
                walkIndex,
                spriteLocation: getSpriteLocation(direction, walkIndex)
            }
        });
    }

    // display battleScreen function, pass in either 'flex' or 'none', will control whether battle screen is actually displayed or not
    function dispatchBattleScreen(display) {
        store.dispatch({
            type: 'BATTLE_STATUS',
            payload: {
                inBattle: display,
                displayMonster: display
            }
        });
    }

    function dispatchBattleCaveBossScreen(display) {
        store.dispatch({
            type: 'BATTLE_STATUS_CAVE_BOSS',
            payload: {
                inBattleCaveBoss: display
            }
        });
    }

    function dispatchBattleDungeonBossScreen(display) {
        store.dispatch({
            type: 'BATTLE_STATUS_DUNGEON_BOSS',
            payload: {
                inBattleDungeonBoss: display
            }
        });
    }

    function dispatchBattleDungeonBoss2Screen(display) {
        store.dispatch({
            type: 'BATTLE_STATUS_DUNGEON_BOSS_2',
            payload: {
                inBattleDungeonBoss2: display
            }
        });
    }

    function dispatchStoreScreenAndMoveNowhere(display, oldPos, direction) {
        const walkIndex = getWalkIndex();
        store.dispatch({
            type: 'STORE_STATUS',
            payload: {
                inStore: display
            }
        });
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: oldPos,
                direction,
                walkIndex,
                spriteLocation: getSpriteLocation(direction, walkIndex)
            }
        });
    }

    function dispatchStoreScreenOnly(display) {
        store.dispatch({
            type: 'STORE_STATUS',
            payload: {
                inStore: display
            }
        });
    }

    function dispatchHealer(basePlayerHP, oldPos, direction) {
        const walkIndex = getWalkIndex();
        store.dispatch({
            type: 'HEAL_PLAYER',
            payload: {
                maxPlayerHP: basePlayerHP
            }
        });
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: oldPos,
                direction,
                walkIndex,
                spriteLocation: getSpriteLocation(direction, walkIndex)
            }
        });
    }
    
    // this functions calls the display caveboss function so it can be activated via player movement
    function dispatchCaveBossDisplay(display, position, top, left) {
        store.dispatch({
            type: 'DISPLAY_CAVE_BOSS',
            payload: {
                bossDisplay: display,
                backgroundPosition: position,
                top,
                left
            }
        });
    }

    function dispatchDungeonBossDisplay(display, position, top, left) {
        store.dispatch({
            type: 'DISPLAY_DUNGEON_BOSS',
            payload: {
                bossDisplay: display,
                backgroundPosition: position,
                top,
                left
            }
        });
    }

    function dispatchDungeonBoss2Display(display, position, top, left) {
        store.dispatch({
            type: 'DISPLAY_DUNGEON_BOSS_2',
            payload: {
                dungeonBoss2Display: display,
                backgroundPosition: position,
                top,
                left
            }
        });
    }

    // function dispatchCaveBossToBattleScreen() {
    //     store.dispatch({
    //         type: 'CAVE_BOSS_BATTLE',
    //         payload: {
    //             xPos: 200,
    //             yPos: 400

    //         }
    //     })
    // }

// This tests if the move is possible based on boundaries
// if the move is valid, calls dispatch move to update the state
// however if the move would cause collision with an activation tile
// that specific tiles actions are called 
// (example move area, doesnt just dispatch move, dispatches new map and other actions needed)

    function attemptMove(direction) {
        const oldPos = store.getState().player.position;
        const newPos = getNewPosition(oldPos, direction);
        const newMapPos = [0,192];
        const battlePos = [160 ,288];
        const backToTownPos = [608, 224];
        const basePlayerHP = store.getState().player.basePlayerHP
        const dungeonToWild = [608, 288];
        const caveSecondLevelStart = getNewPosition([0, 576], direction);
        let displayFlexOn = 'flex';
        let displayOff = 'none';
        const isListeningOn = true;
        const isListeningOff =false;
        // console.log(basePlayerHP);

        console.log(`look at me ${newPos}`);
        // town movement, if it isnt a 5(town exit) then just move character
        if (observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos) && observeCollision(oldPos, newPos) !== 5)
            dispatchMove(direction, newPos);
            dispatchRecordLastLocation(direction, oldPos);
        // to wilderness from battle or town
        if (observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos) && observeCollision(oldPos, newPos) === 5) {
            // dispatchCharacterMoveTownToWilderness(direction, newMapPos);
            dispatchCharacterMoveNewArea(direction, newMapPos, wildernessTiles);
            dispatchStoreScreenOnly(displayOff);
        }
        // dungeon to wilderness
        if (observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos) && observeCollision(oldPos, newPos) === 9) {
            // dispatchCharacterMoveTownToWilderness(direction, newMapPos);
            console.log("moving back to wilderness")
            dispatchCharacterMoveNewArea(direction, dungeonToWild, wildernessTiles);
            dispatchCaveBossDisplay(displayOff);
        }
        // wilderness to cave 
        if (observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos) && observeCollision(oldPos, newPos) === 14) {
            // dispatchCharacterMoveTownToWilderness(direction, newMapPos);
            console.log("moving to cave")
            dispatchCharacterMoveNewArea(direction, newMapPos, caveFirstLevel);
        }
        // cave level 1 to cave level 2 
        if (observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos) && observeCollision(oldPos, newPos) === 15) {
            // dispatchCharacterMoveTownToWilderness(direction, newMapPos);
            console.log("moving cave level 2")
            dispatchCharacterMoveNewArea('EAST', caveSecondLevelStart, caveSecondLevel);
            dispatchCaveBossDisplay(displayFlexOn, 'left top', 20, 260);
        }
        // battle tiles, if attempting move to it, chance of dispatching battle, chance of just movement
        if (observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos) && observeCollision(oldPos, newPos) === 11) {
            const number = Math.floor(Math.random() * 10); 
            if(number <= 2){
            // dispatchToBattleMap(direction, battlePos);
            dispatchCharacterMoveNewArea("EAST", battlePos, battleTiles);
            dispatchBattleScreen(displayFlexOn)
            } else {
                dispatchMove(direction, newPos);
            }
        }
        // wilderness to town
        if (observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos) && observeCollision(oldPos, newPos) === 19) {
            // dispatchCharacterMoveWildernessToTown(direction, backToTownPos);
            console.log("moving to town")
            dispatchCharacterMoveNewArea(direction, backToTownPos, townTiles);
        }
        // town movement, if tile 6(healer) is attempted, dispatch healer action
        if (observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos) && observeCollision(oldPos, newPos) === 6) {
            dispatchHealer(basePlayerHP, oldPos, direction);
        }
        // wilderness to dungeon, turn on dungeon boss 1 and first dungeon map
        if (observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos) && observeCollision(oldPos, newPos) === 8) {
            // dispatchCharacterMoveWildernessToTown(direction, backToTownPos);
            dispatchCharacterMoveNewArea(direction, newMapPos, dungeonTiles);
            dispatchDungeonBossDisplay(displayFlexOn, 'left top', 512, 512);
        }
        // town movement, if tile 13(store) is attempted, dispatch store action
        if (observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos) && observeCollision(oldPos, newPos) === 13) {
            // dispatchCharacterMoveWildernessToTown(direction, backToTownPos);
            dispatchStoreScreenAndMoveNowhere(displayFlexOn, oldPos, direction);
        }
        // cave movement, if tile 26(bossBattle) is attempted, dispatch battle action
        if (observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos) && observeCollision(oldPos, newPos) === 16) {
            // dispatchCharacterMoveWildernessToTown(direction, backToTownPos);
            dispatchCharacterMoveNewArea('EAST', battlePos, battleTiles);
            dispatchBattleCaveBossScreen(displayFlexOn)
            dispatchCaveBossDisplay(displayFlexOn, '-96px -96px', 230, 400)
        }
        // fight dungeonBoss, dungeon level 1
        if (observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos) && observeCollision(oldPos, newPos) === 59) {
            // dispatchCharacterMoveWildernessToTown(direction, backToTownPos);
            dispatchCharacterMoveNewArea('EAST', battlePos, battleTiles);
            dispatchBattleDungeonBossScreen(displayFlexOn)
            dispatchDungeonBossDisplay(displayFlexOn, '-96px -96px', 230, 400)
        }
        // move level 1 dungeon to lvl 2, turn off dungeon 1 boss, turn on dungeon 2 boss
        if (observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos) && observeCollision(oldPos, newPos) === 49) {
            // dispatchCharacterMoveTownToWilderness(direction, newMapPos);
            console.log("moving cave level 2")
            dispatchCharacterMoveNewArea('EAST', caveSecondLevelStart, dungeonTiles2);
            dispatchDungeonBossDisplay(displayOff);
            dispatchDungeonBoss2Display(displayFlexOn, 'left top', 512, 512);

        }

        // fight dungeonBoss2, dungeon level 2, move dungeonBoss2 to battle pos
        if (observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos) && observeCollision(oldPos, newPos) === 60) {
            // dispatchCharacterMoveWildernessToTown(direction, backToTownPos);
            dispatchCharacterMoveNewArea('EAST', battlePos, battleTiles);
            dispatchBattleDungeonBossScreen(displayFlexOn)
            dispatchDungeonBoss2Display(displayFlexOn, '-96px -96px', 230, 400)
        }
    }

// Listens for Up, Down, Left, Right on KEYDOWN events based on keyCode
    
    function handleKeyDown(e) {
        const isListening = store.getState().player.isListening
        e.preventDefault()
        if(isListening) {
        switch(e.keyCode) {
            case 37:
                return attemptMove('WEST')
            case 38:
                return attemptMove('NORTH')
            case 39:
                return attemptMove('EAST')
            case 40:
                return attemptMove('SOUTH')
            default:
                console.log(e.keyCode)
            }
        }
    }

// This attatches KEYDOWN event listener to window
    window.addEventListener('keydown', (e) => {
        handleKeyDown(e)
    })

    return player
}
