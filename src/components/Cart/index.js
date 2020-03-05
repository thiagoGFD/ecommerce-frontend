import React, { useState } from 'react';
import Button from "../Button";
import { useTranslation } from 'react-i18next';

function Cart() {
  const { t } = useTranslation();
  const [cartProducts, setCartProducts] = useState([]);

  const removeProduct = product => setCartProducts(cartProducts.filter(cproduct => cproduct._id !== product._id));

  return (
    <div className="cart-page">
      <h1>{t('cart.title')}</h1>
      <ul className="cart-list no-list-style">
        {cartProducts.map(product => {
          return <li key={product._id}>
            <span>{product.name}</span>
            <Button label={t('cart.remove')} handleClick={removeProduct}/>
          </li>;
        })}
      </ul>
      <Button label={t('cart.checkout')} />
    </div>
  );
}

export default Cart;