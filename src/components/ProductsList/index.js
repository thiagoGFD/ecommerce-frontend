import React, { useState, useEffect } from 'react';

import productService from '../../services/ProductService';

function ProductsList(props) {
  const [products, setProducts] = useState([]);  

  useEffect(() => {
    productService.getProducts().then(({ data }) => {
      setProducts(data);
    })
    .catch(function (error) {
      console.log(error);
    });
  });

  return (
    <div className="shopping-list">
      <h1>ProductsList for {props.name}</h1>
      <ul>
        {products.map(product => {
          return <li>{product.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default ProductsList;