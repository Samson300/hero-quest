import { connect } from 'react-redux';
import GameMenu from '../components/gameMenu/GameMenu';

const mapStateToProps = (state) => {
    return {
        areWeListening: state.player.isListening,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startNewGame: () => {
            dispatch({ type: 'START_NEW_GAME', payload: {
                listenForKeys: true,
            }})
        },
        userLogin: () => {
            dispatch({ type: 'USER_LOGIN_FORM', payload: {
                listenForKeys: true,
            }})
        }
    }
}

const makeGameMenuSmart = connect(mapStateToProps, mapDispatchToProps);
const smartGameMenu = makeGameMenuSmart(GameMenu);
export default smartGameMenu;
