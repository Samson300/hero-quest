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
            return 'grass'
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
        case 19:
            return 'towntile'
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
        // case 25:
        //     return 'healer'
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
