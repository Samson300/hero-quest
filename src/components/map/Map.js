import React from 'react';
import { SPRITE_SIZE } from '../../config/constants';
import { connect } from 'react-redux';


import './styles.css';

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

function Map(props) {
    return (
        <div 
            style={{
            position: 'relative',
            top: '0px',
            left: '0px',
            width: '640px',
            height: '320px',
            border: '4px solid white',
        }}
        >
        {
            props.tiles.map(row => <MapRow tiles={row} />)
        }
        </div>
    )
}

// export default Map;
function mapStateToProps(state) {
    return {
        tiles: state.map.tiles
    }
}

export default connect(mapStateToProps)(Map);
