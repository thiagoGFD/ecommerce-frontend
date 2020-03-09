import React, { useState, useEffect } from 'react';

import ProductElement from "../ProductElement";
import productService from '../../services/ProductService';

import { useTranslation } from 'react-i18next';
import { useCart } from '../../hooks/useCart';

import Cart from '../Cart';
import Dropdown from '../Dropdown';

function ProductList() {
  const [products, setProducts] = useState([]);
  const { t } = useTranslation();
  const [cartProducts, addProduct, removeProduct] = useCart();

  useEffect(() => {
    productService.getProducts().then(({ data }) => {
      setProducts(data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);

  return (
    <div className="shopping-list">
      <h1>{t('productList.title')}</h1>
      <Dropdown label={t('cart.title')} startsOpen={cartProducts.length}>
        <Cart products={cartProducts} removeProduct={removeProduct} />
      </Dropdown>
      <ul className="products-container no-list-style">
        {products.map(product => {
          return <ProductElement product={product} key={product._id} addProduct={addProduct} />;
        })}
      </ul>
    </div>
  );
}

export default ProductList;