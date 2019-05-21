import React from 'react';
import { SPRITE_SIZE } from '../../config/constants';
import { connect } from 'react-redux';


import './styles.css';

// Gets the tiles sprite based on what number is on the Map grid
function getTileSprite(type) {
    switch(type) {
        case 0:
            return 'tile'
        case 1:
            return 'tree'
        case 2:
            return 'rock'
        case 3:
            return 'chest'
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
            height: '320px',
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
