import { 
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_OUT,
    SHOW_SIGN_IN_CONFIRMATION_MODAL
} from '../actions/auth/types';

const initState = {};

export default (state = initState, action) => {
    switch (action.type) {
        case SIGN_IN_SUCCESS:
            return action.data
      
        default:
            return state;
    }
};


