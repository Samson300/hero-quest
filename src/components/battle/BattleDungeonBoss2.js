import React from 'react';
import store from '../../config/store';
import '../battle/Battle.css';


class BattleDungeonBoss2 extends React.Component {
    constructor(props){
        super(props);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.dungeonBoss2HP <= 0) {
            props.killedDungeonBoss2();
            props.battleOff();
            props.battleDoneLocation(props.position);
        };

    }


    render() {
        const DungeonBoss2 = store.getState().dungeonBoss2
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
                        <button onClick={this.dungeon2BattleFunctions}>ATTACK DUNGEON BOSS</button>
                        {/* <button onClick={this.props.killedMonster}>WIN</button> */}
                    </div>
                </div>
        )
    }
    dungeon2BattleFunctions = () => {
        this.props.dungeonBoss2Attack(this.props.dungeonBoss2Atk);
        this.props.playerAttackDungeonBoss2(this.props.playerAtk);
    }

}

export default BattleDungeonBoss2; 