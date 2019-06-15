import React from 'react';
import axios from 'axios';
import qs from 'qs'
import gameMenuBackground from '../../styles/backgroundImages/AH-Space copy.png'
import './gameMenu.css'

class GameMenu extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className='GameMenu' style={{
                    display: this.props.menuDisplay, 
                    position: 'relative',
                    backgroundImage: `url('${gameMenuBackground}')`,
                    width: '640px',
                    height: '640px',
                    margin: '20px auto'}}>
                <div className='TitleText'>
                    <h1>Hero Quest</h1>
                </div>
                <div className='GameMenuButtons'>
                    <button onClick={this.newGame}>New Game</button>
                    <button onClick={this.loginPage}>User Login</button>
                </div>
            </div>
        )
    }
    
    newGame = () => {
        this.props.startNewGame();
    }

    loginPage = () => {
        this.props.userLoginSubmitted();
    }
}

export default GameMenu;
