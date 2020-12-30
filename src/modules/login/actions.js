import constants from '../../constants';

export const onSaveCurrentUser = payload => ({
    type: constants.SAVE_CURRENT_USER_STORE,
    payload,
});
