import constants from '../../constants';

const initialState = {
    currentUser: {
        name: '',
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.SAVE_CURRENT_USER_STORE:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    name: action.payload,
                }
            }
        default:
            return state;
    }
}
