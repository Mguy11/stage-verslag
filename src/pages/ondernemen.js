import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import SmallHeader from '../components/smallheader';
import NavBar from '../components/navbar';
import { Footer } from '../webparts/_footer';
import  Slider  from '../components/slider';
import Tabs from '../webparts/_tabs';
import ContentBlock from '../components/contentBlock';
import TestimonialBlock from '../components/testimonialBlock';
import ContentBlockLarge from '../components/contentBlockLarge';

const Ondernemen = () => {
    return (
        <div className="ondernemen">
            <SmallHeader 
                title = "Ondernemen"
            />
            <NavBar />
            <div className="wrap">
            <Grid>
                <TestimonialBlock
                    subtitle1="Ondernemende houding: "
                    body1="De CMGT'er heeft een actueel beeld van de stand van zaken in de maatschappij op het gebied van technologie. 
                    Dit beeld wordt gebruikt om oplossingen te ontwikkelen die er toe doen voor de klant of het stagebedrijf, en deze uit zichzelf aan te dragen."
                    subtitle2="Ondernemende vaardigheden: "
                    body2="De CMGT'er houdt zijn kennis over actuele ontwikkelingen bij en weet zijn bronnen daarvoor op waarde te schatten. Hierdoor is de CMGT'er in staat kansen te zien waar de klant of het 
                    stagebedrijf met behulp van technologie waarde kan creëren. Onder begeleiding kan hij hier een analyse met een trendrapportage en verdienmodellen van maken."
                    subtitle3="Projectmatig werken: "
                    body3="De CMGT'er is in staat om zowel individueel als in teamverband iteratief te werken aan de ontwikkeling van producten. De CMGT'er kan hierin diverse rollen aannemen, en communiceert tijdig en duidelijk met belanghebbenden."
                />
                <Tabs style={{padding: '4rem'}}>
                    <div label="Dura Vermeer">
                        <Row>
                            <ContentBlockLarge
                                className = "contentblock contentblock--alinea"
                                title = ""
                                body = "Als eerste project kreeg ik, samen met een tweetal Developers, een opdracht voor het Bouwbedrijf Dura Vermeer. We moesten namelijk een platform gaan bouwen voor projecten websites van Dura Vermeer. Met dit platform zouden alle nieuwe projecten van Dura Vermeer heel snel een website kunnen hebben zonder dat ze naar verschillende bedrijven moeten gaan om een website te laten maken en daar weken op moeten wachten. 
                                Het project was niet zo simpel door een paar redenen. Het moest gebruiksvriendelijk worden, omdat er straks meer mensen mee moeten gaan werken die geen Developers zijn. Ook het design was vrij uitdagend. Alles moest generiek zijn, zodat alles in dezelfde soort stijl zou zijn, maar met een eigen huisstijl. 
                                "
                            />
                            <ContentBlockLarge
                                className = "contentblock contentblock--alinea"
                                title = ""
                                body = "Ik werd direct meegenomen in het development proces. Allereerst hadden we een kick-off, hierin kregen we een briefing over wat er van ons werd verwacht en hoe we het project gingen aanpakken. Er was ook voor dit project gekozen om gebruik te maken van een, voor de meeste Developers nieuw, 
                                CMS, namelijk Umbraco. Zelf had ik ook nog nooit met Umbraco gewerkt dus het werd zeker een uitdaging om hiermee te gaan werken. Het proces zou bestaan uit een drietal sprints van 2 weken met de bijbehorende retrospective, aan het eind van elke sprint een Demo voor de klant,
                                planning meetings en dagelijks Stand Up’s. Deze manier van werken kennen we natuurlijk ook onder de naam SCRUM. Zelf vind ik dit echt een hele fijne manier van werken, omdat je op deze manier een goed beeld hebt hoe alles gaat en snel kan inspelen op eventuele problemen."
                            />
                            <ContentBlockLarge
                                className = "contentblock contentblock--alinea"
                                title = ""
                                body = "In de eerste weken waren het voor mij wel even pittig. Ik had wel basis kennis van alles wat ze hier deden, maar er waren een hoop regels die ik moest volgen. Ik ben ook iemand die niet zomaar om hulp gaat vragen. Ik ga liever zelf alles uitzoeken, want dan weet ik tenminste waar ik mee bezig ben. Die instelling werkt alleen niet altijd, 
                                maar helemaal niet als je bij een bedrijf werkt waar ze ook planningen en vooral budget hebben waar rekening mee gehouden moet worden. Ik heb mezelf al snel geprobeerd neer te leggen bij het feit dat ik beter kan mijn vragen gewoon kan stellen als ik zelf het antwoord niet binnen 30 minuten heb. Dit heeft me heel erg geholpen. Al snel kon ik meedraaien op de manier die ze verwachten binnen het Development team.
                                Dit kwam ook naar voren in mijn Check-In’s, want de eerste keer kreeg ik bij de “lage” score als feedback te letten op de details in PR’s en netheid/compleetheid van code. De keer er op met mijn Check-In scoorde ik veel beter op die punten en was de feedback ook heel positief.  
                                "
                            />
                            <ContentBlockLarge
                                className = "contentblock contentblock--alinea"
                                title = ""
                                body = "Dit project had ook een maatschappelijk doel. Voor Dura Vermeer is dat doel dat ze al hun nieuwe projecten kunnen laten zien op een manier die voor vrijwel iedereen beschikbaar is zolang je maar iets van een telefoon, tablet of computer hebt. Dura Vermeer heeft ook veel bouwprojecten waar ze woningen bouwen of renoveren. In dat geval kunnen de websites op een andere manier gebruikt worden.
                                Als we bijvoorbeeld de van der pek buurt nemen, dit is een project waar huizen te koop zijn, hier kan Dura Vermeer niet alleen hun project showen, maar ook verkopen. Zo kan je alle huizen bekijken in de wijk, je kan jouw huis uitkiezen en vervolgens jezelf inschrijven voor die woning. Het platform veranderd dan van showcase website in een verkoop platform. Hierdoor kunnen mensen dus al eerder hun huis bekijken, zonder dat je een afspraak hoeft te maken met de makelaar voor een bezichtiging. Kortom kan dit platform multifunctioneel ingezet worden om aan de behoefte van de projecten te voldoen.  
                                "
                            />
                        </Row>
                    </div>
                    <div label="4Wind">
                        
                    </div>
                    <div label="Toolsoup">
                        
                    </div>
                    <div label="Onderzoek - SEO">
                        
                    </div>
                    <div label="Wat heb ik geleerd?">
                        
                    </div>
                    <div label="Wat zou ik anders doen?">
                        
                    </div>
                </Tabs>
                <Row>
                    <Col xs={12}>
                    <Slider />
                    </Col>
                </Row>
            </Grid>
            </div>
            <Footer />
        </div>
    );
}

export default Ondernemen;