const initialState = {
    loginPageDisplay: 'none',
}

const loginPageReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'USER_WANTS_LOGIN':
            return {
                loginPageDisplay: action.payload.loginPageDisplay
            }
        default:
            return state;
        }
    
}

export default loginPageReducer;