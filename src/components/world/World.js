import React from 'react';
import Player from '../player/Player';
import Map from '../map/Map';

import { tiles } from '../../config/constants';
import store from '../../config/store';

function World(props) {
    store.dispatch({ type: 'ADD_TILES', payload: {
        tiles,
    }})
    return (
        <div 
            style={{
                position: 'relative',
                width: '640px',
                height: '320px',
                margin: '20 px auto',
            }}
            >
            <Map />
            <Player />
        </div>
    )
}

export default World;
