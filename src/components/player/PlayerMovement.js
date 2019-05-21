import store from '../../config/store';
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../../config/constants';

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
        return nextTile < 20
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

// This tests if the move is possible based on boundaries
// if the move is valid, calls dispatch move to update the state 
    function attemptMove(direction) {
        const oldPos = store.getState().player.position;
        const newPos = getNewPosition(oldPos, direction);
        if (observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos))
            dispatchMove(direction, newPos)
    }

// Listens for Up, Down, Left, Right on KEYDOWN events based on keyCode
    function handleKeyDown(e) {
        e.preventDefault()
        
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

// This attatches KEYDOWN event listener to window
    window.addEventListener('keydown', (e) => {
        handleKeyDown(e)
    })

    return player
}
