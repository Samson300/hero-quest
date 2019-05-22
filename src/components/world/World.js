import React from 'react';
import Player from '../player/Player';
import Map from '../map/Map';
import WorldUpdate from './WorldUpdate';
import Battle from '../../containers/BattleContainer';


import { townTiles, wildernessTiles } from '../../config/constants';
import store from '../../config/store';

// This holds the components Map and Player
// Makes this class
// Use component did mount to accept the props (addTiles)
class World extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(props) {
        // console.log(props);
        // mapDispatchToProps(World.props.addTiles)
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
                <Battle />
                {/* <Map />
                <Player /> */}
            </div>
        )
    }
}


// function mapStateToProps(state) {
//     return {
//         ...state.player
//     }
// }

// export default connect(mapStateToProps)(WorldUpdate(World))
export default World;
