import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import SmallHeader from '../components/smallheader';
import { Footer } from '../webparts/_footer';
import NavBar from '../components/navbar';
import SideNav from '../components/sidenav';
import ContentBlockLarge from '../components/contentBlockLarge';

const Terugkomdagen = () => {
  return (
      <div className="terugkomdagen">
          <SideNav />
          <NavBar />
          <SmallHeader 
              title = "Stageterugkomdagen"
          />
          <div className="wrap">
              <Grid>
                <Row>
                  <ContentBlockLarge
                    className = "contentblock contentblock--alinea"
                    title = ""
                    body = "De terugkomdagen waren opgedeeld in twee delen. Tijdens het eerste deel van de terugkomdag kregen we met alle stagiairs samen kritische literatuurles. De kritische literatuurles was bedoeld om ons te helpen met het onderzoek wat we moesten gaan doen tijdens onze stage.
                            De eerste opdracht was een onderwerp kiezen waar je het onderzoek over wilde gaan doen. Vervolgens moest je daar een goede onderzoeksvraag bij opstellen. Het opstellen van een goede onderzoeksvraag is nog moeilijker dan ik dacht aangezien er best veel eisen aan zitten. Uiteindelijk luidde mijn onderzoeksvraag als volgt:
                            “Hoe kunnen we de SEO van Single Page Applications verbeteren en wat zijn daarin de belangrijke factoren?”. Nadat je onderzoeksvraag goed gekeurd was kon je beginnen met je onderzoek. Tijdens de 3e terugkomdag was het de bedoeling om samen met Roel of Rene je concept onderzoeksverslag door te nemen voor feedback. 
                            Ik heb samen met Roel naar mijn stuk gekeken en de enige opmerking was dat ik alles heel duidelijk had uitgelegd, omdat, naar eigen zeggen, zelfs hij het begreep. Het enige waar ik op moest letten was dat ik niet te veel ging schrijven alsof ik het zelf zo zou vertellen. Ik heb geprobeerd zo veel mogelijk hier op te letten, want ik weet dat ik dit vrij snel doe."
                  />
                  <ContentBlockLarge
                    className = "contentblock contentblock--alinea"
                    title = ""
                    body = "Het tweede deel van de terugkomdag bestond altijd uit een samenkomen van een groep stagiairs met de begeleidend docent. In mijn geval was dat net iets anders, want Roel en Jurgen doen dit altijd samen. We hadden dus een dubbele groep stagiaires en twee docenten. Tijdens dit samenkomen werden wat inhoudelijke zaken besproken met betrekking tot de stage en vervolgens kreeg iedereen de kans om te vertellen hoe de stage tot nu toe verliep.
                           Over het algemeen waren er binnen onze groep geen echte grote problemen. Hierdoor verliepen de gesprekken soepel en waren we snel klaar."
                  />
                  <ContentBlockLarge
                    className = "contentblock contentblock--alinea"
                    title = ""
                    body = "Ik vond zelf de kritische literatuurstudie leuk om te doen, maar ik heb, afgezien van de feedback op mijn concept, niet veel gehad aan de lessen. Ik vond het allemaal een beetje rommelig en vaag. Vooral het moment waar iedereen zijn/haar onderzoeksvraag moest inleveren op een dia die we klassikaal zouden bespreken was naar mijn idee nutteloos.
                            Ik zou het een beter idee vinden om dit bijvoorbeeld in kleinere groepen te doen. De klassikale setting zorgde voor veel afleiding en de lijst met slides was te lang voor de gereserveerde tijd, althans zo kwam het over. De eerste paar slides werden nog redelijk besproken, maar dat zwakte snel af, waarop we vervolgens de opdracht kregen zelf maar kritisch naar je onderzoeksvraag te kijken en hem te verbeteren."
                  />
                  <ContentBlockLarge
                    className = "contentblock contentblock--alinea"
                    title = ""
                    body = "De gesprekken met de andere stagiairs vond ik zelf heel fijn. Zo kon je van iedereen horen hoe de stage bij hen verliep. Hierdoor kreeg ik, vooral in het begin, de geruststelling dat ik niet de enige was die het allemaal op een bepaalde manier ervaarde."
                  />
                </Row>
              </Grid>
          </div>
          <Footer />
      </div>
  );
}

export default Terugkomdagen;