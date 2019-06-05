import { 
    SET_NOTIFICATION_DISPLAY,
    SET_LOADING
} from '../actions/app/types';


const initState = {
    notification: {
        type: 'success',
        message: null,
    },
    showLoading: false
};

export default (state = initState, action) => {
    switch (action.type) {
        case SET_NOTIFICATION_DISPLAY:
            return {
                ...state,
                notification: action.payload ||initialState.notification
            }
       
        case SET_LOADING:
            return {
                ...state,
                showLoading: action.data
            }
        
        default:
            return state;
    }
};


