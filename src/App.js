import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import { useTranslation } from 'react-i18next';

import Login from './components/Login';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';
import OrderList from './components/OrderList';

import userService from './services/UserService';

function App() {
  const { t } = useTranslation();
  const [user] = useState({});

  return (
    <Router>
      <div style={{"backgroundColor": '#282c34', color:'white'}}>
        {/* <AuthButton /> */}
        <h1>
          {t('welcome.title')}, <span>{user.firstName}</span>
        </h1>
        <nav>
          <Link to="/products" className="App-link">{t('welcome.linkProducts')}</Link>
        </nav>
        <nav>
          <Link to="/orders" className="App-link">{t('welcome.linkOrders')}</Link>
        </nav>
        <br/><span>
        <Link to="/login" className="App-link">vailogin REMOVER</Link>  
        </span>
        <br/><span>
        <Link to="/cart" className="App-link">vaicart REMOVER</Link>  
        </span>

        <Switch>
          <Route path="/products">
            <ProductsList />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <PrivateRoute path="/orders">
            <OrderList />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
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
