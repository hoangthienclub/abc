const axios = require('axios');


const instance = axios.create({
    baseURL: 'https://golaservices.herokuapp.com/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});
  // Alter defaults after instance has been created

module.exports = {
    register: async (data) => {
        const result = await instance.post('/v1/register', data)
        return result;
    },

    login: async (email, password) => {
        try {
            const data = await instance.post('v1/login', {
                email, password,
                fcmToken: 'asdasd',
                deviceId: '12312'
            })
            return data.data;
        }
        catch (err) {
            console.log(err)
        }
    }
}