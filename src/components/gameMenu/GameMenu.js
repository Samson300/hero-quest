import React from 'react';
import axios from 'axios';
import World from '../world/World';
import qs from 'qs'

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


    render() {
        return (
            <div className='GameMenu' style={{display: this.props.menuDisplay, position: 'relative',
                    width: '640px',
                    height: '640px',
                    margin: '20px auto'}}>
                <div className='GameMenuButtons'>
                    <button onClick={this.newGame}>New Game</button>
                    <button onClick={this.props.loadGame}>Load Game</button>
                </div>
            </div>
        )
    }

    newGame = () => {
        this.props.startNewGame('flex');
    }

    sendState = async () => {
        console.log('GameMenu sendState got called')
        await axios({
            method: 'post',
            url: '/api',
            data: qs.stringify({
                message: this.state.text
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
            });
            this.setState({
                text: ''
        })
    } 
}

export default GameMenu;
