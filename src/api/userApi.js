import request from './base';
import { BASE_URL_USER } from './../utils/constants';

module.exports = {
    async signIn(email, password) {
        return await request(BASE_URL_USER, '/sign-in', {
            method: 'post',
            data:{ email, password }
        })
    }
}