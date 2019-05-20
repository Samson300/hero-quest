import React from 'react';
import { connect } from 'react-redux';
import walkSprite from './player_walk.png';
import handleMovement from './movement';


function Player() {
    return (
        <div
        style={{
            position: 'absolute',
            top: props.position[1],
            left: props.position[0],
            backgroundImage: `url('${walkSprite}')`,
            width: '32px',
            height: '32px'
        }}
        />
    )
}

function mapStateToProps(state) {
    return {
        ...state.player
    }
}

export default connect(mapStateToProps)(handleMovement(Player));