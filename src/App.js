import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./pages/home";
import Introductie from './pages/intro';
import Betrokken from './pages/betrokken';
import Ondernemen from './pages/ondernemen';
import Onderzoeken from './pages/onderzoeken';
import Ontwerpen from './pages/ontwerpen';
import Ontwikkelen from './pages/ontwikkelen';
import DuraVermeer from './pages/dura';
import FourWind from './pages/4wind';
import Bedrijf from './pages/bedrijf';
import Checkins from './pages/checkins';
import Reflectie from './pages/reflectie';
import Terugkomdagen from './pages/terugkomdagen';
import Toolsoup from './pages/toolsoup';
import Uitwisselingsboek from './pages/uitwisselingsboek';

import './styles/app.scss';
import './styles/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/introductie" exact component={Introductie} />
                <Route path="/betrokken" exact component={Betrokken} />
                <Route path="/ondernemen" exact component={Ondernemen} />
                <Route path="/onderzoeken" exact component={Onderzoeken} />
                <Route path="/ontwerpen" exact component={Ontwerpen} />
                <Route path="/ontwikkelen" exact component={Ontwikkelen} />
                <Route path="/dura-vermeer" exact component={DuraVermeer} />
                <Route path="/4wind" exact component={FourWind} />
                <Route path="/bedrijf" exact component={Bedrijf} />
                <Route path="/checkins" exact component={Checkins} />
                <Route path="/reflectie" exact component={Reflectie} />
                <Route path="/terugkomdag" exact component={Terugkomdagen} />
                <Route path="/toolsoup" exact component={Toolsoup} />
                <Route path="/uitwisselingsboek" exact component={Uitwisselingsboek} />
                <Route patch="/" render={() => <div>404</div>} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
