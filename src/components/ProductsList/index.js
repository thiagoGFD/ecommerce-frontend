import React, { useState, useEffect } from 'react';

import Button from "../Button";
import productService from '../../services/ProductService';

import { useTranslation } from 'react-i18next';
import { CustomPlaceholder } from 'react-placeholder-image';


function ProductsList(props) {
  const [products, setProducts] = useState([]);
  // TODO criar custom hook
  const [cartProducts, setCartProducts] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    productService.getProducts().then(({ data }) => {
      setProducts(data);
    })
    .catch(function (error) {
      console.log(error);
    });
  });

  const addProduct = (product) => {
    console.log('product added ' , product)
    setCartProducts([
      ...cartProducts,
      product
    ]);
  }

  return (
    <div className="shopping-list">
      <h1>{t('productsList.title')}</h1>
      <ul className="products-container no-list-style">
        {products.map(product => {
          return <li key={product._id}>
              <CustomPlaceholder width={100} height={100} />
              <span>{product.name}</span>
              <Button label={t('productsList.add')} handleClick={()=>{addProduct(product)}}/>
            </li>;
        })}
      </ul>
    </div>
  );
}

export default ProductsList;