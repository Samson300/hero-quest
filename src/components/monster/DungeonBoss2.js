import React from 'react';
import { connect } from 'react-redux';
import DungeonBoss2Image from '../../styles/Dungeon_Crawl_images/enchantress_human.png';
import store from '../../config/store';

class DungeonBossTwo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const dungeonBossTwo = store.getState().dungeonBossTwo
        return (
            <div
            style={{
                display: this.props.bossDisplay,
                position: 'absolute',
                top: dungeonBossTwo.top,
                left: dungeonBossTwo.left,
                backgroundImage: `url('${DungeonBoss2Image}')`,
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
        ...state.dungeonBossTwo
    }
}

export default connect(mapStateToProps)(DungeonBossTwo);