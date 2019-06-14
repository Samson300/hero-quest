import React from 'react';
import axios from 'axios';
import qs from 'qs'
import gameMenuBackground from '../../styles/backgroundImages/AH-Space copy.png'
import './gameMenu.css'

class CreateUserPage extends React.Component {
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
            <div className='CreateUserPage' style={{
                    display: this.props.createUserPageDisplay, 
                    position: 'relative',
                    backgroundImage: `url('${gameMenuBackground}')`,
                    width: '640px',
                    height: '640px',
                    margin: '20px auto'}}>
                <div className='TitleText'>
                    <h1>Hero Quest</h1>
                </div>
                <div className='CreateUserPageButtons'>
                    {/* this will take the input fields info and test login, if successful goes to main gameMenu to load or start new */}
                    <button onClick={this.createNewUser}>Login</button>
                    <button onClick={this.toGameMenu}>Create Account</button>
                </div>
            </div>
        )
    }
    
    // this will create the user and add them to the DB
    // then if successfull will log them in and bring to menu
    createNewUser = () => {

    }
    // this will just go back to gameMenu main page
    // this will turn off this createUserPage display and
    // turn on gameMenuDisplay
    toGameMenu = () => {

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

export default CreateUserPage;
