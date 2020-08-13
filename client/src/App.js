import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// import './assets/css/Reset.css';
import './assets/css/App.css';

import Router from './Router.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div class="container">
          <Router/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;