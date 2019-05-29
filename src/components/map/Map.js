import React from 'react';
import { SPRITE_SIZE } from '../../config/constants';
import { connect } from 'react-redux';


import './styles.css';

// Gets the tiles sprite based on what number is on the Map grid
function getTileSprite(type) {
    // we can walk through 0-20
    // cant walk through 20+
    switch(type) {
        case 0:
            return 'tile'
        case 1:
            return 'bigDoor'
        case 2:
            return 'door'
        case 3:
            return 'chest'
        case 4:
            return 'stoneEntrance'
        case 5:
            return 'townExit'
        case 6:
            return 'healer'
        case 7:
            return 'dungeonFloor'
        case 8:
            return 'bigDoor'
        case 9:
            return 'bigDoor'
        case 10:
            return 'moreGrass5'
        case 11:
            return 'battleTrigger'
        case 12:
            return 'battleTile'
        case 13:
            return 'itemStore'
        case 14:
            return 'caveEntrance'
        case 15:
            return 'caveLairEntrance'
        case 16:
            return 'caveBossFight'
        case 18:
            return 'townTileLeft'
        case 19:
            return 'townTile'
        case 20:
            return 'townTileRight'
        case 21:
            return 'stoneWall'
        case 22:
            return 'tree'
        case 23:
            return 'townWall'
        case 24:
            return 'fountain'
        case 25:
            return 'dungeonWall'
        case 26:
            return 'dungeonFountain'
        case 27:
            return 'flame'

        ////////// Battle Tiles ////////
        case 28:
            return 'grassEdgeLeft'
        case 29:
            return 'grassEdgeRight'
        case 30:
            return 'grassMiddle'
        case 31:
            return 'grassBottom'
        case 32:
            return 'grassBottomLeft'
        case 33:
            return 'grassBottomRight'
        case 34:
            return 'grassTop'
        case 35:
            return 'grassTopRight'
        case 36:
            return 'grassTopLeft'
        ///////////////////////////////
        case 37:
            return 'plainTree'
        case 38:
            return 'dungeonEntranceWall'
        case 39:
            return 'water'
        case 40:
            return 'blueFlowerGrass1'
        case 41:
            return 'blueFlowerGrass2'
        case 42:
            return 'yellowFlowerGrass1'
        case 43:
            return 'yellowFlowerGrass2'
        case 44:
            return 'caveWall'
        case 45:
            return 'caveFloor'
        case 46:
            return 'lavaFloor'
        case 47:
            return 'lavaWall'
        case 48:
            return 'lavaBridge'
        case 60:
            return 'battleDungeonBoss'
    }
}

// Sets the tiles height and width to the Player Sprite size, calls getTileSprite
function MapTile(props) {
    return <div
    className={`tile ${getTileSprite(props.tile)}`}
    style={{
        height: SPRITE_SIZE,
        width: SPRITE_SIZE
    }}
    >
    
    </div>
}

// Sets the rows for map based on the Map grid and Player height, calls MapTile
function MapRow(props) {
    return <div
    className="row"
    style={{
        height: SPRITE_SIZE
    }}
    >
    {
        props.tiles.map( tile => <MapTile tile={tile} />)
    }
    </div>
}

// Controlls how our Map is styled and displayed to the screen, calls MapRow
function Map(props) {
    return (
        <div 
            style={{
            position: 'relative',
            top: '0px',
            left: '0px',
            width: '640px',
            height: '640px',
            outline: '5px solid white'
            // border: '4px solid white'
        }}
        >
        {
            props.tiles.map(row => <MapRow tiles={row} />)
        }
        </div>
    )
}

// maps the state to props(allows us to access the state via props)
function mapStateToProps(state) {
    return {
        tiles: state.map.tiles
    }
}

export default connect(mapStateToProps)(Map);
