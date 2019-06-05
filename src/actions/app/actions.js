import {
    SET_NOTIFICATION_DISPLAY,
} from './types';

export const setNotification = (type, message) => ({
    type: SET_NOTIFICATION_DISPLAY,
    payload: {
        type,
        message
    }
})