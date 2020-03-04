const axios = require('axios');

const UserService = {
    isAuth: () => {
return true;
        // return axios.post('http://lgmf-ecommerce-backend.herokuapp.com/sign-in',{});
    },
    
    signIn: (name, password) => {
        return axios.post('http://lgmf-ecommerce-backend.herokuapp.com/sign-in',{
            name: name,
            password: password
        });
    }
}

export default UserService;