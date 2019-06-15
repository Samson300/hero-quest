const initialState = {
    createUserPageDisplay: 'none',
}

const createUserPageReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'LOAD_CREATE_USER_PAGE':
            return {
                createUserPageDisplay: action.payload.createUserPageDisplay
            }
        default:
            return state;
        }
    
}

export default createUserPageReducer;