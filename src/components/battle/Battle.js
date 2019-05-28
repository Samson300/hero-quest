import React from 'react';
import store from '../../config/store';
import '../battle/Battle.css';


class Battle extends React.Component {
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
        if (props.monsterHP <= 0) {
            props.killedMonster();
            props.battleOff();
            props.battleDoneLocation(props.position);
            // Change Map to previous Map with current position
        };

        if (props.monsterHP <= 0 && props.exp >= 100) {
            props.killedMonster();
            props.levelUp();
            props.battleOff();
        }
    }


    render() {
        const inBattle = store.getState().player.inBattle
        console.log(inBattle);
        return (
            <div style={{display: this.props.inBattle, flexDirection: 'column'}}>
                <div className="BattleScreen" ></div>
                <div className="PlayerHealth">
                    HP: {this.props.hp}
                    <br />
                    MonsterHP: {this.props.monsterHP}
                    <br />
                    Exp: {this.props.exp}
                    <br />
                    Gold: {this.props.gold}
                    <br />
                    Level: {this.props.lvl}
                </div>
                <div style={{marginTop: '-85px', display: this.props.inBattle}} >
                    <button onClick={this.battleFunctions}>ATTACK</button>
                    {/* <button onClick={this.props.killedMonster}>WIN</button> */}
                </div>
            </div>
        )
    }
    battleFunctions = () => {
        this.props.monsterAttack();
        this.props.playerAttack();
    }

}

export default Battle;