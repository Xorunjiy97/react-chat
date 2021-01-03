import constants from '../../constants';

export const onSaveCurrentUser = payload => ({
    type: constants.SAVE_CURRENT_USER_STORE,
    payload,
});

export const openChatPage = () => ({
    type: constants.OPEN_CHAT_PAGE ,
});

export const openAutorisationPage = () => ({
    type: constants.OPEN_AUTORISATION_PAGE,
});
