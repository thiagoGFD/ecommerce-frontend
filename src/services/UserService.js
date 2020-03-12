const axios = require('axios');

// const BACK_URL = 'http://10.127.74.11:3001'
const BACK_URL = 'http://lgmf-ecommerce-backend.herokuapp.com'

const UserService = {    
    signIn: (username, password) => {
        return axios.post(`${BACK_URL}/sign-in`,{
            username: username,
            password: password
        });
    }
}

export default UserService;