import React from 'react';
import store from '../../config/store';
import '../battle/Battle.css';
import { tsIndexSignature } from '@babel/types';


class Battle extends React.Component {
    constructor(props){
        super(props);
        // const playerInfo = store.getState().player;
        // this.state={
        //     battleOn: false,
        //     playerHealth: playerInfo.playerHP,
        //     playerAttack: playerInfo.playerAttack,
        //     playerLevel: playerInfo.playerLevel,
        //     playerExp: playerInfo.playerExp,
        //     monsterHealth: 0,
        //     monsterAttack: 0
        // }
        
    }

    componentDidMount() {
        // setInterval(this.setState({
        //     // playerHealth: store.getState().player.playerHP
        // }), 1000)
    }

    static getDerivedStateFromProps(props, state) {
        if (props.monsterHP <= 0) {
            props.killedMonster()
            if (props.exp >= 50) {
                props.levelUp()
            }
        }
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div className="BattleScreen" ></div>
                <div className="PlayerHealth">
                    HP: {this.props.hp}
                    <br />
                    MonsterHP: {this.props.monsterHP}
                    <br />
                    Exp: {this.props.exp}
                    <br />
                    Gold: {this.props.gold}
                    <br />
                    Level: {this.props.lvl}
                </div>
                <div className="CharacterStat">
                    {/* Attack: {this.state.playerAttack} */}
                    <br/>
                    {/* Level: {this.state.playerLevel} */}
                    <br/>
                </div>
                <div >
                    <button onClick={this.battleFunctions}>ATTACK</button>
                    {/* <button onClick={this.props.killedMonster}>WIN</button> */}
                </div>
            </div>
        )
    }
    battleFunctions = () => {
        this.props.monsterAttack();
        this.props.playerAttack();
    }
    // _monsterAttack = () => {
    //     this.props.monsterAttack();
    // }
}

export default Battle;