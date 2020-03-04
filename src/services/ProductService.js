const axios = require('axios');

const ProductService = {
    getProducts: () => {
        return axios.get('http://lgmf-ecommerce-backend.herokuapp.com/products');
    }
}

export default ProductService;