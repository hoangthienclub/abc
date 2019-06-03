import { 
    LOG_IN, 
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    LOG_OUT,
    SHOW_SIGN_IN_CONFIRMATION_MODAL,
    CONFIRM_LOGIN,
    CONFIRM_LOGIN_SUCCESS,
    CONFIRM_LOGIN_FAILURE
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
        
        case LOG_IN:
            return {
                ...state,
                isAuthenticating: true,
                signInError: false
            }
        
        case LOG_IN_SUCCESS:
            return {
                isAuthenticating: false,
                user: action.user,
                showSignInConfirmationModal: true
            }

        case LOG_IN_FAILURE:
            return {
                ...state,
                isAuthenticating: false,
                signInError: true,
                signInErrorMessage: action.error.message
            }

        case CONFIRM_LOGIN: {
            return {
                ...state,
                isAuthenticating: true
            }
        }

        case CONFIRM_LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticating: false,
                showSignInConfirmationModal: false
            }

        case CONFIRM_LOGIN_FAILURE: {
            return {
                ...state,
                isAuthenticating: false
            }
          }

        case LOG_OUT:
            return {
                ...initialState,
        }
        default:
            return state;
    }
};


