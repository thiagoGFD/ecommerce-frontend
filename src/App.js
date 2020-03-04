import React from 'react';
import './App.css';

import Login from './components/Login';
import ProductsList from './components/ProductsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Test
        </p>
        <a>
          <Login/>
        </a>

        {/* <ProductsList name="lista teste"/> */}
      </header>
    </div>
  );
}

export default App;
