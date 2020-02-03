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

const Ondernemen = () => {
    return (
        <div className="ondernemen">
            <SideNav />
            <NavBar />
            <SmallHeader 
                title = "Ondernemen"
            />
            <div className="wrap">
                <Grid>
                    <TestimonialBlock
                        subtitle1="Ondernemende houding en vaardigheden: "
                        body1="Ik kijk verder dan wat me gevraagd wordt. Ik bedenk nieuwe oplossingen, en vergelijk met bestaande oplossingen en kom uit mezelf met adviezen om waarde te creëren voor de klant of het stagebedrijf."
                        subtitle2="Projectmatig werken en communiceren: "
                        body2="Ik ben in staat om zowel individueel als in teamverband te werken om zo deadlines en afspraken na te komen. Ik kan hierin diverse rollen aannemen, vraag tijdig hulp en communiceer duidelijk met belanghebbenden."
                    />
                    <Tabs style={{padding: '4rem'}}>
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
                                    body = "Voor het Dura Vermeer project heb ik in eerste instantie veel moeten uitzoeken. Vooral omdat dit mijn eerste project was waar ik aan mee ging werken en ik nog geen idee had wat voor standaarden ze hier gebruikten en hoe het nieuwe CMS werkte. De eerste dagen ben ik vooral bezig geweest met rondklikken, vragen stellen en notities maken, zodat ik een basis had om op door te bouwen. Het CMS wat we gingen gebruiken heet Umbraco.
                                            Het is een redelijk uitgebreid, maar vooral gebruiksvriendelijk CMS. Aangezien de mensen van Dura Vermeer met het CMS moet gaan werken wilden we alles zo netjes en compleet mogelijk opleveren. Het is mogelijk om omschrijvingen toe te voegen bij alle invoervelden in het CMS. Dit had ik allemaal netjes gedaan in het Nederlands, maar toen kwam het punt van meertaligheid in het CMS ter sprake. Het is dus mogelijk om de taal van het CMS per gebruiker in te stellen, wat bijvoorbeeld handig is voor mensen die de Nederlandse taal niet beheersen.
                                            Het CMS vertaald dan alle invoerveld kopjes/titels, maar de beschrijvingen blijven Nederlands. Ik bracht toen naar voren of het niet mogelijk was die beschrijvingen ook te vertalen. Niemand wist of dat überhaupt mogelijk was, dus ben ik wat onderzoek gaan doen naar de mogelijkheden. Ook op internet waren er geen duidelijke antwoorden te vinden of het mogelijk was dit te doen. Uiteindelijk kreeg ik vanuit DotControl groen licht om contact op te nemen met Umbraco Support. Daar heb ik dezelfde vraag gesteld of het mogelijk was om vertalingen toe te voegen bij omschrijvingen van velden in het CMS.
                                            Tot mijn verbazing kreeg ik daar het antwoord op dat het nog niet mogelijk was en de vraag of ik dat eventueel zelf wilde ontwikkelen voor het CMS. Helaas was daar geen tijd en budget voor binnen dit project, maar ik heb in ieder geval alles geprobeerd om deze extra functie toe te voegen."
                                />
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Tijdens het bouwen van verschillende blokken moesten we een image-picker toevoegen. Hiermee kan je in het CMS een foto kiezen uit je media-bibliotheek. Iets wat belangrijk is voor foto’s op je website is een zogeheten alt-tekst. Een alt-tekst zorgt ervoor dat er woorden komen te staan als de foto niet getoond kan worden. Als je geen alt-teksten toevoegt aan je foto’s kan dat impact hebben op je SEO-score. Het is dus beter als je ze toevoegt, dan heb je er alleen maar profijt van. Ditzelfde zei ik ook tegen mijn team op het moment dat we bezig waren met het opzetten van de Blocks.
                                            Er is toen besloten om het toe te voegen wanneer een gebruiker een foto toevoegt aan de mediabibliotheek. De gebruiker kan nu de foto uploaden en direct een alt-tekst invoeren. Zo kost het ook niet veel tijd om de alt-teksten toe te voegen, aangezien je dit direct doet per foto als je ze toevoegt in plaats van dat je alles achteraf moet aanpassen."
                                />
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Een andere kleine functie die ik heb mogen toevoegen was de scroll button in de header van de homepagina en in het aanmeldformulier. De knop bestaat uit een pijl, een cirkel en een tekst. Het idee van onze designer was dat wanneer je er overheen hoverd met de muis, de gehele knop zou verkleinen of vergroten. Ik vond dit niet passen bij de functie achter de knop dus heb ik een ander voorstel gedaan, namelijk een kleine animatie waar de pijl naar beneden beweegt wanneer er overheen gehoverd wordt.
                                            Dit is ter indicatie dat er een scrollbeweging zal plaatsvinden op het moment dat er geklikt wordt. Na overleg met onze designer mocht deze mini animatie erin blijven. Dit was een simpele toevoeging, maar het draagt bij aan de gebruiksvriendelijkheid van de website."
                                />
                                <Col xs={12}>
                                    <div className="overig__imagewrapper">
                                        <span className="overig__text">Normale stand</span>
                                        <img className="overig__image" src="../images/dura-scroll-1.png" alt="denkstappen-navigatie"></img>
                                        <span className="overig__text">Hover stand</span>
                                        <img className="overig__image" src="../images/dura-scroll-2.png" alt="denkstappen-navigatie"></img>
                                    </div>
                                </Col>
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Nog een voorbeeld voor een extra stukje visuele ondersteuning is een overlay wat ik gemaakt heb voor de nieuwsberichten in het nieuwsoverzicht. Zodra de gebruiker over een foto of een bericht zonder foto hoverd met de muis, komt er een overlay overheen. Voor foto’s zal dat in de primair gekozen kleur zijn en voor een bericht zonder foto is dat wit. Hierdoor krijg je als gebruiker ook een stukje feedback vanuit de website wat je gaat aanklikken."
                                />
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Als laatste had ik de opdracht gekregen om een Google Maps Block te bouwen. Dit was niet geheel nieuw voor mij, want dit had ik al eens gedaan. Voor ik zelf iets ging bouwen heb ik eerst gekeken naar alternatieve optie die wellicht beter zouden kunnen functioneren met dit project en waar de klant makkelijker mee zou kunnen werken. Zo had ik een tweetal plugins gevonden die zouden kunnen werken met ons Umbraco project. Helaas werd de beslissing genomen deze niet te gaan gebruiken en alles zelf te maken.
                                            Ik mocht dus alsnog aan de slag om het Block zelf te maken, dat vond ik overigens wel een goede opdracht om mijn JavaScript skills te oefenen. Ik heb toen eerst het Block binnen een script tag gebouwd tussen de HTML van het Block zelf. Dat was lokaal een goede oplossing, maar toen dat werkte kreeg ik te horen dat ik hem nu als apart component mocht bouwen en dit keer niet in JavaScript, maar in TypeScript met de bijbehorende dynamische velden uit het CMS. Dit heeft in eerste instantie een hoop tijd en moeite gekost, 
                                            omdat mijn TypeScript skills niet zo goed waren en er was heel erg weinig documentatie te vinden over Google Maps in Typescript. Na enige tijd heb ik samen met een andere developer toch het Block afgemaakt, maar toen kwam het tweede probleem, namelijk het doorgeven van data uit Umbraco naar RazorScript documenten (C#) en die data vervolgens doorgeven naar TypeScript. Hiervoor heb ik een hoop documentatie doorgenomen van zowel Typescript als C#, maar het was mij niet duidelijk wat ik moest doen. Deze taak is toen overgedragen aan iemand die meer kennis van zaken had en die heeft het dan ook voor ons geregeld.
                                            Later in het project kwam er nog eenzelfde situatie voor waar we op dezelfde manier de data moesten doorgeven, dit heb ik toen wel zelf opgelost."
                                />
                                <Col xs={12}>
                                   <span className="overig__text overig__text--italic">* Helaas geen visueel bewijs van. Mijn rechten waren ondertussen al ingenomen.</span>
                                </Col>
                                 <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Ik heb ook nog een stukje service verricht dit blok. De klant had feedback gegeven dat het niet helemaal duidelijk was hoe ze het Google Maps Block moesten aanmaken. Om dat te verduidelijken heb ik toen een handleiding gemaakt waarin ik stap voor stap uitleg hoe ze dat moeten doen."
                                />
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <div>
                                        <a className="" href="../../public/documents/Manual_Google_Maps_Block.docx" download>
                                            
                                            <span>Download hier de handleiding</span>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = "Samenwerking en communicatie"
                                    body = "Tijdens dit project was samenwerking zeker nodig. Ik heb gewerkt in een team van 8 mensen bestaande uit de product owner, een scrummaster, de Development Lead van dit team, de designer, een backender, twee andere developers en ik. Ondertussen zijn er mensen weggegaan en bijgekomen. Met dit team hadden we elke dag Stand Up meetings. Tijdens deze Stand Up’s werd alle voortgang van het project besproken  en alle eventuele problemen aangekaart. Elke twee weken, wanneer de sprint was afgerond, hadden we ook met dit team een retrospective en een planning meeting. We hebben het hele project door alle deadlines gehaald op een aantal kleine dingetjes na.
                                            Uiteindelijk hebben we het project op tijd kunnen opleveren, ondanks de onverwachte toevoegingen en eisen. Ook de samenwerking met een derde partij zorgde voor enige vertraging, maar ook dit hebben we netjes op kunnen lossen."
                                />
                                <Col xs={12}>
                                    <div className="overig__imagewrapper">
                                        <img className="overig__image" src="../images/dura-scrumbord-1.png" alt="dura-scrumbord-1"></img>
                                        <img className="overig__image" src="../images/dura-scrumbord-3.png" alt="dura-scrumbord-3"></img>
                                        <img className="overig__image" src="../images/dura-scrumbord-4.png" alt="dura-scrumbord-4"></img>
                                    </div>
                                </Col>
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "De communicatie tijdens dit project liep voornamelijk via het communicatie- en samenwerkingsplatform Microsoft Teams. Dit vind ik zelf een erg fijn programma om te gebruiken en het is vanuit DotControl gestructureerd ingericht wat het voor nieuwe mensen makkelijk maakt om mee te starten. Verder stond ons hele project qua code en scrumbord + backlog online via Azure DevOps. Hierdoor was alle data voor het project altijd bereikbaar. Ook de code reviews gingen via Azure DevOps. Alle developers kunnen dan bij de Pull Requests (PR), mits ze zijn toegevoegd aan het project, en op die manier kan iedereen je code reviewen. Wat hiervan de bedoeling is, 
                                            is dat je niet zomaar je PR kan doorvoeren zonder dat het nogmaals is gecheckt door iemand. De standaard is dan ook dat je PR minimaal door twee mensen moet worden goedgekeurd voor je hem mag mergen met de master branch. Dit was voor mij heel fijn om te weten in de eerste weken, want ik wist nu dat ik niet met één verkeerd PR het hele project kapot kon maken."
                                />
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
                                    body = "Het 4WIND project was over het algemeen hetzelfde als het Dura Vermeer project. We hebben alles netjes en gestructureerd opgezet qua front- en backend. Ook het CMS was ook op dezelfde manier ingericht. Alles bestond wederom uit blokken en daarmee hebben we de website bijna identiek kunnen nabouwen. Toch zaten in de nieuwe website een aantal nieuwe functionaliteiten en aanpassingen die samen voor een uitdaging zorgde."
                                />
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Ook voor 4WIND heb ik de hover effecten op foto’s en blogberichten toegevoegd. Dit keer zijn ze alleen nog wat uitgebreider. Bij Dura Vermeer kregen ze de primaire kleur mee uit het CMS. Hier krijgen bijvoorbeeld de blogberichten de hover kleur mee van het bericht zelf. Hier zat een heel stuk code achter waarvan ik eerst niet eens wist dat het zo kon. Om dit zo te laten werken heb ik in SCSS een for-loop gebouwd met kleuren. Deze mogelijkheid zit in SCSS/SASS, maar dat had ik nog nooit gebruikt. Hiervoor heb ik eerst onderzoek gedaan naar de mogelijkheden binnen SCSS en met een beetje hulp heb ik het toch voor elkaar gekregen."
                                />
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Een ander onderdeel waar ik aanzienlijke tijd in gestopt heb om alles te laten functioneren was de navigatie. De basis was al opgezet en klaar voor gebruik, totdat ik ging testen en er achter kwam dat de helft nog niet werkte naar behoren. Ik ben toen eerst zelf gaan proberen de navigatie om te bouwen. Halverwege liep ik vast, want er kwam veel meer bij kijken dan ik dacht door verschillende uitzonderingen.. Vervolgens heb ik, met wat denk hulp en tips, de navigatie toch af gekregen. Hij is nu een 1:1 kopie van de oude website, maar qua opzet beter."
                                />
                                <Col xs={12}>
                                    <div>
                                        <span className="contentblock">Lees hier de uitgebreide informatie over de navigatie: </span>
                                        <a href="/ontwikkelen">Ontwikkelen - 4WIND - Navigatie</a>
                                    </div>
                                </Col>
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Op het gebied van initiatief nemen en klantgericht werken heb ik voor 4WIND ook mijn best gedaan. Er moest voor de oplevering content gevuld worden, zodat de klant een goede indruk zou krijgen hoe zijn nieuwe website er uit zou kunnen zien. Deze content moest van de oude website gehaald worden en vervolgens op dezelfde manier op de nieuwe website komen. Die taak heb ik op me genomen, want ik wist ook hoe alle blokken in elkaar zaten. Tijdens het vullen kwam ik ook hier en daar bugs tegen die ik vrijwel altijd direct heb opgelost.Voor het Image-content blok (Een foto links en tekst rechts of andersom) was een bepaalde opbouw nodig die we niet hadden voorzien.
                                            Er zat tussen de content een knop die naar de detailpagina zou leiden. Het probleem zat hem dan ook in de knop die in de lopende tekst viel. Ik heb toen eerst geprobeerd het probleem op te lossen met de blokken die we al hadden via de teksteditor in het CMS. Dit bleek helaas niet mogelijk dus moest ik een andere oplossing bedenken. Na een beetje onderzoek kwam ik er achter dat je custom elementen kan maken voor in de teksteditor van het CMS. Dat was precies wat ik nodig had en dus heb ik het element zelf gemaakt. Nu kon je in de teksteditor in het CMS een knop aanmaken die in de lopende tekst geplaatst kon worden."
                                />
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Een extra leermoment had ik tijdens het onderzoeken voor die knop toen ik de zogeheten ternary operator tegen kwam. Dit is een hele korte versie van een if-statement. Ik heb dit als eerste toegepast om de kleuren van de knoppen te kunnen veranderen op basis van een selectie in het CMS. Daarna heb ik het nog veel vaker toegepast, omdat je op deze manier heel snel en overzichtelijk checks kan doen in je code. Het beste hiervan is dan ook dat je zo’n check kan toekennen aan een variabele waardoor hij hergebruikt kan worden in je code zonder dat je continu de code opnieuw moet schrijven."
                                />
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Zoals ook in de projectomschrijving staat, hadden we voor dit project maar een sprint van twee weken. Dit zorgde voor enige werkdruk en dus moesten de deadlines ook echt gehaald worden. We hebben geen grote tegenslagen gehad tijdens dit project en hebben bijna alles binnen de tijd af kunnen ronden. De demo met de klant is een aantal keer uitgesteld door omstandigheden en dat gaf ons de kans om na de sprint nog even door te werken om de laatste bugs te fixen."
                                />
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = "Samenwerking & communicatie"
                                    body = "Qua samenwerking is er ook niet veel veranderd in vergelijk met Dura Vermeer. De grootste verschillen waren dat het team nu bestond uit een scrummaster, twee developers en een Lead. Alleen de eerste drie dagen hebben we met drie developers aan het project gewerkt. Ook nu hadden we elke dag een stand up meeting en na de sprint een retrospective. De communicatie binnen het team ging wederom via Microsoft Teams, Azure DevOps en e-mail."
                                />
                                <Col xs={12}>
                                    <div className="overig__imagewrapper">
                                        <span className="overig__text">Scrumbord tijdens de sprint</span>
                                        <img className="overig__image" src="../images/4WIND-scrumbord-3.png" alt="4WIND-scrumbord-3"></img>
                                        <img className="overig__image" src="../images/4WIND-scrumbord-2.png" alt="4WIND-scrumbord-2"></img>
                                    </div>
                                </Col>
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "In het mom van communicatie naar de klant mocht ik dit keer de Demo mocht geven aan de klant. Ik mocht het hele development proces uitleggen, het CMS en de blokken presenteren en zijn vragen beantwoorden zover ik dat kon. Dit stukje klantinteractie vond leuk om te doen. Achteraf kreeg ik zelfs complimenten over hoe ik het gedaan had en dat gaf mijn zelfvertrouwen een boost."
                                />
                            </Row>
                        </div>
                        <div label="Toolsoup">
                            <Row>
                                <Col xs={12}>
                                    <div>
                                        <a href="/toolsoup" className="overig__link overig__link--text">Wat is het Toolsoup project?</a>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Ik ben tijdens dit project vooral bezig geweest met het verwerken van actuele ontwikkelingen binnen het bedrijf en dan vooral op softwaregebied. Tijdens dit project heb ik hoofdzakelijk data transfers gedaan. Dit was om de DotControl en RockBoost kennisbank te vullen. Het vullen van de kennisbank was erg belangrijk, omdat deze veel gebruikt wordt en zal worden. Ook is de databank belangrijk voor toekomstige nieuwe werknemers, want hier kunnen ze nu op één centrale plek alle data vinden die nodig is om te kunnen werken binnen de verschillende teams."
                                />
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Het andere onderdeel waar ik aan gewerkt heb was het email template voor DotControl support. Dit heb ik gemaakt in Zendesk support, dat is een onderdeel van Zendesk. Zendesk Support is een tool waarmee je klanten support kan regelen. De eerste stap voor mij was het opzetten van een net e-mail template wat de klant zal zien als er een reactie komt vanuit het Zendesk systeem. Mijn volgende stap was te kijken naar de mogelijkheden van Zendesk Support om er een klantenportal van te maken. 
                                            De bedoeling was dat klanten eventueel zelf een account zouden krijgen om zo direct binnen het systeem tickets aan te kunnen maken. Hierdoor zou de communicatie tussen de klant, support en de desbetreffende teams veel sneller gaan. Hierin heb ik een adviserende rol gehad. Ik heb een klein onderzoek gedaan naar de mogelijkheden hiervoor. Daaruit bleek dat het mogelijk was om dit plan met accounts te realiseren, maar nu is het de vraag of het ook zo geïmplementeerd zal worden."
                                />
                                <Col xs={12}>
                                    <div className="overig__imagewrapper">
                                        <span className="overig__text">Email template - footer - Support mail</span>
                                        <img className="overig__image" src="../images/email-template.png" alt="denkstappen-navigatie"></img>
                                    </div>
                                </Col>
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = "Samenwerking & communicatie"
                                    body = "De samenwerking binnen dit project liep iets anders dan bij de Dura Vermeer en 4WIND projecten. We hadden wel dagelijkse Stand Up’s, maar daar bleef het ook bij. Verder had iedereen zijn eigen taak en die moest binnen de gegeven tijd zijn afgerond. Er waren een aantal deadlines opgesteld die gehaald moesten worden. Eén daarvan was het overzetten van de data naar de kennisbank, deze heb ik op mij genomen. Dit was belangrijk, want door dit te doen kon een groot deel van de accounts voor het oude programma worden opgezegd en dat scheelt weer geld voor het bedrijf."
                                />
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "De communicatie binnen dit project verliep, net als bij de andere projecten, via Microsoft Teams en mail. Zo wordt hier binnen het bedrijf de meeste communicatie geregeld."
                                />
                            </Row>
                        </div>
                        <div label="Wat heb ik geleerd?">
                            <Row>
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Als ondernemend technoloog heb ik een aantal dingen geleerd. Allereerst dat je altijd goed up-to-date moet blijven in ons vakgebied. Op die manier ben je je altijd bewust van nieuwe ontwikkelingen en daar kan jij als individu, maar ook als bedrijf alleen maar van groeien. Verder is het ook belangrijk om te leren kansen te herkennen en te benutten. Dit is voor mij toepasselijk voor mijn gehele stage. Ik zag de kans om bij DotControl mijn stage te gaan doen en die heb ik met beide handen aangegrepen. 
                                    Ook kreeg ik helemaal in het begin de keuze om mee te draaien op een groot project of een eigen project te doen. Ik heb gekozen voor het meedraaien op een groot project, want op die manier kon ik eindelijk ervaren hoe het is om te werken als WebDeveloper in een groot bedrijf. Mijn laatste echte kans die ik heb gepakt was mijn onderzoek over Hoe we de SEO van Single Page Applications kunnen verbeteren en wat daarin de belangrijke factoren zijn. Dit is een heel nieuw onderwerp binnen onze sector, omdat Single Page Applications in opkomst zijn en SEO steeds belangrijker wordt. Ik was hier zelf van op de hoogte, want dit is iets waar ik me heel graag in wilde gaan verdiepen. Nu kreeg ik de kans aangeboden om dat te doen bij mijn stagebedrijf."
                                />
                                <Col xs={12}>
                                    <div>
                                        <span className="contentblock">Lees hier mijn introductie hoe ik bij DotControl gekomen ben: </span>
                                        <a href="/introductie">Introductie DotControl</a>
                                        <br/>
                                        <span className="contentblock">Lees hier mijn onderzoek: </span>
                                        <a href="/onderzoek">Onderzoek</a>
                                    </div>
                                </Col> 
                            </Row>
                        </div>
                        <div label="Wat zou ik anders doen?">
                            <Row>
                                <ContentBlockLarge
                                    className = "contentblock contentblock--alinea"
                                    title = ""
                                    body = "Ik zou nog wat meer willen gaan kijken naar nieuwe ontwikkelingen om te implementeren. Ook moet ik meer kijken naar bestaande oplossingen, zodat ik daar weer op verder kan bouwen. Tijdens het Dura Vermeer project had ik daar veel profijt van kunnen hebben, maar door mijn onervarenheid kon ik nog niet anders."
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

export default Ondernemen;