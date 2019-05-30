import React from 'react';
import store from '../../config/store';
import '../battle/Battle.css';


class BattleDungeonBoss extends React.Component {
    constructor(props){
        super(props);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.dungeonBossHP <= 0) {
            props.killedDungeonBoss();
            props.battleOff();
            props.battleDoneLocation(props.position);
            // Change Map to previous Map with current position
        };

    }


    render() {
        // const inBattleDungeonBoss = store.getState().player.inBattleDungeonBoss
        // console.log(inBattleDungeoBoss);
        return (
            <div style={{display: this.props.inBattleDungeonBoss, flexDirection: 'column'}}>
                <div className="BattleScreen" ></div>
                <div className="DungeonBoss_Stats">
                    HP: {this.props.hp}
                    <br />
                    dungeonBossHP: {this.props.dungeonBossHP}
                    <br />
                    Exp: {this.props.exp}
                    <br />
                    Gold: {this.props.gold}
                    <br />
                    Level: {this.props.lvl}
                </div>
                <div style={{marginTop: '-85px', display: this.props.inBattleDungeonBoss}} >
                    <button onClick={this.dungeonBattleFunctions}>ATTACK DUNGEON BOSS</button>
                    {/* <button onClick={this.props.killedMonster}>WIN</button> */}
                </div>
            </div>
        )
    }
    dungeonBattleFunctions = () => {
        this.props.dungeonBossAttack(this.props.dungeonBossAtk);
        this.props.playerAttackDungeonBoss(this.props.playerAtk);
    }

}

export default BattleDungeonBoss; 