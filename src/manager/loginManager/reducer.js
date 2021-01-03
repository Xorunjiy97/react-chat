import constants from '../../constants';

const initialState = {
        name: '',
        isLogged: false,

}

const loginPage = (state = initialState, action) => {
    switch (action.type) {
        case constants.SAVE_CURRENT_USER_STORE:
            return {
                ...state,
                    name: action.payload,

            }
            case constants.OPEN_CHAT_PAGE:
            return {

                ...state,
                isLogged: true,
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

export default loginPage;
