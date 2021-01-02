import constants from '../../constants';

const initialState = {
        name: '',
        isLoged: false,
    
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.SAVE_CURRENT_USER_STORE:
            return {
                ...state,
                    name: action.payload,
               
            }
            case constants.OPEN_CHAT_PAGE:
            return {
                
                ...state,
                isLoged: true,
            };
        case constants.OPEN_AUTORISATION_PAGE:
            return {
                ...state,
                isLoged: false,
            };
        default:
            return state;
    }
}
