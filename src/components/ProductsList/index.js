import React, { useState, useEffect } from 'react';

import productService from '../../services/ProductService';

import { useTranslation } from 'react-i18next';

function ProductsList(props) {
  const [products, setProducts] = useState([]);
  const { t, i18n } = useTranslation();

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
      <h1>{t('productsList.title')}</h1>
      <ul>
        {products.map(product => {
          return <li>{product.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default ProductsList;