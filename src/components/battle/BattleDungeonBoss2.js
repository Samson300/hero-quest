import React from 'react';
import store from '../../config/store';
import '../battle/BattleDungeonBoss.css';


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

        if (props.hp <= 0 && props.dungeonBossTwoHP > 0) {
            // props.battleOff();
            props.playerDiedToDungeonBossTwo(props.position);
        }
    }


    render() {
        return (
            <div style={{display: this.props.inBattleDungeonBossTwo, flexDirection: 'column'}}>
            <div className="BattleScreenDungeonBoss" ></div>
                <div className="PlayerStat">
                    <div className="PlayerHP">
                        Player HP: {this.props.hp}
                        <br/>
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
                    Dungeon Boss 2 HP: {this.props.dungeonBossTwoHP}
                    <br />
                    Dungeon Boss 2 Atk: {this.props.dungeonBossTwoAtk}
                </div>
                <div style={{marginTop: '-250px', marginLeft: '400px', display: this.props.inBattleDungeonBossTWO}} >
                    <button className="DungeonBossAttack" onClick={this.dungeontwoBattleFunctions}>ATTACK DUNGEON TWO BOSS</button>
                </div>
            </div>
        )
    }
    dungeontwoBattleFunctions = () => {
        this.props.playerAttackDungeonBossTwo(this.props.playerAtk);
        this.props.dungeonBossTwoAttack(this.props.dungeonBossTwoAtk);
    }

}

export default inBattleDungeonBossTwo; 