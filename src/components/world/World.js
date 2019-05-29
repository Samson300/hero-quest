import React from 'react';
import Player from '../player/Player';
import Map from '../map/Map';
import Battle from '../../containers/BattleContainer';
import ItemStore from '../../containers/ItemStoreContainer';
import CaveBoss from '../monster/CaveBoss';
import BattleCaveBoss from '../../containers/BattleCaveBossContainer';
import Monster from '../monster/Monster';
import DungeonBoss from '../monster/DungeonBoss';
import BattleDungeonBoss from '../../containers/BattleDungeonBossContainer';

// This holds the components Map and Player
// Makes this class
// Use component did mount to accept the props (addTiles)
class World extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(props) {
        this.props.addTiles()
    }
    render () {
        return (
            <div 
                style={{
                    position: 'relative',
                    width: '640px',
                    height: '640px',
                    margin: '20px auto'
                }}
                >
                <Map />
                <Player />
                <CaveBoss />
                <DungeonBoss />
                <Monster />
                <div style={{marginTop: '-635px'}}>
                    <ItemStore />
                    <Battle />
                    <BattleDungeonBoss />
                    <BattleCaveBoss />
                </div>
            </div>
        )
    }
}

export default World;
