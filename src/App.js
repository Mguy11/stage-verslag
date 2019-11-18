import React from 'react';
import Navigation from './webparts/_navigation';

import './styles/app.scss';
import './styles/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home />
    </div>
  );
}

export default App;
