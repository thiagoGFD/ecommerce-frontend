const axios = require('axios');

// const BACK_URL = 'http://10.127.74.11:3001'
const BACK_URL = 'http://lgmf-ecommerce-backend.herokuapp.com'

const UserService = {
    isAuth: () => {
        return true;
        // return axios.post('http://lgmf-ecommerce-backend.herokuapp.com/sign-in',{});
    },
    
    // signIn: (username = 'shaun63', password = '4Tfw7YLa66G1nHm') => {
    signIn: (username = 'shaun63', password = '4Tfw7YLa66G1nHm') => {
        return axios.post(`${BACK_URL}/sign-in`,{
            username: username,
            password: password
        });
    }
}

export default UserService;