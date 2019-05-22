import React from 'react';
import { SPRITE_SIZE } from '../../config/constants';
import { connect } from 'react-redux';
import store from '../../config/store';
// import playerInfo from '../../reducers/playerReducer';
import '../battle/Battle.css';
// const playerInfo = store.getState().player



class Battle extends React.Component {
    constructor(props){
        super(props);
        const playerInfo = store.getState().player
        this.state={
            battleOn: false,
            playerHealth: playerInfo.playerHP,
            playerAttack: playerInfo.playerAttack,
            playerLevel: playerInfo.playerLevel,
            playerExp: playerInfo.playerExp,
            monsterHealth: 0,
            monsterAttack: 0
        }
    }
    componentDidMount(props) {
        // this.props.monsterAttack()
    }

    render(props) {
        // console.log(`this is player info ${playerInfo.playerHP}`)
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div className="BattleScreen"></div>
                <div className="PlayerHealth">
                    HP: {this.playerHealth}
                </div>
                <div className="CharacterStat">
                    Attack: {this.playerAttack}
                    <br/>
                    Level: {this.playerLevel}
                    <br/>
                    Exp: {this.playerExp}
                </div>
            </div>
            // <div />
            //     <button onClick={this._monsterAttack()}>Press Me</button>
            // </div>
        )
    }
    _monsterAttack = (props) => {
        console.log('hello')
    }
}

export default Battle;