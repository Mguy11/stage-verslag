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
                    <ContentBlockLarge
                        className = "contentblock contentblock--alinea"
                        title = ""
                        body = "In mijn eerste week kreeg ik een introductie in alle tools, werkwijzen en processen die ik nodig zou hebben tijdens mijn stageperiode. Een aantal onderdelen waren niet vreemd voor mij. Zo had ik al ervaring met Git, Sourcetree, SCRUM en Visual Studio (Code). Hierdoor was het opstarten wat makkelijker voor me en kon ik sneller aan de slag. 
                                Een programma waar ik nog niet bekend mee was, was Azure DevOps. Azure DevOps is een verzameling van tools die gebruikt worden voor development. Hier gebruikte ik vooral de scrumboards, reposetories (voor alle code) en de pipelines. Ik vond het fijn werken, omdat je nu alles op een plek had. Je kon makkelijk tasks koppelen aan branches of als een Pull Request goedgekeurd was werd direct de build pipeline gestart.
                                Deze koppeling zorgde samen voor een soepele werkervaring."
                    />
                    <ContentBlockLarge
                        className = "contentblock contentblock--alinea"
                        title = ""
                        body = "In Azure DevOps worden ook alle Pull Requests behandeld. Hiervoor is er ook een proces opgezet waarbij andere developers jouw code eerst nog nakijken voordat jij het kan mergen met de master branch. Het is goed dat dit proces er in zit, want op deze manier is de kans dat foutieve code doorgevoerd wordt erg klein. De volgende stap is om dit te integreren in een testplan, waardoor het allemaal automatisch nagekeken zou kunnen worden."
                    />
                    <Tabs style={{padding: '4rem'}}>
                        <div label="Algemeen">
                            <Row>
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = "Responsiveness"
                                    body = "Tijdens zowel het Dura Vermeer als het 4Wind project ben ik bezig geweest met responsiveness. Responsiveness is tegenwoordig een heel belangrijk onderdeel van een website of webapplicatie. Met responsive webdesign kun je een website toegankelijk maken op alle schermgrootte. Hiervoor gebruik je in je CSS media queries. Voor ik stage ging lopen had ik hier nog niet van gehoord. Ik wist wel dat je een website responsive kon maken, maar niet hoe.
                                            Daarom kreeg ik tijdens het bouwen van mijn eerste blok een mini speed course responsive design. Op dat moment ging er een hele wereld voor mij open. Ik realiseerde me toen vooral dat je een website eigenlijk meerdere malen aan het bouwen bent, elke keer voor een andere reeks aan schermgroottes. Ik heb dit vanaf dat moment overal toegepast. Ik ben zelfs voor deze stage website bezig geweest hem responsive te maken."
                                />
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = "De Blokken"
                                    body = "De veelbesproken blokken worden opgebouwd uit een aantal dingen: data velden in het CMS, HTML en C# en de styling. Als een blok aangemaakt wordt heb je zelf de vrijheid in het CMS om aan te geven wat je er allemaal in wilt hebben. Als je blok in het CMS klaar is kan je beginnen aan het bouwen van de rest van het blok. Vaak begonnen ik eerst met het maken van een statisch blok en zodra het statische blok werkte konden ik hem dynamisch maken door de connectie met het CMS toe te voegen."
                                />
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "In het CMS krijg je op den duur een lijst met alle blokken. Deze kun je dat toevoegen op de pagina’s waar het toegestaan is. Op die manier kan je dus heel makkelijk pagina’s gestructureerd opbouwen."
                                />
                            </Row> 
                        </div>
                        <div label="Dura Vermeer">
                            <Row>
                                <Col xs={12}>
                                    <div>
                                        <a href="#">Wat is het Dura Vermeer project?</a>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Door mijn ervaring kon ik al snel meedraaien in het team. In het begin van het Dura Vermeer kreeg ik vooral de wat makkelijkere blokken om te bouwen. Hierdoor kon op een makkelijke manier leren hoe ik een blok van begin af aan moest opbouwen in zowel het CMS als in code. 
                                            Het eerste blok wat ik heb gemaakt is het zogeheten “Content blok”. Dit blok bestaat uit een titel, een teaser en een body. Ik hoefde voor dit block zelf nog niks te doen in het CMS, dus ik kon direct met de code aan de slag. Toen ik de eerste versie klaar had werd hij al iets uitgebreider, want er moesten verschillende uitlijningen in verwerkt worden. Dit heb ik toen opgelost door middel van verschillende namen.
                                            Dit was op dat moment genoeg, maar een paar weken later heb ik het blok aangepast. Ik kon met mijn nieuwe kennis het blok verbeteren. Nu is de code gereduceerd en daarbij werkt het ook efficiënter. Vervolgens heb ik steeds uitdagendere blokken gekregen."
                                />
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Een onderdeel waarvan ik dacht dat het wat makkelijker zou zijn waren de social share buttons. Deze knoppen worden toegevoegd aan de detailpagina’s van de nieuwsberichten. Met deze knoppen kan de gebruiker het nieuwsbericht delen via social media. Het was niet de bedoeling dat we hier veel tijd aan zouden besteden om alles zelf te ontwikkelen.Ik moest gaan kijken naar een goede plugin of tool,
                                            zodat ik alleen de front end hoefde te bouwen. Uiteindelijk heb ik gekozen om “sharethis” te implementeren. Ik had alles netjes gebouwd en toen kwam ik er achter dat ik op onze development omgeving niet kon testen. Er zat namelijk een ip-block op en dus was de site onbereikbaar van buitenaf. Uiteindelijk heb ik samen met Martijn hier naar gekeken en hebben we tijdelijk de ip-block uitgezet. Toen kwam ik er achter dat ik nog een extra class moest toevoegen op alle knoppen om ze functioneel te maken. Nadat alles was toegevoegd en getest was waren ook deze knoppen klaar om doorgezet te worden naar de live websites."
                                />
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Het Google Maps block was ook een mooi voorbeeld van doorontwikkeling. Alles hierover heb ik besproken in deze post."
                                />
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <div className="contentblock">
                                        <span>Lees hier alles over het Google Maps Blok</span>
                                        <a href="#"> Ondernemen - Google Maps</a>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Ik heb in mijn laatste weken vooral gewerkt aan bugfixes en testen voor het Dura Vermeer project. Uiteindelijk heb ik zelfs nog een paar nieuwe onderdelen toegevoegd. De meest interessante toevoeging was de nieuwe footer. Er moest namelijk een mogelijkheid komen om social media knoppen toe te voegen. De knoppen zouden alleen verschijnen als er een link naar het medium is toegevoegd in het CMS.
                                            Die functionaliteit had ik al snel ingebouwd en daarmee was de footer weer up-to-date. Onze scrummaster kwam daarop met een opmerking over loze ruimte tussen de footer pagina links en de social media buttons. Hij wilde toch dat alles netjes op elkaar zou aansluiten en gaf de opdracht dit te regelen. Al snel kwam ik er achter dat dit niet mogelijk was met de huidige opbouw van de footer. We maken namelijk gebruik van een zogenoemd “grid”. Door het gebruik van kolommen in dit grid konden alle footer elementen niet direct op elkaar aansluiten. 
                                            Daarvoor kwam ik met de optie de footer opnieuw op te zetten en niet gebruik te maken van de kolommen in het grid, maar alles uit te lijnen door middel van flexbox (https://css-tricks.com/snippets/css/a-guide-to-flexbox/). Hiermee heb ik precies kunnen bouwen wat onze scrummaster had gevraagd. Dit was voor mij een pittige uitdaging, want ik had nog niet veel met flexbox gedaan zonder het grid. Toch heb ik het allemaal voor elkaar gekregen en het resultaat mag er zijn."
                                />
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Als laatste ben ik bezig geweest met het proces, om een nieuwe project website op te zetten, te verbeteren en versnellen. Ondertussen is het mogelijk om binnen 15 minuten de hele website klaar te hebben voor de technische oplevering aan de klant, tenzij er speciale pagina’s of blokken toegevoegd moeten worden. Dit is aardige vooruitgang ten opzichte van het eerste setup proces waar elke keer alle pagina’s en  bijbehorende blokken opnieuw aangemaakt moesten worden. 
                                            Ik heb dit gedaan door Content Templates aan te maken in het CMS, op deze manier kan je pagina’s al volledig vullen met blokken en dummy content en ze vervolgens opslaan. Deze zogeheten Content Templates kun je dan gebruiken als basis pagina wanneer je een nieuwe pagina aanmaakt. De klant kan dan sneller aan de slag met het vullen van de eigen content."
                                />
                            </Row>
                        </div>
                        <div label="4Wind">
                            <Row>
                                <Col xs={12}>
                                    <div>
                                        <a href="#">Wat is het 4Wind project?</a>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "De navigatie van de 4Wind website heeft een aantal functies ingebouwd zitten die niet gebruikelijk zijn. Er werd tijdens het bugfixen vastgesteld dat de navigatie nog niet de functionaliteit had die hij zou moeten hebben. De opdracht om dat op te lossen werd bij mij neergelegd. Ik had continu gezegd dat ik klaar was voor meer uitdaging en die kreeg ik nu. Voor ik überhaupt kon beginnen met bouwen moest ik eerst de code doornemen om te kijken wat er fout ging en om te checken wat er nog miste.
                                            De conclusie was al snel dat er niet gedacht was aan de header onder de navigatie en dat het submenu moest openklappen in combinatie met een active state."
                                />
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Als eerste ben ik begonnen met het opzetten van een schema om de denkstappen duidelijk te maken voor mezelf hoe ik alles moest gaan opbouwen. Met wat hulp van een collega en Martijn heb ik een schema gemaakt en kon ik beginnen met bouwen. Ondanks dat ik een schema had was het nog een hele uitdaging om het in elkaar te zetten. Er moesten erg veel uitzonderingen gemaakt worden in de code waardoor ik op een gegeven moment het overzicht verloor. Het is gelukt de navigatie werkend te krijgen en dat was voor mij een moment van voldoening."
                                />
                            </Row> 
                        </div>
                        <div label="Stageverslag website">
                            <Row>
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = "Responsiveness"
                                    body = "Om mijn kennis op development gebied nog verder uit te breiden heb ik gekozen mijn verslag website te bouwen met React. Dit was het framework waar ik vooral tijdens mijn stage op wilde gaan focussen, maar dat is allemaal net anders gelopen. React is een framework waar tegenwoordig heel veel bedrijven al mee werken of mee willen gaan werken. Zelf wil ik me daarin ontwikkelen, omdat ik denk dat in dit soort frameworks de toekomst ligt. Dat is ook de reden dat ik mijn onderzoek heb gedaan over React en SEO."
                                />
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = "De Blokken"
                                    body = "Ik heb de website in de basis gebouwd met JavaScript en SCSS. Vervolgens had ik grootse plannen om mijn content te beheren via een headless CMS. Hiervoor had ik Strapi gebruikt, ik liep alleen tegen het probleem aan dat ik dan mijn CMS moest gaan hosten, maar ik heb geen server daarvoor. Het was voor mij toen de beste keuze voor nu de content maar statisch op mijn website te plaatsen."
                                />
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Voor het bouwen van de website heb ik een deel van mijn werkwijze overgenomen die ik tijden zijn stage gebruikte. Zo heb ik direct SCSS mee geïnstalleerd en heb ik al mijn onderdelen voor de website opgebouwd met blokken. Dit is in React nog makkelijk om te doen aangezien je hier gebruikt moet maken van components. Deze components zijn in theorie al een soort blokken dus dat paste perfect bij mijn plan."
                                />
                            </Row> 
                        </div>
                        <div label="Wat heb ik geleerd?">
                            <Row>
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Op het gebied van ontwikkelen heb ik ontzettend veel geleerd. Ik heb met een echt CMS kunnen werken. Ik heb mijn algemene programmeer skills heel erg verbeterd en bovendien heb ik structuur gecreëerd in mijn manier van developen. Dat is de meest waardevolle ontwikkeling geweest tot nu toe. Ik weet nu hoe ik moet ontwikkelen op een manier die in mijn toekomstige werkgebied gestandaardiseerd is. Mijn basis is nu goed en hier kan ik op verder gaan bouwen."
                                />
                            </Row> 
                        </div>
                        <div label="Wat zou ik anders doen?">
                            <Row>
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Ik had graag gezien dat het bedrijf de afspraken die van tevoren gemaakt waren na had gekomen. Ik was aangenomen voor een stageplek waar ik mezelf kon ontwikkelen om React gebied en ik zou daarnaast ook wat kunnen gaan doen met technisch SEO. Geen van beide punten zijn echt aan bod gekomen tijdens mijn stage. Alleen tijdens mijn onderzoek heb ik hier wat mee kunnen doen, maar dat was niet vanuit het bedrijf. Kortom ik moet beter voor mezelf opkomen, want het gaat immers om mijn ontwikkeling."
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