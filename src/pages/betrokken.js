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

const Betrokken = () => {
    return (
        <div className="betrokken">
            <SideNav />
            <NavBar />
            <SmallHeader
                title = "Betrokken"
            />
            <div className="wrap">
                <Grid>
                    <TestimonialBlock
                        subtitle1="Lerend vermogen: "
                        body1="Ik ben kritisch en streef ernaar het beste in mezelf en anderen naar boven te halen. 
                        Ik reflecteer structureel op eigen ervaringen en feedback vanuit het stagebedrijf en trek daaruit lessen voor de toekomst."
                        subtitle2="Maatschappelijke verantwoordelijkheid: "
                        body2="Ik verdiep me naast de directe gebruikers ook in andere stakeholders en maatschappelijke ontwikkelingen. Ik kan maatschappelijke en ethische implicaties van producten waaraan ik meewerk benoemen, en er een onderbouwde mening over vormen."
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
                            <Row>
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Dit was mijn tweede project, een website voor een kitesurfschool. Dit project had een hele andere insteek dan Dura Vermeer. De huidige 4Wind website werkte nog met een oud CMS, was niet echt responsive en bevatte verouderde code. Het doel was dus de website volledig na te bouwen, het nieuwe CMS op te zetten en proberen alle oude “problemen” weg te werken. 
                                    "
                                />
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Bij dit project begonnen we met een meeting om alle benodigde informatie en planning door te nemen. We kregen als team één sprint van twee weken om de website te bouwen en het CMS in te richten. Wederom hadden we dagelijks Stand Up’s en aan het eind van de sprint een retrospective. "
                                />
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Deze website heeft niet direct zo’n groot maatschappelijk doel als het Dura Vermeer project, maar er zat wel meer achter dan even een website omzetten. We hebben dit project namelijk opgepakt als intern project, hierdoor hoefde de klant niet te betalen voor alle development kosten. Dit had als reden dat deze website gebruikt zal worden als basis voor alle kleine projecten, net als voorheen. Het leuke was dat de klant niet wist dat we zijn website gingen ombouwen. Hij zou gewoon een volledig nieuwe website krijgen en kon zelfs nog kiezen of hij hem überhaupt wilde gaan gebruiken.  
                                    "
                                />
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Nadat de website helemaal klaar was hebben we ook een Demo gegeven voor de klant. Deze heb ik voor een deel zelf mogen doen. De klant was zeer blij met de nieuwe website en het bijbehorende CMS en wil hoogstwaarschijnlijk de nieuwe website in gebruik gaan nemen.  
                                    "
                                />
                            </Row> 
                        </div>
                        <div label="Toolsoup">
                            <Row>
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Het Toolsoup project is een intern verzamel project voor verschillende klussen en projecten. Ik heb hier 2 weken op gezeten. In die tijd heb ik gewerkt aan het nieuwe email template voor DotControl Support, het overzetten van project backlogs uit Confluence naar Azure DevOps en kennisbank documenten naar Microsoft Sharepoint. 
                                    "
                                />
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Dit project had ,op het email template na, weinig te maken met development, maar er was op dat moment even geen werk en dus moesten mijn team en ik andere taken gaan oppakken. Ik baalde er de eerste paar dagen wel van, want ik had niet echt het idee dat ik nuttig bezig was. Uiteindelijk realiseerde ik me dat dit project ook van belang is aangezien dit taken/opdrachten zijn waar het hele bedrijf profijt van heeft. "
                                />
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Het maken van het nieuwe email template kostte even wat tijd, omdat het testen niet zo makkelijk ging en het programmeren ervan moet in een bepaalde HTML en CSS versie. Maar Support heeft nu wel een net en simpel email template staan om alle klanten netjes te woord te kunnen staan. En ook de kennisbank is nu volledig overgezet, dus nu kunnen alle werknemers makkelijk bij alle documentatie die op één plek te vinden is.  
                                    "
                                />
                            </Row>
                        </div>
                        <div label="Wat heb ik geleerd?">
                            <Row>
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Ik heb op het gebied van de betrokken technoloog en aantal dingen geleerd. Allereerst hoe belangrijk het is om kritisch te zijn. Dat wordt hier bij DotControl op een goede manier aangeleerd. In de eerste weken dat ik bij DotControl zat kreeg ik bijvoorbeeld nog aardig wat comments op mijn Pull Requests. Het was voor mij persoonlijk even wennen dat ik überhaupt feedback kreeg op mijn code. En in het begin moest ik daar echt wel even mee leren omgaan,
                                     ik had namelijk continu het gevoel dat ik niks goed kon doen, omdat ik toch elke keer weer feedback kreeg hoe alles beter kon. 
                                     Juist omdat ik het zou vervelend vond om al die feedback te krijgen ben ik steeds beter gaan letten op mijn code. Hierdoor werd het aantal comments al een heel stuk minder en scoorde ik ook hoger op het punt van Detail Oriented in de Check-In lijst. Ik had uiteindelijk ook wel door dat het alleen maar goed bedoeld was en dat ik me gewoonweg aan de standaarden moest houden. 
                                    "
                                />
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Verder heb ik ook gemerkt hoe belangrijk (zelf)reflectie is. Bijvoorbeeld tijdens de retrospectives kwamen toch elke keer weer punten naar boven ondanks dat wij het gevoel hadden dat het juist zo goed ging. Hetzelfde had ik ook een aantal keer gehad bij mijn eigen Check-In’s. Het is heel belangrijk om goed te reflecteren, zodat je het in de toekomst beter of anders kan doen."
                                />
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Als laatste heb ik geleerd wat voor maatschappelijke verantwoordelijkheid er aan echte projecten hangt en wat de verschillen zijn tussen grote of kleine projecten. Het Dura Vermeer project moest heel anders benaderd worden dan het 4Wind project. Ik mocht niks laten zien of delen over het Dura Vermeer project terwijl het 4Wind project veel opener was.  
                                    "
                                />
                            </Row>
                        </div>
                        <div label="Wat zou ik anders doen?">
                            <Row>
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Ik zou sneller mijn vragen stellen en niet alles direct persoonlijk opvatten. Dit heb ik overigens als meegenomen in mijn groeiproces tijdens mijn stage. Ik heb in de eerste paar weken te vaak gewacht met vragen stellen en daardoor bleef ik vaak te lang vast zitten. Hier heb ik het een aantal keer met Martijn over gehad en sinds dien vraag ik sneller, zodat ik sneller verder kan. Hetzelfde geldt ook voor het persoonlijk opvatten, ik zie de feedback nu meer als groeimiddel in plaats van commentaar. En dat is ook hoe het zou moeten zijn. 
                                    "
                                />
                            </Row>
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

export default Betrokken;