import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import SmallHeader from '../components/smallheader';
import { Footer } from '../webparts/_footer';
import NavBar from '../components/navbar';
import SideNav from '../components/sidenav';
import ContentBlockLarge from '../components/contentBlockLarge';

const CheckIns = () => {
  return (
      <div className="checkins">
          <SideNav />
          <NavBar />
          <SmallHeader 
              title = "CheckIns"
          />
          <div className="wrap">
              <Grid>
                <Row>
                  <ContentBlockLarge
                    className = "contentblock contentblock--alinea"
                    title = ""
                    body = "Voor het Dura Vermeer project heb ik in eerste instantie veel moeten uitzoeken. Vooral omdat dit mijn eerste project was waar ik aan mee ging werken en ik nog geen idee had wat voor standaarden ze hier gebruikten en hoe het nieuwe CMS werkte. De eerste dagen ben ik vooral bezig geweest met rondklikken, vragen stellen en notities maken, zodat ik een basis had om op door te bouwen. Het CMS wat we gingen gebruiken heet Umbraco.
                            Het is een redelijk uitgebreid, maar vooral gebruiksvriendelijk CMS. Aangezien de mensen van Dura Vermeer met het CMS moet gaan werken wilden we alles zo netjes en compleet mogelijk opleveren. Het is mogelijk om omschrijvingen toe te voegen bij alle invoervelden in het CMS. Dit had ik allemaal netjes gedaan in het Nederlands, maar toen kwam het punt van meertaligheid in het CMS ter sprake. Het is dus mogelijk om de taal van het CMS per gebruiker in te stellen, wat bijvoorbeeld handig is voor mensen die de Nederlandse taal niet beheersen.
                            Het CMS vertaald dan alle invoerveld kopjes/titels, maar de beschrijvingen blijven Nederlands. Ik bracht toen naar voren of het niet mogelijk was die beschrijvingen ook te vertalen. Niemand wist of dat überhaupt mogelijk was, dus ben ik wat onderzoek gaan doen naar de mogelijkheden. Ook op internet waren er geen duidelijke antwoorden te vinden of het mogelijk was dit te doen. Uiteindelijk kreeg ik vanuit DotControl groen licht om contact op te nemen met Umbraco Support. Daar heb ik dezelfde vraag gesteld of het mogelijk was om vertalingen toe te voegen bij omschrijvingen van velden in het CMS.
                            Tot mijn verbazing kreeg ik daar het antwoord op dat het nog niet mogelijk was en de vraag of ik dat eventueel zelf wilde ontwikkelen voor het CMS. Helaas was daar geen tijd en budget voor binnen dit project, maar ik heb in ieder geval alles geprobeerd om deze extra functie toe te voegen."
                  />
                </Row>
              </Grid>
          </div>
          <Footer />
      </div>
  );
}

export default CheckIns;