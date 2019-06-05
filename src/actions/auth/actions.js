import {
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_OUT,
    SHOW_SIGN_IN_CONFIRMATION_MODAL
} from './types';

import userApi from '../../api/userApi';

const signInSuccess = (user) => ({
    type: SIGN_IN_SUCCESS,
    user
})

const showSignInConfirmationModal = () => ({
    type: SHOW_SIGN_IN_CONFIRMATION_MODAL
})

const signInFailure = () => ({
    type: SIGN_IN_FAILURE
})


export const signIn = (email, password) => {
    return async dispatch => {
        const data = await userApi.signIn(email, password);
        console.log(data)
    };
};