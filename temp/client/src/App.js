import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// import './assets/css/Reset.css';
import './Assets/css/App.css';

import Router from './Router.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Router/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;