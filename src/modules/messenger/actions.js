import constants from '../../constants';

export const openAutorisationPage = () => ({
    type: constants.OPEN_AUTORISATION_PAGE,
});

export const saveMessage = payload => ({
    type: constants.SAVE_CURRENT_MESSAGE_STORE,
    payload,
});
