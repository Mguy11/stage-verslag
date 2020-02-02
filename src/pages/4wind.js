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
              title = "4wind"
          />
          <div className="wrap">
              <Grid>
                <Row>
                  <ContentBlockLarge
                    className = "contentblock contentblock--alinea"
                    title = ""
                    body = "Het 4Wind project was een interne opdracht om een verouderde website met een oud CMS te upgraden naar een nieuwe versie met bijbehorend CMS. 
                            Een extra eis aan dit project was het duidelijk opzetten van alle onderdelen omdat deze website, zoals voorheen, gebruikt zal worden als basis website voor de kleinere projecten. "
                  />
                </Row>
              </Grid>
          </div>
          <Footer />
      </div>
  );
}

export default FourWind;