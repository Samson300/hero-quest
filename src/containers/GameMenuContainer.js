import { connect } from 'react-redux';
import GameMenu from '../components/gameMenu/GameMenu';


const mapDispatchToProps = (dispatch) => {
    return {
        startNewGame: (display) => {
            dispatch({ type: 'START_NEW_GAME', payload: {
                listenForKeys: true,
                gameWorldDisplay: display
            }})
        }
    }
} 

const makeGameMenuSmart = connect(null, mapDispatchToProps);
const smartGameMenu = makeGameMenuSmart(GameMenu);
export default smartGameMenu;
