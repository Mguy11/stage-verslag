import React from 'react';

import Navigation from './webparts/_navigation';
import Home from './pages/home';
import Footer from './webparts/_footer';

import './styles/app.scss';
import './styles/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
