import React from 'react';
import store from '../../config/store';
import '../battle/Battle.css';


class BattleDungeonBoss2 extends React.Component {
    constructor(props){
        super(props);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.dungeonBossHP <= 0) {
            props.killedDungeonBoss2();
            props.battleOff();
            props.battleDoneLocation(props.position);
        };

    }


    render() {
        // const inBattleDungeonBoss = store.getState().player.inBattleDungeonBoss
        // console.log(inBattleDungeoBoss);
        return (
            <div style={{display: this.props.inBattleDungeonBoss2, flexDirection: 'column'}}>
                <div className="BattleScreen" ></div>
                <div className="PlayerHealth">
                    HP: {this.props.hp}
                    <br />
                    dungeonBoss2HP: {this.props.dungeonBoss2HP}
                    <br />
                    Exp: {this.props.exp}
                    <br />
                    Gold: {this.props.gold}
                    <br />
                    Level: {this.props.lvl}
                </div>
                <div style={{marginTop: '-85px', display: this.props.inBattleDungeonBoss2}} >
                    <button onClick={this.dungeonBattleFunctions}>ATTACK DUNGEON BOSS 2</button>
                    {/* <button onClick={this.props.killedMonster}>WIN</button> */}
                </div>
            </div>
        )
    }
    dungeonBattleFunctions = () => {
        this.props.dungeonBossAttack2(this.props.dungeonBoss2Atk);
        this.props.playerAttackDungeonBoss(this.props.playerAtk);
    }

}

export default BattleDungeonBoss2; 