import React from 'react';
import { useSelector } from "react-redux";

import { useTranslation } from 'react-i18next';

import Button from "../Button";

import orderService from '../../services/OrderService';

function Cart({products, removeProduct}) {
  const { t } = useTranslation();
  const {user} = useSelector(state => state.authentication)

  const checkout = () => {
    console.log('checkout! ')
    orderService.saveOrder(products, user.token).then(({data}) => {
      console.log('fechou', data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="cart-container">
      <div className="cart-dropdown">
        {/* <h3>{t('cart.title')}</h3> */}
        <ul className="cart-list no-list-style">
          {products.map(product => {
            return <li key={product._id}>
              <span>{product.name}</span>
              <Button label={t('cart.remove')} handleClick={()=>{removeProduct(product)}} />
            </li>;
          })}
        </ul>
        <Button label={t('cart.checkout')} handleClick={checkout} />
      </div>
    </div>
  );
}

export default Cart;