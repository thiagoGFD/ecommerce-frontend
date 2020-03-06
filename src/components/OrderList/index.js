import React, { useState, useEffect } from 'react';

import ProductElement from "../ProductElement";
import orderService from '../../services/OrderService';

import { useTranslation } from 'react-i18next';

function OrderList() {
  const [orders, setOrders] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    orderService.getOrders('=TOKEN=').then(({ data }) => {
      setOrders(data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);

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

export default OrderList;