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
        userLoginSubmitted: () => {
            dispatch({ type: 'USER_WANTS_LOGIN', payload: {
                menuDisplay: 'none',
                loginPageDisplay: 'flex'
            }})
        }
    }
} 

const makeGameMenuSmart = connect(mapStateToProps, mapDispatchToProps);
const smartGameMenu = makeGameMenuSmart(GameMenu);
export default smartGameMenu;
