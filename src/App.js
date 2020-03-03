import React from 'react';
import './App.css';

import ProductsList from './components/ProductsList/ProductsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Test
        </p>
        <a>
          Login
        </a>

        <ProductsList name="lista teste"></ProductsList>
      </header>
    </div>
  );
}

export default App;
