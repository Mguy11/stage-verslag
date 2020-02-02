import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import SmallHeader from '../components/smallheader';
import { Footer } from '../webparts/_footer';
import NavBar from '../components/navbar';
import SideNav from '../components/sidenav';
import ContentBlockLarge from '../components/contentBlockLarge';

const FourWind = () => {
  return (
      <div className="fourwind">
          <SideNav />
          <NavBar />
          <SmallHeader 
              title = "4WIND"
          />
          <div className="wrap">
              <Grid>
                <Row>
                  <ContentBlockLarge
                    className = "contentblock contentblock--alinea"
                    title = ""
                    body = "Het 4WIND project was een interne opdracht om een verouderde website met een oud CMS te upgraden naar een nieuwe versie met bijbehorend CMS. 
                            Een extra eis aan dit project was het duidelijk opzetten van alle onderdelen omdat deze website, zoals voorheen, gebruikt zal worden als basis website voor de kleinere projecten. "
                  />
                </Row>
                <Row>
                    <Col xs={12}>
                        <div className="contentblock">
                          <span>Dit is de huidige website van 4WIND</span>
                          <ul>
                            <li style={{listStyleType: "none"}}><a href="https://4windkitesurfles.nl/">4WIND kitesurfles</a></li>
                          </ul>
                        </div>
                    </Col>
                </Row>
              </Grid>
          </div>
          <Footer />
      </div>
  );
}

export default FourWind;