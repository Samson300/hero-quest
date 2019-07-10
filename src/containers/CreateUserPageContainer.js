import { connect } from 'react-redux';
import CreateUserPage from '../components/gameMenu/CreateUserPage';

const mapStateToProps = (state) => {
    return {
        createUserPageDisplay: state.createUserPage.createUserPageDisplay
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // this needs to take the inputs from the field and then pass them via the payload as info to log the user in
        // also this will eventually work to turn the createUserPage off and then the gameMenuDisplay on
        createNewUser: () => {
            dispatch({ type: 'NEW_USER_LOG_IN', payload: {
                // menuDisplay: 'flex',
                // createUserPageDisplay: 'none'
            }})
        }
    }
} 

const makeCreateUserPageSmart = connect(mapStateToProps, mapDispatchToProps);
const smartCreateUserPage = makeCreateUserPageSmart(CreateUserPage);
export default smartCreateUserPage;
