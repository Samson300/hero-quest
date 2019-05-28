import React from 'react';
import { connect } from 'react-redux';
import monsterImage from '../../styles/Dungeon_Crawl_images/deep_troll_berserker.png'


class Monster extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div
            style={{
                position: 'absolute',
                display: this.props.displayMonster,
                top: 250,
                left: 440,
                backgroundImage: `url('${monsterImage}')`,
                width: '32px',
                height: '32px'
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

export default connect(mapStateToProps)(Monster);