import React from 'react';
import axios from 'axios';


class GameMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            character: {},
            messages: [],
            text: ''
        }
    }

    async componentDidMount() {
        response = axios.get("http://localhost4000/api");
        this.setState({
            character: response.data
        }, () => {
            console.log('done setting the state');
        });
    }
    // static getDerivedStateFromProps() {

    // }
    render() {
        return (
            <div className='GameMenu' style={{display: this.props.menuDisplay, flexDirection: 'column'}}>
                <div className='GameMenuButtons'>
                    <button onClick={this.props.newGame}>New Game</button>
                    <button onClick={this.props.loadGame}>Load Game</button>
                </div>
            </div>
        )
    }

    newGame = () => {
        this.props.startNewGame();
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
