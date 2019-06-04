import request from './base';

export default {
    async login() {
        return await request('/country', {
			method: 'get',
			accept: 'application/json',
			data: {},
		})
    }
}