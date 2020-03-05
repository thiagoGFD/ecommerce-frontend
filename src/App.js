import React from 'react';
import './App.css';

import { useTranslation } from 'react-i18next';

import Login from './components/Login';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {t('welcome.title')}
        </p>
        <a>
          {/* <Login/> */}
        </a>

        <ProductsList />
      </header>
    </div>
  );
}

export default App;
