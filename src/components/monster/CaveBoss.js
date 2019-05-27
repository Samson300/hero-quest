import React from 'react';
import { connect } from 'react-redux';
import CaveBossImage from '../../styles/HeroSprites/Characters/$AH-Dragoon.png';

class CaveBoss extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div
            style={{
                display: 'absolute',
                position: 'absolute',
                top: 20,
                left: 260,
                backgroundImage: `url('${CaveBossImage}')`,
                backgroundPosition: 'top right', // This is what displays the characters; currently, displaying incorrectly initally
                width: '96px',
                height: '96px'
            }}
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

export default connect(mapStateToProps)(CaveBoss);