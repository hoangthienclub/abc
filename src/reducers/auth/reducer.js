import { 
    SIGN_IN,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_OUT,
    SHOW_SIGN_IN_CONFIRMATION_MODAL
} from '../../actions/auth/types';

const initState = {
    isAuthenticating: false,
    user: {},
    signInError: false,
    showSignInConfirmationModal: false,
    confirmLoginError: false,
    signInErrorMessage: '',
    confirmLoginErrorMessage: ''
};

export default (state = initState, action) => {
    switch (action.type) {
        case SHOW_SIGN_IN_CONFIRMATION_MODAL:
            return {
                ...state,
                isAuthenticating: false,
                showSignInConfirmationModal: true
            }
        
        case SIGN_IN:
            return {
                ...state,
                isAuthenticating: true,
                signInError: false
            }
        
        case SIGN_IN_SUCCESS:
            return {
                isAuthenticating: false,
                user: action.user,
                showSignInConfirmationModal: true
            }

        case SIGN_IN_FAILURE:
            return {
                ...state,
                isAuthenticating: false,
                signInError: true,
                signInErrorMessage: action.error.message
            }
        default:
            return state;
    }
};


