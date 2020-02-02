import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import SmallHeader from '../components/smallheader';
import { Footer } from '../webparts/_footer';
import NavBar from '../components/navbar';
import SideNav from '../components/sidenav';
import ContentBlockLarge from '../components/contentBlockLarge';

const Bedrijf = () => {
  return (
      <div className="dotcontrol">
          <SideNav />
          <NavBar />
          <SmallHeader 
              title = "DotControl"
          />
          <div className="wrap">
              <Grid>
                <Row>
                  <ContentBlockLarge
                    className = "contentblock contentblock--alinea"
                    title = ""
                    body = "DotControl is “data-driven creative agency”. We hebben 4 kantoren op de volgende locaties: Amsterdam (net geopend), Rotterdam, Heerlen en in Curaçao. Hier werken verschillende disciplines nauw samen om producten neer te zetten, waarmee de doelstellingen van klanten elke dag weer overtroffen worden.
                            DotControl werkt samen met het dochterbedrijf RockBoost, dit bedrijf is gespecialiseerd in Growth Hacking. De combinatie van deze bedrijven zorgt ervoor dat er vrijwel niets uitbesteed hoeft te worden. Samen werken ze voor klanten zoals: National Geographic, Eredivisie, Havi, Talpa, Nederlandse Loterij en VARO Energy."
                  />
                </Row>
                <Row>
                    <Col xs={12}>
                        <div className="contentblock">
                          <span>De websites van beide bedrijven zijn hier te vinden: </span>
                          <ul>
                            <li style={{listStyleType: "none"}}><a href="https://dotcontrol.com/">DotControl</a></li>
                            <li style={{listStyleType: "none"}}><a href="https://rockboost.com/">RockBoost</a></li>
                          </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                      <div className="colofon">
                          
                      </div>
                    </Col>
                </Row>
              </Grid>
          </div>
          <Footer />
      </div>
  );
}

export default Bedrijf;