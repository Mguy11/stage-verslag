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
import SideNav from '../components/sidenav';

const Ontwikkelen = () => {
    return (
        <div className="ontwikkelen">
            <SideNav />
            <NavBar />
            <SmallHeader
                title = "Ontwikkelen"
            />
            <div className="wrap">
                <Grid>
                    <TestimonialBlock
                        subtitle1="Technische kennis en analyse: "
                        body1="Ik ben flexibel genoeg om me snel de professionele werkwijze van het stagebedrijf en gebruikte technieken eigen te maken. 
                            Ik kan technische oplossingen bedenken voor praktische problemen die bij deze werkwijze aansluiten. "
                        subtitle2="Implementeren, testen en opleveren: "
                        body2="Ik ben in staat iteratief te ontwikkelen waarbij analyse van een iteratie tot verbeteringen leidt in de volgende iteratie.
                            Hierbij heb ik functionele testen opgezet, die vooraf door de klant of het stagebedrijf zijn goedgekeurd, om de correcte werking te garanderen. Het geheel lever ik op met het oog op doorontwikkeling."
                    />
                    <Tabs style={{padding: '4rem'}}>
                        <div label="Algemeen">
                            <Row>
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "In mijn eerste week kreeg ik een introductie in alle tools, werkwijzen en processen die ik nodig zou hebben tijdens mijn stageperiode. Een aantal onderdelen waren niet vreemd voor mij. Zo had ik al ervaring met Git, Sourcetree, SCRUM en Visual Studio (Code). Hierdoor was het opstarten wat makkelijker voor mij en kon ik sneller aan de slag. Een programma waar ik nog niet bekend mee was, was Azure DevOps. 
                                            Azure DevOps is een verzameling van tools die gebruikt worden voor development. Hier gebruikte ik vooral de scrumboards, reposetories (voor alle code) en de pipelines. Ik vond het fijn werken, omdat je nu alles op één plek had. Je kon makkelijk tasks koppelen aan branches of als een Pull Request goedgekeurd was, werd direct de build pipeline gestart. Deze koppelingen zorgden samen voor een soepele werkervaring."
                                />
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "In Azure DevOps worden ook alle Pull Requests behandeld. Hiervoor is er ook een proces opgezet waarbij andere developers jouw code eerst nog nakijken voordat jij het kan mergen met de master branch. Het is goed dat dit proces er is, want op deze manier is de kans dat foutieve code doorgevoerd wordt, erg klein. De volgende stap is om dit te integreren in een testplan, waardoor het allemaal automatisch nagekeken zou kunnen worden."
                                />
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = "Responsiveness"
                                    body = "Tijdens zowel het Dura Vermeer als het 4Wind project ben ik bezig geweest met responsiveness. Responsiveness is tegenwoordig een heel belangrijk onderdeel van een website of webapplicatie. Met responsive webdesign kun je een website toegankelijk maken voor alle schermgroottes. Hiervoor gebruik je in je CSS media queries. Voor ik stage ging lopen had ik hier nog niet van gehoord. Ik wist wel dat je een website responsive kon maken, maar niet hoe. 
                                            Daarom kreeg ik tijdens het bouwen van mijn eerste blok een mini speed course responsive design. Op dat moment ging er een hele wereld voor mij open. Ik realiseerde me toen vooral dat je een website eigenlijk meerdere malen aan het bouwen bent, elke keer voor een andere reeks aan schermgroottes. Ik heb dit vanaf dat moment overal toegepast. Ik heb mijn stagewebsite deels responsive gemaakt."
                                />
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = "De Blokken"
                                    body = "De veelbesproken blokken worden opgebouwd uit een aantal dingen: data velden in het CMS, HTML en C# en de styling. Als een blok aangemaakt wordt heb je zelf de vrijheid in het CMS om aan te geven wat je er allemaal in wilt hebben. Als je blok in het CMS klaar is kan je beginnen aan het bouwen van de rest van het blok. Vaak begon ik eerst met het maken van een statisch blok en zodra het statische blok werkte kon ik hem dynamisch maken door de connectie met het CMS toe te voegen."
                                />
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "In het CMS krijg je op den duur een lijst met alle blokken. Deze kun je dan toevoegen op de pagina’s waar het toegestaan is. Op die manier kan je dus heel makkelijk pagina’s gestructureerd opbouwen."
                                />
                            </Row> 
                        </div>
                        <div label="Dura Vermeer">
                            <Row>
                                <Col xs={12}>
                                    <div>
                                        <a href="/dura-vermeer" className="overig__link overig__link--text">Wat is het Dura Vermeer project?</a>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Door mijn ervaring kon ik al snel meedraaien in het team. In het begin van het Dura Vermeer project kreeg ik vooral de wat makkelijkere blokken om te bouwen. Hierdoor kon op een makkelijke manier leren hoe ik een blok van begin af aan moest opbouwen in zowel het CMS als in code. Het eerste blok wat ik heb gemaakt is het zogeheten “Content blok”. Dit blok bestaat uit een titel, een teaser en een body. Ik hoefde voor dit blok zelf nog niets te doen in het CMS, dus ik kon direct met de code aan de slag. Toen ik de eerste versie klaar had moest hij direct uitgebreid worden. 
                                            Er moesten verschillende uitlijn mogelijkheden in verwerkt worden. Dit heb ik toen opgelost door middel van specifieke naamgeving. Hierdoor kon er een aparte class naam meegegeven worden, die ervoor zorgde dat het blok op de juiste manier uitgelijnd werd. Dit was op dat moment genoeg, maar een paar weken later heb ik het blok aangepast. Ik kon met mijn nieuwe kennis het blok verbeteren. Nu is de code gereduceerd en daarbij werkt het ook efficiënter. Vervolgens kreeg ik blokken met een steeds grotere uitdaging."
                                />
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Mijn nieuwe uitdaging was de cookiemelding bouwen. Hier zaten een paar nieuwe functies in voor mij die ik nog nooit gemaakt had. Zo moest het cookie venster in het midden van het scherm komen als pop-up en de rest van het scherm wazig maken. Daarnaast moest de cookie geplaatst worden als de gebruiker op “accepteren” zou klikken. Het plaatsen van de cookie heb ik toen opgelost met JavaScript, dit koste wat tijd om uit te zoeken hoe dit werkte, maar uiteindelijk heb ik het allemaal werkend gekregen. De cookie is vervolgens in gebruik genomen, 
                                            totdat de klant met de vraag kwam of we de cookie toch konden aanpassen. De cookie moest niet de hele pagina afschermen, maar alleen onderaan de pagina verschijnen. Daarop is de cookie aangepast en opnieuw geïmplementeerd. Een aantal weken later kwam de klant wederom terug op het design voor de cookie. Er moest een  knop komen om de cookies te kunnen weigeren. Je bent als bedrijf verplicht de mogelijkheid te bieden om cookies te kunnen weigeren. Ik heb deze taak opgepakt en de cookie omgebouwd. Hieronder staan de drie verschillende versies van de cookie melding."
                                />
                                <Col xs={12}>
                                    <div className="overig__imagewrapper">
                                        <span>1e versie</span>
                                        <img className="overig__image" src="../images/cookie-versie-1.png" alt="huisstijl"></img>
                                        <span>2e versie</span>
                                        <img className="overig__image" src="../images/cookie-versie-2.png" alt="huisstijl"></img>
                                        <span>3e versie</span>
                                        <img className="overig__image" src="../images/cookie-versie-3.png" alt="huisstijl"></img>
                                        <span>Uiteindelijke versie</span>
                                        <img className="overig__image" src="../images/dura-cookie-melding.png" alt="huisstijl"></img>
                                    </div>
                                </Col>
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Een onderdeel waarvan ik dacht dat het wat makkelijker zou zijn waren de social share buttons. Deze knoppen worden toegevoegd aan de detailpagina’s van nieuwsberichten. Met deze knoppen kan de gebruiker het nieuwsbericht delen via social media. Het was niet de bedoeling dat we hier veel tijd aan zouden besteden om alles zelf te ontwikkelen.Ik moest kijken naar een goede plugin of tool, zodat ik alleen de front end hoefde te bouwen. Uiteindelijk heb ik gekozen om “sharethis” te implementeren. Ik had alles netjes gebouwd en toen kwam ik er achter dat ik op onze development omgeving niet kon testen. 
                                            Er zat namelijk een ip-block op en dus was de site onbereikbaar van buitenaf. Uiteindelijk heb ik samen met Martijn hier naar gekeken en hebben we tijdelijk de ip-block uitgezet. Toen kwam ik er achter dat ik nog een extra class moest toevoegen op alle knoppen om ze functioneel te maken. Nadat alles was toegevoegd en getest was waren ook deze knoppen klaar om doorgezet te worden naar de live websites."
                                />
                                <Col xs={12}>
                                    <div className="overig__imagewrapper">
                                        <img className="overig__image" src="../images/dura-social-share.png" alt="huisstijl"></img>                                 
                                    </div>
                                </Col>
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Verder heb ik ook een aanmeldformulier mogen bouwen. Hiermee kunnen de potentiële huizenkopers zich aanmelden, zodat ze op de hoogte gehouden kunnen worden over het project. Om dit formulier te bouwen heb ik samen moeten werken met de backend developer van ons project, omdat we de invoervelden op een vaste manier moesten ophalen. Nadat we samen de basis hadden opgezet kon ik de front end opzetten. Het formulier wat ik gebouwd heb is helaas nog niet direct in gebruik genomen, omdat de koppeling met een derde partij nog niet klaar was. Er staat nu dus een tijdelijk formulier op de live websites."
                                />
                                <Col xs={12}>
                                    <div className="overig__imagewrapper">
                                        <span className="overig__text">Tijdelijk formulier</span>
                                        <img className="overig__image" src="../images/dura-aanmeldformulier-tijdelijk.png" alt="huisstijl"></img>
                                        <span className="overig__text">Mijn formulier</span>
                                        <img className="overig__image" src="../images/dura-aanmeldformulier.png" alt="huisstijl"></img>                                 
                                    </div>
                                </Col>
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Het Google Maps block was ook een mooi voorbeeld van doorontwikkeling. Alles hierover heb ik besproken in deze post"
                                />
                            </Row>
                            <Row>                             
                                <div>
                                    <span>Lees hier alles over het Google Maps Blok</span>
                                    <a href="/ondernemen"> Ondernemen - Google Maps</a>
                                </div>
                            </Row>
                            <Row>
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Ik heb in mijn laatste weken vooral gewerkt aan bugfixes en testen voor het Dura Vermeer project. Uiteindelijk heb ik zelfs nog een paar nieuwe onderdelen toegevoegd. De meest interessante toevoeging was de nieuwe footer. Er moest namelijk een mogelijkheid komen om social media knoppen toe te voegen. De knoppen zouden alleen verschijnen als er een link naar het medium is toegevoegd in het CMS. Die functionaliteit had ik al snel ingebouwd en daarmee was de footer weer up-to-date. Onze scrummaster kwam daarop met een opmerking over loze ruimte tussen de footer pagina links en de social media buttons. 
                                            Hij wilde toch dat alles netjes op elkaar zou aansluiten en gaf de opdracht dit te regelen. Al snel ontdekte ik dat dit niet mogelijk was met de huidige opbouw van de footer. We maken namelijk gebruik van een zogenoemd “grid”. Door het gebruik van kolommen in dit grid konden alle footer elementen niet direct op elkaar aansluiten. Daarvoor kwam ik met het voorstel de footer opnieuw op te zetten en geen gebruik te maken van de kolommen in het grid, maar alles uit te lijnen door middel van flexbox. Hiermee heb ik precies kunnen bouwen wat onze scrummaster had gevraagd. 
                                            Dit was voor mij een mooie uitdaging, want ik had nog niet veel met flexbox gedaan zonder het grid. Ik heb het allemaal voor elkaar gekregen en het resultaat mag er zijn."
                                />
                                <Col xs={12}>
                                    <div className="overig__imagewrapper">
                                        <span>Oude footer</span>
                                        <img className="overig__image" src="../images/footer-oud.png" alt="oude-footer-dura"></img>
                                        <span>Nieuwe footer</span>
                                        <img className="overig__image" src="../images/dura-footer.png" alt="nieuwe-footer-dura"></img>
                                    </div>
                                </Col>
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Tenslotte ben ik bezig geweest met het proces, om een nieuwe project website op te zetten, te verbeteren en versnellen. Ondertussen is het mogelijk om binnen 15 minuten de hele website klaar te hebben voor de technische oplevering aan de klant, tenzij er speciale pagina’s of blokken toegevoegd moeten worden. Dit is aardige vooruitgang ten opzichte van het eerste setup proces waarbij elke keer alle pagina’s en  bijbehorende blokken opnieuw aangemaakt moesten worden. Ik heb dit gedaan door Content Templates aan te maken in het CMS. Op deze manier kan je pagina’s al volledig vullen met blokken en dummy content en ze vervolgens opslaan. 
                                            Deze zogeheten Content Templates kun je dan gebruiken als basis pagina wanneer je een nieuwe pagina aanmaakt. De klant kan dan sneller aan de slag met het vullen van de eigen content."
                                />
                                <Col xs={12}>
                                   <span className="overig__text overig__text--italic">* Helaas geen visueel bewijs van. Mijn rechten waren ondertussen al ingenomen.</span>
                                </Col>
                            </Row>
                        </div>
                        <div label="4WIND">
                            <Row>
                                <Col xs={12}>
                                    <div>
                                        <a href="/4WIND" className="overig__link overig__link--text">Wat is het 4WIND project?</a>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "De navigatie van de 4Wind website heeft een aantal functies ingebouwd zitten die niet gebruikelijk zijn. Er werd tijdens het bugfixen vastgesteld dat de navigatie nog niet de functionaliteit had die hij zou moeten hebben. De opdracht om dat op te lossen werd bij mij neergelegd. Ik had continu gezegd dat ik klaar was voor meer uitdaging en die kreeg ik nu. Voor ik überhaupt kon beginnen met bouwen moest ik eerst de code doornemen om te kijken wat er fout ging en om te checken wat er nog miste. De conclusie was al snel dat er niet gedacht was aan de header onder de navigatie en dat het submenu moest openklappen in combinatie met een active state."
                                />
                                <Col xs={12}>
                                    <div className="overig__imagewrapper">
                                        <img className="overig__image" src="../images/4Wind-navigatie.png" alt="4WIND-navigatie"></img>
                                    </div>
                                </Col>
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Ik ben begonnen met het opzetten van een schema om de denkstappen duidelijk te maken voor mezelf en hoe ik alles moest gaan opbouwen. Met wat hulp van een collega en Martijn heb ik een schema gemaakt en kon ik beginnen met bouwen. Ondanks dat ik een schema had was het een hele uitdaging om het in elkaar te zetten. Er moesten erg veel uitzonderingen gemaakt worden in de code waardoor ik op een gegeven moment het overzicht verloor. Het is gelukt de navigatie werkend te krijgen, dat was voor mij een moment van voldoening."
                                />
                                <Col xs={12}>
                                    <div className="overig__imagewrapper">
                                        <img className="overig__image" src="../images/denkstappen-4WIND.jpg" alt="denkstappen-navigatie"></img>
                                    </div>
                                </Col>
                            </Row> 
                        </div>
                        <div label="Stageverslag website">
                            <Row>
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Om mijn kennis op development gebied nog verder uit te breiden heb ik gekozen mijn verslag website te bouwen met React. Dit was het framework waar ik vooral tijdens mijn stage op wilde focussen, maar dat is allemaal iets anders gelopen. React is een framework waar tegenwoordig heel veel bedrijven mee werken of mee willen gaan werken. Zelf wil ik me daarin ontwikkelen, omdat ik denk dat in dit soort frameworks de toekomst ligt. Dat is ook de reden dat ik mijn onderzoek heb gedaan naar SEO in React."
                                />
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Ik heb de website in de basis gebouwd met JavaScript en SCSS. Vervolgens had ik grootse plannen om mijn content te beheren via een headless CMS. Hiervoor had ik Strapi gebruikt, ik liep tegen het probleem aan dat ik dan mijn CMS moest gaan hosten, maar daar heb ik geen server voor. Het was voor mij toen de beste keuze de content maar statisch op mijn website te plaatsen."
                                />
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Voor het bouwen van de website heb ik een deel van mijn werkwijze overgenomen die ik tijdens mijn stage gebruikte. Zo heb ik direct SCSS mee geïnstalleerd en heb ik al mijn onderdelen voor de website opgebouwd met blokken. Dit is in React nog makkelijk om te doen aangezien je hier gebruikt moet maken van components. Deze components zijn in theorie al een soort blokken dus dat paste perfect bij mijn opzet."
                                />
                            </Row> 
                        </div>
                        <div label="Wat heb ik geleerd?">
                            <Row>
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Op het gebied van ontwikkelen heb ik ontzettend veel geleerd. Ik heb met een echt CMS kunnen werken. Ik heb mijn algemene programmeer skills heel erg verbeterd en bovendien heb ik structuur gecreëerd in mijn manier van developen. Dat is de meest waardevolle ontwikkeling geweest tot nu toe. Ik weet nu hoe ik moet ontwikkelen op een manier die in mijn toekomstige werkgebied gestandaardiseerd is. Mijn basis is nu goed ,hier kan ik verder op door bouwen."
                                />
                            </Row> 
                        </div>
                        <div label="Wat zou ik anders doen?">
                            <Row>
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Ik had graag gezien dat het bedrijf de afspraken, die van tevoren gemaakt waren, na was gekomen. Ik was aangenomen voor een stageplek waar ik mezelf kon ontwikkelen op het gebied van React, daarnaast zou ik ook met technisch SEO aan de slag gaan bij RochBoost. Geen van beide punten zijn echt aan bod gekomen tijdens mijn stage. Alleen tijdens mijn onderzoek heb ik hier wat mee kunnen doen, maar dat was niet vanuit het bedrijf. Kortom ik moet beter voor mezelf opkomen, want het gaat immers om mijn ontwikkeling."
                                />
                            </Row> 
                        </div>
                    </Tabs>
                </Grid>
            </div>
            <Footer />
        </div>
    );
}

export default Ontwikkelen;