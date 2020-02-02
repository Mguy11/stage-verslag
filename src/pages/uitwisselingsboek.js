import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import SmallHeader from '../components/smallheader';
import { Footer } from '../webparts/_footer';
import NavBar from '../components/navbar';
import SideNav from '../components/sidenav';
import ContentBlockLarge from '../components/contentBlockLarge';

const Uitwisselingsboek = () => {
  return (
      <div className="uitwisselingsboek">
          <SideNav />
          <NavBar />
          <SmallHeader 
              title = "Uitwisselingsboek"
          />
          <div className="wrap">
              <Grid>
                <Row>
                  <ContentBlockLarge
                    className = "contentblock contentblock--alinea"
                    title = ""
                    body = "Tijdens onze stage waren we ook verplicht op bezoek te gaan bij andere stagebedrijven om zo ook te kijken hoe het er bij andere bedrijven aan toe gaat. Ik heb samen met een groep andere stagiairs een dagje gepland waarop we langs al onze stagebedrijven zouden gaan."
                  />
                  <ContentBlockLarge
                    className = "contentblock contentblock--alinea"
                    title = ""
                    body = "We zijn de dag gestart bij DotControl, hier liepen Nienke en ik Stage. DotControl is een data-driven creative agency. Onder begeleiding van Martijn (mijn stagebegeleider) hebben we een kleine rondleiding gehad door het bedrijf, 
                            waarna we naar de Demo-ruimte zijn gegaan voor onze presentatie. Martijn heeft eerst nog in het kort wat verteld over DotControl en vervolgens was het aan Nienke en mij om ons werk te presenteren. Daarna heeft Martijn het nog afgesloten en was het voor ons altijd om door te gaan naar het volgende bedrijf."
                  />
                  <ContentBlockLarge
                    className = "contentblock contentblock--alinea"
                    title = ""
                    body = "Als tweede zijn we naar Rodesk geweest. Rodesk is een strategisch ontwerpbureau waar ze zich ook specialiseren in UX-design. Lotte liep hier stage en heeft ons die dag een beetje begeleid. We kregen eerst een kleine introductie van haar stagebegeleider, vervolgens een mini-rondleiding door het bedrijf en daarna 
                            zijn we in een kamer gaan zitten waar Lotte haar werk heeft laten zien. Daarna hebben we nog afgesloten met haar stagebegeleider en gingen we door naar bedrijf nummer drie."
                  />
                  <ContentBlockLarge
                    className = "contentblock contentblock--alinea"
                    title = ""
                    body = "Het derde bedrijf waar we langs zijn gegaan was Redkiwi. Dit was het stagebedrijf waar Janessa stage liep. Bij binnenkomst werden we doorverwezen naar de kantine waar we wat te drinken kregen. Daar sloot Janessa’s stagebegeleider aan en die vertelde wat over het bedrijf. 
                            Janessa heeft toen wat verteld over wat zij doet binnen het bedrijf en daarna kregen we ook hier een rondleiding. Ik vond de sfeer binnen dit bedrijf echt super relaxed. Na afloop kregen we goodiebag met Redkiwi spullen, wat ik erg attent vond."
                  />
                  <ContentBlockLarge
                    className = "contentblock contentblock--alinea"
                    title = ""
                    body = "Als laatste stond Connect Holland op het programma. Hier liep Jordy stage. We kregen eerst een introductie over het bedrijf, de teams en wat Jordy deed binnen zijn team. Daarna hebben we een rondleiding gehad binnen het bedrijf, wat in dit geval uit twee verdiepingen bestond. 
                            De eerste verdieping was vooral waar het voornaamste werk gedaan werd en de tweede verdieping was meer de plek waar alle creatieve sessies en borrels gehouden werden. Toen we weer terugkwamen op de eerste verdieping kregen we nog een kleine uitleg van Jordy’s stagebegeleider over het bedrijf en hebben we gekeken naar Jordy’s werk. Daarna was het tijd om de bedrijven tour af te sluiten door een biertje te gaan nuttigen in de Irish pub."
                  />
                </Row>
              </Grid>
          </div>
          <Footer />
      </div>
  );
}

export default Uitwisselingsboek;