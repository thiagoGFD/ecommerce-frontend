import { useState } from 'react';

export const useCart = () => {
    const [ products, setProducts ] = useState([]);

    const addProduct = (product) => {
        setProducts([...products, product]);
    }

    const removeProduct = (product) => {
        const filtered = products.filter(p => p._id !== product._id);
        setProducts(filtered);
    }
    
    return [products, addProduct, removeProduct];
}