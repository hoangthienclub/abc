import {
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_OUT,
    SHOW_SIGN_IN_CONFIRMATION_MODAL
} from './types';

import userApi from '../../api/userApi';

const signInSuccess = (data) => ({
    type: SIGN_IN_SUCCESS,
    data
})

export const signIn = (email, password) => {
    return async dispatch => {
        const data = await userApi.signIn(email, password);
        dispatch(signInSuccess(data))
    };
};