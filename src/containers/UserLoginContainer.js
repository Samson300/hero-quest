import { connect } from 'react-redux';
import UserLogin from '../components/UserLogin';



const mapDispatchToProps = (dispatch) => {
    return {
        
        }
    } 
    
const makeUserLoginSmart = connect(null, mapDispatchToProps);
const smartUserLogin = makeUserLoginSmart(UserLogin);
export default smartUserLogin;