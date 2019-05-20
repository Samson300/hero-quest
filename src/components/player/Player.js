import React from 'react';
import { connect } from 'react-redux';
import walkSprite from '../../styles/HeroSprites/Characters/player_walk.png';
import PlayerMovement from './PlayerMovement';

function Player(props) {
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

export default connect(mapStateToProps)(PlayerMovement(Player));

// export default Player;
