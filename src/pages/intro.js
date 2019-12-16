import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import SmallHeader from '../components/smallheader';
import NavBar from '../components/navbar';
import { Footer } from '../webparts/_footer';
import ContentBlockLarge from '../components/contentBlockLarge';

const Introductie = () => {
  
  const title = 'Introductie';

  return (
    <div className="intro">
      <SmallHeader
        title = "Introductie"
       />
      <NavBar />
      <div className="wrap">
        <Grid>
            <Row style={{padding: '4rem'}}>
                <ContentBlockLarge
                    className = "contentblock contentblock--alinea"
                    title = "Hoe is het allemaal begonnen?"
                    body = "Deze website heb ik gebouwd voor de verslaglegging van mijn 3e jaars stage. Ik heb mijn stage gelopen bij DotControl in Rotterdam. 
                    DotControl is samen met RockBoost een full service web bureau."
                />
                <ContentBlockLarge 
                    className = "contentblock contentblock--alinea"
                    title = ""
                    body = "Om bij het begin te beginnen, Hoe ben ik hier eigenlijk terecht gekomen? Het begon allemaal met een “ongepland” bedrijfsbezoek vanuit de Hogeschool Rotterdam. 
                    Ik heb me samen met een groep mede studenten de avond ervoor ingeschreven en we zijn gewoon meegegaan. 
                    Vervolgens kregen we een presentatie van een Designer en een Developer. In de presentatie lieten ze vooral zien wat DotControl en RockBoost voor bedrijven zijn, hoe de sfeer is en wat ze in de toekomst willen bereiken.
                     Kortom het standaard bedrijven praatje. Wat anders was waren de gesprekken erna. Ik was best geïnteresseerd geraakt tijdens de presentatie, dus ik ging maar even informeren. 
                     Ik heb toen een heel gesprek gehad met Martijn (de Developer), hij vertelde me wat ik allemaal kon verwachten tijdens mijn stage."
                />
                <ContentBlockLarge 
                    className = "contentblock contentblock--alinea"
                    title = ""
                    body = "Wat voor mij vooral interessant leek was stage lopen bij de combinatie tussen deze twee bedrijven (DotControl en RockBoost). 
                    Waarom de combinatie? Nou, omdat ik ook geïnteresseerd ben in SEO en dan vooral de technische kant ervan. En ik dacht toen, waarom zou ik dit niet proberen te combineren. 
                    Ik heb dit idee vervolgens ook al even voorgelegd aan Martijn en het leek hem ook wel een leuk idee. Er waren alleen wel een paar problemen, 
                    er was nog niemand die een combinatie stage had gedaan en ik moest eerst maar eens gaan zorgen dat ik überhaupt in aanmerking kwam voor een stageplek. 
                    Ik was namelijk niet de enige die de stageplek wilde."
                />
                <ContentBlockLarge 
                    className = "contentblock contentblock--alinea"
                    title = ""
                    body = "Diezelfde dag ben ik ’s avonds begonnen aan een opzet voor een portfolio. Ik wilde laten zien dat ik wat meer kon dan een simpele website opzetten, dus besloot ik een website te gaan bouwen in React.
                    Dit had ik nog nooit gedaan en dat zorgde voor een aardige uitdaging, maar die wilde ik heel graag aangaan, want ik wilde graag stage lopen bij DotControl."
                />
                <ContentBlockLarge 
                    className = "contentblock contentblock--alinea"
                    title = ""
                    body = "Een paar weken later was er op school een stagemarkt georganiseerd waar we op gesprek konden met potentiële stagebedrijven. Ik had me ook daar bij DotControl ingeschreven en ging wederom in gesprek met Martijn. 
                    Ook heb ik andere bedrijven gesproken waaronder Burst en 23G, maar ik had nergens hetzelfde gevoel als bij DotControl."
                />
                <ContentBlockLarge 
                    className = "contentblock contentblock--alinea"
                    title = ""
                    body = "Ik heb me daarna volledig gericht op mijn portfolio, want ik wilde niet zonder een portfolio gaan solliciteren op een stageplek. 
                    Uiteindelijk heb ik mijn eerste en enige sollicitatie gestuurd naar DotControl en daarop kreeg ik een uitnodiging voor een gesprek."
                />
                <ContentBlockLarge 
                    className = "contentblock contentblock--alinea"
                    title = ""
                    body = "Na mijn eerste gesprek was iedereen vrij enthousiast, dus moest ik maar weer verder afwachten voor een tweede gesprek. 
                    Ondertussen kreeg ik van Nienke te horen dat zij al was aangenomen bij DotControl en dat gaf mij toch even wat stress, want Martijn had al eens gezegd dat ze niet heel veel studenten aannemen per periode.
                     Een kleine drie weken later kreeg ik ook eindelijk het telefoontje waar ik zo lang op wachtte.
                      Mijn plek was ook een feit, de contracten werden ondertekend en ik kon de dagen gaan aftellen tot ik mocht beginnen met mijn stage bij het bedrijf waar ik super graag naartoe wilde."
                />
                <ContentBlockLarge 
                    className = "contentblock contentblock--alinea"
                    title = ""
                    body = "In september ben ik dan ook begonnen als Front-End stagiair bij DotControl en dat was een goede keuze! "
                />
            </Row>
        </Grid>
      </div>
      <Footer />
    </div>
  ); 
}

export default Introductie;