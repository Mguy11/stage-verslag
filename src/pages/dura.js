import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import SmallHeader from '../components/smallheader';
import { Footer } from '../webparts/_footer';
import NavBar from '../components/navbar';
import SideNav from '../components/sidenav';
import ContentBlockLarge from '../components/contentBlockLarge';

const DuraVermeer = () => {
  return (
      <div className="duravermeer">
          <SideNav />
          <NavBar />
          <SmallHeader 
              title = "DuraVermeer"
          />
          <div className="wrap">
              <Grid>
                <Row>
                  <ContentBlockLarge
                    className = "contentblock contentblock--alinea"
                    title = ""
                    body = "Het Dura Vermeer project was een opdracht vanuit constructiebedrijf Dura Vermeer, om een platform op te zetten voor de projecten die ze doen. Het doel van dit project is snel websites op te kunnen zetten.
                            De websites zullen allemaal gebruik gaan maken van een basis design. Voor de websites worden blokken ontwikkeld waarmee de webpagina’s gebouwd kunnen worden. Het design van de blokken staat vast, maar de kleuren en de content kunnen wel aangepast worden. Ook is het de bedoeling het CMS zo overzichtelijk mogelijk in te richten, omdat de content door Dura Vermeer zelf ingevuld zal worden."
                  />
                </Row>
              </Grid>
          </div>
          <Footer />
      </div>
  );
}

export default DuraVermeer;