import { 
    SET_NOTIFICATION_DISPLAY,
    SET_LOADING
} from '../actions/app/types';


const initState = {
    notification: {
        isShowing: false,
        type: 'success',
        message: null,
    },
    showLoading: false
};

export default (state = initState, action) => {
    switch (action.type) {
        case SET_NOTIFICATION_DISPLAY:
            return state.set('notification', action.payload || initialState.get('notification'))
       
        case SET_LOADING:
            return state.set('showLoading', action.data);
        
        default:
            return state;
    }
};


