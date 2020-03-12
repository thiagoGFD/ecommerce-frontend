import React, { useState } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import { useTranslation } from 'react-i18next';

import Login from './components/Login';
import ProductList from './components/ProductList';
import OrderList from './components/OrderList';

import userService from './services/UserService';
import Header from './components/Header';
import Home from './components/Home';
import SideMenu from './components/SideMenu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function App() {
  const { t } = useTranslation();
  const [user] = useState({});

  const getLink = (whereTo, text) => {
    return (
      <nav>
        <Link to={whereTo} className="App-link">{text}</Link> <FontAwesomeIcon className="nav-arrow" icon={faChevronRight} />
      </nav>
    );
  }

  return (
    <div className="app-main">
    <Router>
      <Header user={user} />
      <div className="app-body">
        <SideMenu>
          {getLink('/products', t('welcome.linkProducts'))}
          {getLink('/orders', t('welcome.linkOrders'))}
          <br/><span>
          <Link to="/login" className="App-link">vailogin REMOVER</Link>  
          </span>
        </SideMenu>
        <div class="app-page-content">
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
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userService.isAuth() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default App;
