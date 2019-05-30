import React from 'react';


class GameMenu extends React.Component {
    constructor(props) {
        super(props);
    }


    // static getDerivedStateFromProps() {

    // }
    render() {
        return (
            <div className='GameMenu' style={{display: this.props.menuDisplay, flexDirection: 'column'}}>
                <div className='GameMenuButtons'>
                    <button onClick={this.props.newGame()}>New Game</button>
                    <button onClick={this.props.userLogIn()}>Load Game</button>
                </div>
            </div>
        )
    }

    newGame = () => {
        this.props.startNewGame();
    }
}

export default GameMenu;
