import React from 'react';
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
                            <br />
                            Player Atk: {this.props.playerAtk}
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
                        <br />
                        Dungeon Boss Atk: {this.props.dungeonBossAtk}
                    </div>
                    <div style={{marginTop: '-250px', marginLeft: '400px', display: this.props.inBattleDungeonBoss}} >
                        <button className="DungeonBossAttack" onClick={this.dungeonBattleFunctions}>ATTACK DUNGEON BOSS</button>
                    </div>
            </div>
        )
    }
    dungeonBattleFunctions = () => {
        this.props.playerAttackDungeonBoss(this.props.playerAtk);
        this.props.dungeonBossAttack(this.props.dungeonBossAtk);
    }

}

export default BattleDungeonBoss; 