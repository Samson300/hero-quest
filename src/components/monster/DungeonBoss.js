import React from 'react';
import { connect } from 'react-redux';
import DungeonBossImage from '../../styles/Dungeon_Crawl_images/death_knight.png';
import store from '../../config/store';

class DungeonBoss extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const dungeonBoss = store.getState().dungeonBoss
        console.log(dungeonBoss)
        return (
            <div
            style={{
                display: this.props.bossDisplay,
                position: 'absolute',
                top: dungeonBoss.top,
                left: dungeonBoss.left,
                backgroundImage: `url('${DungeonBossImage}')`,
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
        ...state.dungeonBoss
    }
}

export default connect(mapStateToProps)(DungeonBoss);