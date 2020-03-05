import React, { useState } from 'react';
import Button from "../Button";
import { useTranslation } from 'react-i18next';

function Cart() {
  const { t, i18n } = useTranslation();

  const products = [{name:'p adicionado'}]
  return (
    <div className="cart-page">
      <h1>{t('cart.title')}</h1>
      <ul className="cart-list">
        {products.map(product => {
          return <li>{product.name}</li>;
        })}
      </ul>
      <Button label={t('cart.checkout')} />
    </div>
  );
}

export default Cart;