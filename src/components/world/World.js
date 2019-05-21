import React from 'react';
import Player from '../player/Player';
import Map from '../map/Map';

import { townTiles } from '../../config/constants';
import store from '../../config/store';

// This holds the components Map and Player
function World(props) {
    store.dispatch({ type: 'ADD_TILES', payload: {
        tiles: townTiles //updates maps state.tiles with townTiles
    }})
    return (
        <div 
            style={{
                position: 'relative',
                width: '640px',
                height: '320px',
                margin: '20px auto'
            }}
            >
            <Map />
            <Player />
        </div>
    )
}

export default World;
