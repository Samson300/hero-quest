import React, { Component } from 'react';

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

export default Player;
