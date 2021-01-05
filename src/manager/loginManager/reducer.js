import constants from '../../constants';

const initialState = {
        user: '',
        isLoged: false,
        chat: []
    
}

 const loginPageRaducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.SAVE_CURRENT_USER_STORE:
            return {
                ...state,
                user: action.payload
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
                user : '',
            };
        case constants.SAVE_CURRENT_MESSAGE_STORE:
            return {
                ...state,
                chat: [...state.chat, action.payload],               
            };
        default:
            return state;
    }
}

export default loginPageRaducer;
