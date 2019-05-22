import React from 'react';
import { connect } from 'react-redux';
import walkSprite from '../../styles/HeroSprites/Characters/player_walk1.png'
import PlayerMovement from './PlayerMovement';

//This controlls how the player is styled on the screen
class Player extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            hp: 100,
            attack: 20,
            level: 1,
            exp: 0,
            alive: true,
            gold: 0,
            inventory: []
        }
    }
    render() {
        return (
            <div
            style={{
                position: 'absolute',
                top: this.props.position[1],
                left: this.props.position[0],
                backgroundImage: `url('${walkSprite}')`,
                backgroundPosition: this.props.spriteLocation, // This is what displays the characters; currently, displaying incorrectly initally
                width: '32px',
                height: '32px'
            }}
            />
        )
    }
}

// maps the state to props(allows us to access the state via props)
function mapStateToProps(state) {
    return {
        ...state.player
    }
}

export default connect(mapStateToProps)(PlayerMovement(Player));
