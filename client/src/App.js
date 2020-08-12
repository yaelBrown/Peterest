import React from 'react';
import Login from './views/Login';
// import './assets/css/Reset.css';
import './assets/css/App.css';

import Router from './Router.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div class="container">
          <Router/>
          <Login/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;