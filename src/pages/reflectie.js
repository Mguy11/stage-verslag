import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import SmallHeader from '../components/smallheader';
import { Footer } from '../webparts/_footer';
import NavBar from '../components/navbar';
import SideNav from '../components/sidenav';
import ContentBlockLarge from '../components/contentBlockLarge';

const Reflectie = () => {
  return (
      <div className="reflectie">
          <SideNav />
          <NavBar />
          <SmallHeader 
              title = "Reflectie"
          />
          <div className="wrap">
              <Grid>
                <Row>
                  <ContentBlockLarge
                    className = "contentblock contentblock--alinea"
                    title = ""
                    body = "Ik was echt naar mijn stage aan het toeleven. Ik had in jaar twee al snel geen zin meer in school. 
                            Dit had vooral te maken met ongemotiveerde teamleden waardoor het moeilijk was om in mijn eentje gemotiveerd te blijven. Toen het eindelijk zover was viel het toch wel zwaar. Ik had namelijk snel het idee dat ik niet goed genoeg was om daar stage te lopen. 
                            Ik werd een beetje in het diepe gegooid. Heel af en toe heb ik mijn collega om hulp gevraagd, maar ik wilde niet te veel vragen. Ik wilde voorkomen dat ik als “lastig” zou overkomen. 
                            Doordat ik dit hele verkeerde idee gevormd had voor mezelf maakte ik het alleen maar lastiger voor mezelf. 
                            Daarbij hielp het ook niet mee dat ik keer op keer weer feedback kreeg op mijn Pull Requests. Dit kwam bij mij vooral binnen als commentaar."
                  />
                  <ContentBlockLarge
                    className = "contentblock contentblock--alinea"
                    title = ""
                    body = "Na een paar weken en een aantal gesprekken met mijn stagebegeleider had ik eindelijk duidelijk voor mezelf dat ik daar was om te leren, dat ik vragen mocht stellen en vooral dat ik daar was als stagiair. 
                            Ik hoefde dus niet alles al te weten en al mijn werk foutloos op te leveren, in plaats daarvan moest ik gewoon mijn best doen en proberen mezelf te verbeteren waar ik kon. Dat heb ik ook zeker gedaan. Elke week kreeg ik nieuwe feedback en die heb ik omgezet in leerdoelen voor mezelf. 
                            Zo heb ik mezelf op meerdere punten kunnen verbeteren. Mijn belangrijkste verbetering was het omgaan met feedback. Dit gaat mij in de toekomst zeker helpen."
                  />
                  <ContentBlockLarge
                    className = "contentblock contentblock--alinea"
                    title = ""
                    body = "Wat ik mee wil nemen voor mijn afstuderen zijn de volgende dingen. Ik wil voor mijn afstudeerstage een bedrijf kiezen waar ik kan gaan werken aan een onderwerp wat ik wil onderzoeken. 
                            Verder ga ik zorgen dat ik op een goede manier om ga met feedback, zodat ik de situaties die zich voor deden tijdens deze stage kan voorkomen. Als laatste moet ik ook zorgen dat ik wat meer vertrouwen heb in mijn skills en vooral mezelf. Met die set aan verbeteringen denk ik dat ik klaar ben om mijn afstuderen te starten."
                  />
                </Row>
              </Grid>
          </div>
          <Footer />
      </div>
  );
}

export default Reflectie;