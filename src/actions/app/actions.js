import {
    SET_NOTIFICATION_DISPLAY,
} from './types';

export const setNotification = (data) => ({
    type: SET_NOTIFICATION_DISPLAY,
    payload: data
})