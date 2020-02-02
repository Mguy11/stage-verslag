import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import SmallHeader from '../components/smallheader';
import { Footer } from '../webparts/_footer';
import NavBar from '../components/navbar';
import SideNav from '../components/sidenav';
import ContentBlockLarge from '../components/contentBlockLarge';

const Toolsoup = () => {
  return (
      <div className="toolsoup">
          <SideNav />
          <NavBar />
          <SmallHeader 
              title = "Toolsoup"
          />
          <div className="wrap">
              <Grid>
                <Row>
                  <ContentBlockLarge
                    className = "contentblock contentblock--alinea"
                    title = ""
                    body = "Het Toolsoup project was een verzamel project voor interne klussen. Ik heb meegewerkt aan het overzetten van Scrumboards uit Atlassian - Jira naar Miscrosoft -  Azure DevOps,
                            opzetten e-mail template in Zendesk support en het overzetten van de DotControl en RockBoost kennisbank naar Microsoft - Sharepoint."
                  />
                </Row>
              </Grid>
          </div>
          <Footer />
      </div>
  );
}

export default Toolsoup;