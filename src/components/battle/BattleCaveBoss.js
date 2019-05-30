import React from 'react';
import store from '../../config/store';
import '../battle/Battle.css';


class BattleCaveBoss extends React.Component {
    constructor(props){
        super(props);
    }
    
    static getDerivedStateFromProps(props, state) {
        // if (props.exp >= 100) {
        //         props.levelUp();
        //     }
        if (props.caveBossHP <= 0) {
            props.killedCaveBoss();
            props.battleOff();
            props.battleDoneLocation(props.position);
            props.levelUpAllMonsters();
            // Change Map to previous Map with current position
        };
        if (props.hp <= 0 && props.caveBossHP > 0) {
            // props.killedPlayer();
            props.battleOff();
            props.playerDied(props.direction);
        }
    }


    render() {
        const inBattleCaveBoss = store.getState().player.inBattleCaveBoss
        console.log(inBattleCaveBoss);
        return (
            <div style={{display: this.props.inBattleCaveBoss, flexDirection: 'column'}}>
                <div className="BattleScreen" ></div>
                <div className="PlayerHealth">
                    HP: {this.props.hp}
                    <br />
                    caveBossHP: {this.props.caveBossHP}
                    <br />
                    Exp: {this.props.exp}
                    <br />
                    Gold: {this.props.gold}
                    <br />
                    Level: {this.props.lvl}
                </div>
                <div style={{marginTop: '-85px', display: this.props.inBattleCaveBoss}} >
                    <button onClick={this.caveBattleFunctions}>ATTACK BOSS</button>
                    {/* <button onClick={this.props.killedMonster}>WIN</button> */}
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