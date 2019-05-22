import React from 'react';

class Monster extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            monsterHP: 40,
            monsterAttack: 10,
            alive: true
        }
    }

    render() {
        return (
            <div
            // style={{
            //     // position: 'absolute',
            //     // top: this.props.position[1],
            //     // left: this.props.position[0],
            //     // backgroundImage: `url('${walkSprite}')`,
            //     // backgroundPosition: this.props.spriteLocation, // This is what displays the characters; currently, displaying incorrectly initally
            //     // width: '32px',
            //     // height: '32px'
            // }}
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

export default Monster;