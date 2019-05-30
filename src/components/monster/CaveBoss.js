import React from 'react';
import { connect } from 'react-redux';
import CaveBossImage from '../../styles/HeroSprites/Characters/$AH-Dragoon.png';
import store from '../../config/store';

class CaveBoss extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const caveBoss = store.getState().caveBoss
        console.log(caveBoss)
        return (
            <div
            style={{
                display: this.props.bossDisplay,
                position: 'absolute',
                top: caveBoss.top,
                left: caveBoss.left,
                backgroundImage: `url('${CaveBossImage}')`,
                backgroundPosition: caveBoss.backgroundPosition, // This is what displays the characters; currently, displaying incorrectly initally
                width: '96px',
                height: '96px',
                marginTop: '30px'
            }}
            ></div>
        )
    }
}

// maps the state to props(allows us to access the state via props)
function mapStateToProps(state) {
    return {
        ...state.caveBoss
    }
}

export default connect(mapStateToProps)(CaveBoss);