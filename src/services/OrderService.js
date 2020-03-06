const axios = require('axios');

// const BACK_URL = 'http://10.127.74.11:3001'
const BACK_URL = 'http://lgmf-ecommerce-backend.herokuapp.com'

const OrderService = {
    getOrders: () => {
        return axios.get(`${BACK_URL}/orders`);
    },
    
    saveOrder: (products, token) => {
        return axios.post(`${BACK_URL}/orders`,{
            items: products,
            token: token
        });
    }
}

export default OrderService;