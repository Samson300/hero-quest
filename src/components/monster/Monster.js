import React from 'react';
import { connect } from 'react-redux';


class Monster extends React.Component {
    constructor(props) {
        super(props)
        // this.state={
        //     monsterHP: 40,
        //     monsterAttack: 10,
        //     alive: true
        // }
    }

    render() {
        return (
            <div
            // style={{
            //     position: 'absolute',
            //     top: this.props.position[1],
            //     left: this.props.position[0],
            //     backgroundImage: `url('${walkSprite}')`,
            //     backgroundPosition: this.props.spriteLocation, // This is what displays the characters; currently, displaying incorrectly initally
            //     width: '32px',
            //     height: '32px'
            // }}
            ></div>
        )
    }
}

// maps the state to props(allows us to access the state via props)
function mapStateToProps(state) {
    return {
        ...state.monster
    }
}

export default connect(mapStateToProps)(Monster);