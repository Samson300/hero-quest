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
        if (props.exp >= 200) {
                props.levelUp();
                // props.battleOn();
            }
        if (props.monsterHP <= 0) {
            props.killedMonster();
            props.battleOff();
            
            // Change Map to previous Map with current position
            props.battleDoneLocation(props.position);
        };

        if (props.hp <= 0 && props.monsterHP > 0) {
            props.playerDied(props.position);
        }
}


    render() {
        const inBattle = store.getState().player.inBattle
        console.log(inBattle);
        return (
            <div style={{display: this.props.inBattle, flexDirection: 'column'}}>
                <div className="BattleScreen" ></div>
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
                    <div className="MonsterHp">
                        Monster HP: {this.props.monsterHP}
                    </div>
                    <div style={{marginTop: '-250px', marginLeft: '400px', display: this.props.inBattle}} >
                        <button className="MonsterAttack" onClick={this._battleFunctions}>ATTACK MONSTER</button>
                        {/* <button onClick={this.props.killedMonster}>WIN</button> */}
                    </div>
            </div>
        )
    }
    _battleFunctions = () => {
        this.props.monsterAttack(this.props.monsterAtk);
        this.props.playerAttack(this.props.playerAtk);
    }
}

export default Battle;