import React from 'react';
import { SPRITE_SIZE } from '../../config/constants';
import { connect } from 'react-redux';
import store from '../../config/store';

import '../battle/Battle.css';

class Battle extends React.Component {
    constructor(props){
        super(props);
        this.state={
            battleOn: false,
            playerHealth: 0,
            playerAttack: 0,
            monsterHealth: 0,
            monsterAttack: 0
        }
    }
    componentDidMount(props) {
        this.props.monsterAttack()
    }

    render() {
        const playerInfo = store.getState().player
        console.log(`this is player info ${playerInfo.hp}`)
        return (
            <div>
                <div className="BattleScreen"></div>
                <div className="CharacterStat">

                </div>
            </div>
        )
    }
}

export default Battle;