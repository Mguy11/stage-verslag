import React, { Component } from 'react';
import { Col } from 'react-flexbox-grid';

export default class ContentBlock extends Component {
    showSettings (event) {
        event.preventDefault();
    }

    render () {
        return (
            <Col xs={12}>
                <div className="contentblock">
                    <h2 className="contentblock__title">Welkom</h2>
                        <div className="contentblock__content">
                            <p>Dit is de stageverslag website voor mijn 3e jaars stage bij
                            <a href="https://dotcontrol.com" className="contentblock__DC-link" target="_blank">&nbsp;DotControl&nbsp;</a>
                             als Front-Ender. Hier heb ik de kans gekregen om mijn programmeer skills een boost te geven door mee te werken aan echte projecten.
                             Ik heb mogen werken voor zowel grote en kleine klanten en dat bracht genoeg uitdagingen met zich mee. om al mijn competenties te behalen
                             heb ik besloten een website te designen en te bouwen, zodat ook mijn ontwerp deel behaald kan worden.</p>
                        </div>
                </div>
            </Col>
        );
    }
}