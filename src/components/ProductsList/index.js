import React, { useState, useEffect } from 'react';

import ProductElement from "../ProductElement";
import productService from '../../services/ProductService';

import { useTranslation } from 'react-i18next';

function ProductsList() {
  const [products, setProducts] = useState([]);
  const { t } = useTranslation();

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
      <ul className="products-container no-list-style">
        {products.map(product => {
          return <ProductElement product={product} />;
        })}
      </ul>
    </div>
  );
}

export default ProductsList;