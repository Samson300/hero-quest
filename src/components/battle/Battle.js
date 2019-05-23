import React from 'react';
import store from '../../config/store';
import '../battle/Battle.css';


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
    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div className="BattleScreen" ></div>
                <div className="PlayerHealth">
                    HP: {this.props.hp}
                    <br />
                    MonsterHP: {this.props.monsterHP}
                </div>
                <div className="CharacterStat">
                    {/* Attack: {this.state.playerAttack} */}
                    <br/>
                    {/* Level: {this.state.playerLevel} */}
                    <br/>
                    {/* Exp: {this.state.playerExp} */}
                </div>
                <div >
                    <button onClick={this.props.monsterAttack}>Press Me</button>
                    <button onClick={this.props.playerAttack}>Press Me</button>
                </div>
            </div>
        )
    }
    // _monsterAttack = () => {
    //     this.props.monsterAttack();
    // }
}

export default Battle;