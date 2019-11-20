import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./pages/home";
import Betrokken from './pages/betrokken';
import Ondernemen from './pages/ondernemen';
import Onderzoeken from './pages/onderzoeken';
import Ontwerpen from './pages/ontwerpen';
import Ontwikkelen from './pages/ontwikkelen';

import './styles/app.scss';
import './styles/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/betrokken" exact component={Betrokken} />
      <Route path="/ondernemen" exact component={Ondernemen} />
      <Route path="/onderzoeken" exact component={Onderzoeken} />
      <Route path="/ontwerpen" exact component={Ontwerpen} />
      <Route path="/ontwikkelen" exact component={Ontwikkelen} />
      <Route patch="/" render={() => <div>404</div>} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
