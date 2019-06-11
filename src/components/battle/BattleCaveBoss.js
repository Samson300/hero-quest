import React from 'react';
import store from '../../config/store';
import '../battle/BattleCaveBoss.css';


class BattleCaveBoss extends React.Component {
    constructor(props){
        super(props);
    }
    
    static getDerivedStateFromProps(props, state) {
        if (props.caveBossHP <= 0) {
            props.killedCaveBoss();
            props.battleOff();
            props.battleDoneLocation(props.position);
            props.levelUpAllMonsters();
            // Change Map to previous Map with current position
        };
        if (props.hp <= 0 && props.caveBossHP > 0) {
            props.playerDied(props.direction);
        }
    }


    render() {
        const inBattleCaveBoss = store.getState().player.inBattleCaveBoss
        console.log(inBattleCaveBoss);
        return (
            <div style={{display: this.props.inBattleCaveBoss, flexDirection: 'column'}}>
                <div className="BattleScreenCaveBoss" ></div>
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
                    <div className="CaveBossHp">
                        Cave Boss HP: {this.props.caveBossHP}
                        <br />
                        Cave Boss Atk: {this.props.caveBossAtk}
                    </div>
                    <div style={{marginTop: '-250px', marginLeft: '400px', display: this.props.inBattleCaveBoss}} >
                        <button className="CaveBossAttack" onClick={this.caveBattleFunctions}>ATTACK CAVE BOSS</button>
                    </div>
            </div>
        )
    }
    caveBattleFunctions = () => {
        this.props.caveBossAttack(this.props.caveBossAtk);
        this.props.playerAttackCaveBoss(this.props.playerAtk);
    }

}

export default BattleCaveBoss;