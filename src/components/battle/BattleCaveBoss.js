import React from 'react';
import store from '../../config/store';
import '../battle/Battle.css';


class BattleCaveBoss extends React.Component {
    constructor(props){
        super(props);
    }
    

    componentDidMount() {
    }

    static getDerivedStateFromProps(props, state) {
        // we gotta combine these two statements
        // if we levelUp we reRender battle screen and levelUp
        // might just need to put the exp if inside monsterHP
        // if monster is above 0 return same state, but if exp greater 100 level up return other state same
        // if monster hp ever is 0 or lower or player hp 0 or lower battleOff   
        if (props.exp >= 100) {
                props.levelUp();
                // props.battleOn();
            }
        if (props.caveBossHP <= 0) {
            props.killedCaveBoss();
            props.killedMonster();
            props.battleOff();
            props.battleDoneLocation(props.position);
            props.levelUpAllMonsters();
            // Change Map to previous Map with current position
        };

        // if (props.caveBossHP <= 0 && props.exp >= 100) {
        //     props.killedMonster();
        //     props.levelUpCaveBoss();
        //     props.battleOff();
        // }
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
        this.props.caveBossAttack();
        this.props.playerAttackCaveBoss();
    }

}

export default BattleCaveBoss;