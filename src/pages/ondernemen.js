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
                                body = "Voor het Dura Vermeer project heb ik in eerste instantie veel moeten uitzoeken. Vooral omdat dit mijn eerste project was waar ik aan mee ging werken en ik nog geen idee had wat voor standaarden ze hier gebruikte en hoe het nieuwe CMS werkte. De eerste dagen ben ik vooral bezig geweest met rondklikken, vragen stellen en notities maken, zodat ik een basis had om op door te bouwen. Het CMS wat we gingen gebruiken heet Umbraco.
                                 Het is een redelijk uitgebreid, maar vooral gebruiksvriendelijk CMS. Aangezien de mensen van Dura Vermeer met het CMS moet gaan werken wilde we alles zo netjes en compleet mogelijk opleveren. Zo is het mogelijk omschrijvingen toe te voegen bij alle invoervelden in het CMS. Dit had ik netjes allemaal gedaan in het Nederlands, maar toen kwam het punt van meertaligheid in het CMS ter sprake. Het is dus mogelijk om de taal van het CMS per gebruiker in te stellen, wat bijvoorbeeld handig is voor mensen die geen Nederlands kunnen. 
                                 Het CMS vertaald dan alle invoerveld kopjes/titels, maar de beschrijvingen bleven Nederlands. Ik bracht toen naar voren of het niet mogelijk was die beschrijvingen ook te vertalen. Niemand hier wist of dat überhaupt mogelijk was, dus ben ik wat onderzoek gaan doen naar de mogelijkheden. Ook op internet waren er geen duidelijke antwoorden te vinden of het mogelijk was dit te doen. Uiteindelijk kreeg ik vanuit DotControl groen licht om contact op te nemen met Umbraco Support.
                                  Daar heb ik dezelfde vraag gesteld of het mogelijk was om vertalingen toe te voegen voor omschrijvingen van velden in het CMS. Tot mijn verbazing kreeg ik daar het antwoord dan het nog niet kon en de vraag of ik dat niet misschien zelf wilde ontwikkelen voor he CMS. Helaas was daar geen tijd en budget voor binnen dit project, maar ik heb in ieder geval alles geprobeerd om deze extra functionaliteit toe te voegen. 
                                "
                            />
                            <ContentBlockLarge
                                className = "contentblock contentblock--alinea"
                                title = ""
                                body = "Tijdens het bouwen van verschillende blokken moesten we een image-picker toevoegen. Hiermee kan je in het CMS een foto kiezen uit je media-bibliotheek. Iets wat belangrijk is voor foto’s op je website is een zogeheten alt-tekst. Een alt-tekst zorgt er voor dat er woorden komen te staan als de  foto niet getoond kan worden. Als je geen alt-teksten toevoegt aan je foto’s kan dat impact hebben op je SEO score.
                                 Het is dus beter als je ze gewoon toevoegt dan heb je er alleen maar profijt van. Ditzelfde zei ik ook tegen mijn team op het moment dat we bezig waren met het opzetten van de Blocks. Er is toen besloten om het toe te voegen, wanneer een gebruiker een foto toevoegt aan de media-bibliotheek. De gebruiker kan nu de foto uploaden en direct een alt-tekst invoeren. Zo kost het ook niet veel tijd om de alt-teksten toe te voegen, aangezien je dit direct doet per foto als je ze toevoegt in plaats van alles achteraf nalopen."
                            />
                            <ContentBlockLarge
                                className = "contentblock contentblock--alinea"
                                title = ""
                                body = "Een andere kleine functionaliteit die ik ook heb mogen toevoegen was de scroll button in de header van de homepagina en het aanmeld-formulier. De knop bestaat uit een pijl, een cirkel en een tekst. Het idee van onze designer was dat wanneer je er overheen hoverd met de muis, de gehele button zou verkleinen of vergroten. Ik vond dit niet heel logisch dus heb ik ander voorstel gedaan, namelijk een kleine animatie waar de pijl naar beneden beweegt wanneer er overheen gehoverd wordt. 
                                Hiermee geef je al aan bij de gebruiker dat er iets zal gebeuren door deze knop wat te maken heeft met een neerwaartse beweging. Na overleg met onze designer mocht deze animatie er in blijven. Dit was iets heel simpels maar naar mijn idee beter te begrijpen voor de gebruiker.  
                                "
                            />
                            <ContentBlockLarge
                                className = "contentblock contentblock--alinea"
                                title = ""
                                body = "Nog een mooi voorbeeld voor een extra stukje visuele ondersteuning is een overlay wat ik gemaakt heb voor de nieuwsberichten in het nieuwsoverzicht. Zodra de gebruiker over de foto of het bericht zonder foto hoverd met de muis komt er een overlay overheen. Voor de foto’s zal dat in de primair gekozen kleur zijn en voor het bericht zonder foto is dat wit. Hierdoor krijg je als gebruiker ook een stukje feedback vanuit de website wat je gaat aanklikken.  
                                "
                            />
                            <ContentBlockLarge
                                className = "contentblock contentblock--alinea"
                                title = ""
                                body = "Als laatste had ik de opdracht gekregen om een Google Maps Block te bouwen. Dit was niet geheel nieuw voor mij, want dit had ik al eens gedaan. Maar voor ik zelf iets ging bouwen heb ik eerst nog gekeken naar betere alternatieven die beter zouden kunnen werken met dit project en waar de klant makkelijker mee zou kunnen werken.
                                 Zou had ik een tweetal plugins gevonden die zouden kunnen werken met ons Umbraco project. Helaas werd de beslissing genomen deze toch niet te gaan gebruiken en alles zelf te maken. Ik mocht dus alsnog aan de slag om het Block zelf te maken, dat vond ik overigens ook wel een goede opdracht om mijn JavaScript skills te oefenen. Ik heb toen eerst het Block binnen een in een inline-script gebouwd tussen de HTML van het Block zelf. Dat was lokaal een goede oplossing, maar toen dat werkte kreeg ik te horen dat ik hem nu als apart component mocht bouwen en dit keer niet in JavaScript, 
                                 maar in TypeScript met de bijbehorende dynamisch velden uit het CMS. Dit heeft in eerste instantie een hoop tijd en moeite gekost, omdat mijn TypeScript skills al niet zou goed waren en er was heel erg weinig documentatie te vinden over Google Maps in Typescript. Na enige tijd heb ik samen met een andere developer toch het Block afgemaakt, maar toen kwam het tweede probleem, namelijk het doorgeven van data uit Umbraco naar RazorScript documenten (C#) en dat vervolgens naar TypeScript. Hiervoor heb ik een hoop documentatie doorgenomen van zowel Typescript als C#, maar ik kwam er gewoonweg niet uit.
                                  Deze taak hebben ze toen maar overgedragen aan iemand die er een stuk meer kennis van had en die heeft het ook voor ons geregeld. Later in het project kwam er nog eenzelfde situatie voor waar we op dezelfde manier de data moesten doorgeven en dit heb ik toen wel zelf opgelost.  
                                "
                            />
                            <ContentBlockLarge
                                className = "contentblock contentblock--alinea"
                                title = "Samenwerking en communicatie"
                                body = "Tijdens dit project was samenwerking zeker nodig. Ik heb gewerkt in een team van 8 mensen bestaande uit de product owner, een scrummaster, de Development Lead van dit team, de designer,  een backender, twee andere developers en ik. Ondertussen zijn er nog mensen weggegaan en bijgekomen. Met dit team hadden we elke dag Stand Up meetings, tijdens deze Stand Up’s werd alle voortgang besproken van het project en alle eventuele problemen aangekaart.
                                 Elke twee weken, wanneer de sprint was afgerond, hadden we ook met dit team een retrospective en een planning meeting. We hebben het hele project door eigenlijk alle deadlines wel gehaald op een klein dingetje na hier en daar. Uiteindelijk hebben we het project ook op tijd kunnen opleveren ondanks de onverwachte toevoegingen en eisen. Ook de samenwerking met een derde partij zorgde voor enige vertraging, maar ook dit hebben we netjes op kunnen lossen.  
                                "
                            />
                            <ContentBlockLarge
                                className = "contentblock contentblock--alinea"
                                title = ""
                                body = "De communicatie tijdens dit project liep voornamelijk via het communicatie- en samenwerkingsplatform Microsoft Teams. Dit vind ik zelf een erg fijn programma om te gebruiken en het is vanuit DotControl gestructureerd ingericht wat het voor nieuwe mensen makkelijk maakt om mee te starten. Verder stond ons hele project qua code en scrumbord + backlog online via Azure DevOps. Hierdoor waren de spullen voor het project altijd bereikbaar. Ook de codereviews gingen via Azure DevOps. Alle developers kunnen dan bij de Pull Requests (PR), mits ze zijn toegevoegd aan het project,
                                 en op die manier kan iedereen je code reviewen. Wat hiervan de bedoeling is, is dat je niet zomaar je PR kan doorvoeren zonder dat het nogmaals is gecheckt door iemand. De standaard is dan ook dat je PR minimaal door twee mensen moet worden goed gekeurd voor je hem mag mergen met de master branch. Dit was voor mij heel fijn om te weten in de eerste weken, want nu was ik zeker dat ik niet met één verkeerd PR het hele project kapot kon maken.  
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