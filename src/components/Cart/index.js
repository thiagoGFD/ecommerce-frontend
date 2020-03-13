import React from 'react';

import { connect } from "react-redux";
import Button from "../Button";
import { useTranslation } from 'react-i18next';

import orderService from '../../services/OrderService';

function Cart({products, removeProduct, user}) {
  const { t } = useTranslation();

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

function mapStateToProps(state) {
  const { authentication } = state;
  const { user } = authentication;
  return {
      user
  };
}
export default connect(mapStateToProps)(Cart);