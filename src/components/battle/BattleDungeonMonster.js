import React from 'react';
import '../battle/Battle.css';


class BattleDungeonMonster extends React.Component {
    constructor(props){
        super(props);
    }
    

    componentDidMount() {
    }

    static getDerivedStateFromProps(props, state) {
        if (props.exp >= 100) {
                props.levelUp();
                // props.battleOn();
            }
        if (props.dungeonMonsterHP <= 0) {
            props.killedMonster();
            props.battleOff();
            
            // Change Map to previous Map with current position
            props.battleDoneLocation(props.position);
        };

        if (props.hp <= 0 && props.dungeonMonsterHP > 0) {
            props.playerDied(props.position);
        }
}


    render() {
        return (
            <div style={{display: this.props.inBattleDungeonMonster, flexDirection: 'column'}}>
                <div className="BattleScreen" ></div>
                <div className="PlayerHealth">
                    HP: {this.props.hp}
                    <br />
                    DungeonMonsterHP: {this.props.dungeonMonsterHP}
                    <br />
                    Exp: {this.props.exp}
                    <br />
                    Gold: {this.props.gold}
                    <br />
                    Level: {this.props.lvl}
                </div>
                <div style={{marginTop: '-85px', display: this.props.inBattleDungeonMonster}} >
                    <button onClick={this._battleFunctions}>ATTACK</button>
                </div>
            </div>
        )
        
    }
    _battleFunctions = () => {
        this.props.dungeonMonsterAttack(this.props.dungeonMonsterAtk);
        this.props.playerAttack(this.props.playerAtk);
    }
}

export default BattleDungeonMonster;