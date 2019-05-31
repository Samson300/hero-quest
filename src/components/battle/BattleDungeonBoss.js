import React from 'react';
import store from '../../config/store';
import '../battle/BattleDungeonBoss.css';


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
        if (props.hp <= 0 && props.dungeonBossHP > 0) {
            // props.killedPlayer();
            props.battleOff();
            props.playerDied(props.direction);
        }
    }


    render() {
        return (
            <div style={{display: this.props.inBattleDungeonBoss, flexDirection: 'column'}}>
                <div className="BattleScreenDungeonBoss" ></div>
                    <div className="PlayerStat">
                        <div className="PlayerHP">
                            Player HP: {this.props.hp}
                        </div>
                            <div className="CharacterStat">
                            Level: {this.props.lvl}
                            <br />
                            Exp: {this.props.exp}
                            <br />
                            Gold: {this.props.gold}
                        </div>
                    </div>
                    <div className="DungeonBossHp">
                        Dungeon Boss HP: {this.props.dungeonBossHP}
                    </div>
                    <div style={{marginTop: '-250px', marginLeft: '400px', display: this.props.inBattleDungeonBoss}} >
                        <button className="DungeonBossAttack" onClick={this.dungeonBattleFunctions}>ATTACK DUNGEON BOSS</button>
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