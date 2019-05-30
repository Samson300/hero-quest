import React from 'react';
import { connect } from 'react-redux';
import DungeonBoss2Image from '../../styles/Dungeon_Crawl_images/enchantress_human.png';
import store from '../../config/store';

class DungeonBoss2 extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const dungeonBoss2 = store.getState().dungeonBoss2
        return (
            <div
            style={{
                display: this.props.bossDisplay,
                position: 'absolute',
                top: dungeonBoss2.top,
                left: dungeonBoss2.left,
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
        ...state.dungeonBoss2
    }
}

export default connect(mapStateToProps)(DungeonBoss2);