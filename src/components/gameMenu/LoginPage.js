import React from 'react';
import axios from 'axios';
import qs from 'qs'
import gameMenuBackground from '../../styles/backgroundImages/AH-Space copy.png'
import './gameMenu.css'

class LoginPage extends React.Component {
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
            <div className='LoginPage' style={{
                    display: this.props.loginPageDisplay, 
                    position: 'relative',
                    backgroundImage: `url('${gameMenuBackground}')`,
                    width: '640px',
                    height: '640px',
                    margin: '20px auto'}}>
                <div className='TitleText'>
                    <h1>Hero Quest</h1>
                </div>
                <div className='LoginScreenButtons'>
                    {/* this will take the input fields info and test login, if successful goes to main gameMenu to load or start new */}
                    <button onClick={this.userLogin}>Login</button>
                    <button onClick={this.createUserPage}>Create Account</button>
                </div>
            </div>
        )
    }
    // this will call functions needed to dispatch actions associated with logging in
    // will make sure user is logging in (has correct username pw, user existss etc)
    // pulls either all users saved games, or just one to start (most recent)
    // loads up the gameMenu and turns off login page
    // if user pressed newGame - newGame starts
    // if user presses loadGame - data from the login is used to call (select gamedata from  users where id = id)
    // or if its easier when login we store that data in variable and then on loadGame that data is just used
    // to use the data we just dispatch action that updates state of everything we need (player stats, monster stats etc)
    // 
    userLogin = () => {
    }
    // this will turn off the login page and turn on the create user page
    createUserPage = () => {

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

export default LoginPage;
