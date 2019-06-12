import React from 'react';
import axios from 'axios';
import qs from 'qs'
import gameMenuBackground from '../../styles/backgroundImages/AH-Space copy.png'
import './gameMenu.css'

class GameMenu extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     character: {},
        //     messages: [],
        //     text: ''
        // }
    }

    // async componentDidMount() {
    //     response = axios.get("http://localhost4000/api");
    //     this.setState({
    //         character: response.data
    //     }, () => {
    //         console.log('done setting the state');
    //     });
    // }

    // componentDidMount() {
    //     this.props.startNewGame()
    // }


    render() {
        return (
            <div className='GameMenu' style={{
                    display: 'flex', 
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
                    <button onClick={this.props.loadGame}>Load Game</button>
                </div>
            </div>
        )
    }
    newGame = () => {
        this.props.startNewGame();
    }

    // sendState = async () => {
    //     console.log('GameMenu sendState got called')
    //     await axios({
    //         method: 'post',
    //         url: '/api',
    //         data: qs.stringify({
    //             message: this.state.text
    //         }),
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         }
    //         });
    //         this.setState({
    //             text: ''
    //     })
    // } 
}

export default GameMenu;
