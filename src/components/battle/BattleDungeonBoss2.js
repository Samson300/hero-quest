import React from 'react';
import store from '../../config/store';
import '../battle/Battle.css';


class inBattleDungeonBossTwo extends React.Component {
    constructor(props){
        super(props);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.dungeonBossTwoHP <= 0) {
            props.killedDungeonBossTwo();
            props.battleOff();
            props.battleDoneLocation(props.position);
        };

    }


    render() {
        return (
        <div style={{display: this.props.inBattleDungeonBossTwo, flexDirection: 'column'}}>
                <div className="BattleScreen" ></div>
                <div className="PlayerHealth">
                    HP: {this.props.hp}
                    <br />
                    dungeonBossTwoHP: {this.props.dungeonBossTwoHP}
                    <br />
                    Exp: {this.props.exp}
                    <br />
                    Gold: {this.props.gold}
                    <br />
                    Level: {this.props.lvl}
                </div>
            <div style={{marginTop: '-85px', display: this.props.inBattleDungeonBossTwo}} >
                    <button onClick={this.dungeontwoBattleFunctions}>ATTACK DUNGEON TWO BOSS</button>
                    {/* <button onClick={this.props.killedMonster}>WIN</button> */}
                </div>
            </div>
        )
    }
    dungeontwoBattleFunctions = () => {
        this.props.dungeonBossTwoAttack(this.props.dungeonBossTwoAtk);
        this.props.playerAttackDungeonBossTwo(this.props.playerAtk);
    }

}

export default inBattleDungeonBossTwo; 