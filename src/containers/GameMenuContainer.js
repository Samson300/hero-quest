import { connect } from 'react-redux';
import GameMenu from '../components/gameMenu/GameMenu';

const mapStateToProps = (state) => {
    return {
        menuDisplay: state.gameMenu.menuDisplay
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startNewGame: () => {
            dispatch({ type: 'START_NEW_GAME', payload: {
                listenForKeys: true,
                gameWorldDisplay: 'flex',
                menuDisplay: 'none',
                loginPageDisplay: 'none'
            }});
        },
        loadLoginPage: () => {
            dispatch({ type: 'USER_WANTS_LOGIN_PAGE', payload: {
                menuDisplay: 'none',
                loginPageDisplay: 'flex'
            }})
        },
        loadUserLogin: () => {
            dispatch({ type: 'USER_TO_LOGIN_PAGE'})
        }
        
    }
} 

const makeGameMenuSmart = connect(mapStateToProps, mapDispatchToProps);
const smartGameMenu = makeGameMenuSmart(GameMenu);
export default smartGameMenu;
