import React, { useState, useEffect } from 'react';

import { connect } from "react-redux";

import ProductElement from "../ProductElement";
import orderService from '../../services/OrderService';

import { useTranslation } from 'react-i18next';

function OrderList({user}) {
  const [orders, setOrders] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    orderService.getOrders(user.token).then(({ data }) => {
      setOrders(data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [user]);

  return (
    <div className="orders-list">
      <h1>{t('orderList.title')}</h1>
      {orders.map(order => {
        return <ul className="order-container no-list-style">
          {order.items.map(product => {
            return <ProductElement product={product} key={product._id} />;
          })}
        </ul>
      })}
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
export default connect(mapStateToProps)(OrderList);