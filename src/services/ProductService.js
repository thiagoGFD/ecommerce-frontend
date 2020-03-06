const axios = require('axios');

// TODO extract to env
// const BACK_URL = 'http://10.127.74.11:3001'
const BACK_URL = 'http://lgmf-ecommerce-backend.herokuapp.com'

const ProductService = {
    getProducts: () => {
        return axios.get(`${BACK_URL}/products`);
    }
}

export default ProductService;