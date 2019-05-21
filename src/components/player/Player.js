import React from 'react';
import { connect } from 'react-redux';
import walkSprite from '../../styles/HeroSprites/Characters/player_walk1.png'
import PlayerMovement from './PlayerMovement';

//This controlls how the player is styled on the screen
function Player(props) {
    return (
        <div
        style={{
            position: 'absolute',
            top: props.position[1],
            left: props.position[0],
            backgroundImage: `url('${walkSprite}')`,
            backgroundPosition: props.spriteLocation, // This is what displays the characters; currently, displaying incorrectly initally
            width: '32px',
            height: '32px'
        }}
        />
    )
}

// maps the state to props(allows us to access the state via props)
function mapStateToProps(state) {
    return {
        ...state.player
    }
}

export default connect(mapStateToProps)(PlayerMovement(Player));
