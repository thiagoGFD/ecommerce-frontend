import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './configure-store';

import './App.scss';

import { useTranslation } from 'react-i18next';

import Login from './components/Login';
import ProductList from './components/ProductList';
import OrderList from './components/OrderList';

import Header from './components/Header';
import Home from './components/Home';
import SideMenu from './components/SideMenu';
import PrivateRoute from './components/PrivateRoute';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faShoppingCart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

function App() {
  const { t } = useTranslation();
  const [user] = useState({});

  const getLink = (whereTo, text, faIcon) => {
    return (
      <nav>
        <FontAwesomeIcon icon={faIcon} />
        <Link to={whereTo} className="App-link">{text}</Link> <FontAwesomeIcon className="nav-arrow" icon={faChevronRight} />
      </nav>
    );
  }

  return (
    <Provider store={store}>
      <div className="app-main">
        <Router>
          <Header user={user} />
          <div className="app-body">
            <SideMenu>
              {getLink('/products', t('welcome.linkProducts'), faShoppingCart)}
              {getLink('/orders', t('welcome.linkOrders'), faShoppingBag)}
            </SideMenu>
            <div className="app-page-content">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/products">
                  <ProductList />
                </Route>
                <Route path="/login">
                  <Login/>
                </Route>
                <PrivateRoute path="/orders">
                  <OrderList />
                </PrivateRoute>
              </Switch>
            </div>
          </div>
          </Router>
        </div>
    </Provider>
  );
}

export default App;
