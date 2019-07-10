import { connect } from 'react-redux';
import LoginPage from '../components/gameMenu/LoginPage';

const mapStateToProps = (state) => {
    return {
        loginPageDisplay: state.loginPage.loginPageDisplay
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLoginSubmitted: () => {
            dispatch({ type: 'USER_WANTS_LOGIN', payload: {
                menuDisplay: 'none',
                loginPageDisplay: 'flex'
            }})
        }
    }
} 

const makeLoginPageSmart = connect(mapStateToProps, mapDispatchToProps);
const smartLoginPage = makeLoginPageSmart(LoginPage);
export default smartLoginPage;
