import {
    LOG_IN,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    SHOW_SIGN_IN_CONFIRMATION_MODAL
} from './types';

export const login = () => ({
    type: LOG_IN
})

export const logInSuccess = (user) => ({
    type: LOG_IN_SUCCESS,
    user
})

export const showSignInConfirmationModal = () => ({
    type: SHOW_SIGN_IN_CONFIRMATION_MODAL
})

export const logInFailure = () => ({
    type: LOG_IN_FAILURE
})