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

const Ontwerpen = () => {
    return (
        <div className="ontwerpen">
            <SideNav />
            <NavBar />
            <SmallHeader
                title = "Ontwerpen"
            />
            <div className="wrap">
            <Grid>
                <TestimonialBlock
                    subtitle1="Conceptualiseren: "
                    body1="Ik ben in staat me te verdiepen in de probleemstelling en de doelgroep. Ik pas creatieve technieken toe om tot verschillende ideeën te komen en een concept te ontwerpen dat relevant is voor deze doelgroep."
                    subtitle2="Ontwerpen en prototypen: "
                    body2="Ik kan vanuit userstories een interactieontwerp opstellen als basis voor verschillende prototypes. Middels gestructureerde gebruikerstesten doe ik aanbevelingen om tot een product te komen dat aanluit bij de doelgroep."
                />
                <Tabs style={{padding: '4rem'}}>
                    <div label="Idee + Brainstormen">
                        <Row>
                            <ContentBlockLarge
                                className = "contentblock contentblock--alinea"
                                title = ""
                                body = "Tijdens mijn stageperiode bij DotControl heb ik me volledig op development gericht. Ik heb een aantal keer aangegeven dat ik een graag een creatieve sessie zou bijwonen, maar daar is niks van gekomen. Daarom heb ik besloten zelf een website te bouwen om toch mijn “ontwerp” competentie te kunnen halen.
                                        Ik wilde daarbij ook mezelf weer uitdagen om meer te leren, dus heb ik gekozen een stagewebsite te bouwen in React met SCSS. Ook wil ik mijn stagewebsite responsive maken, omdat daar de grootste uitdagingen liggen qua frontend. Verder heb ik er voor gekozen om de backend voor nu zo simpel mogelijk te houden, dus ik zet ook mijn teksten statisch op mijn website en maak ze pas dynamisch als ik tijd over heb."
                            />
                            <ContentBlockLarge
                                className = "contentblock contentblock--alinea"
                                title = ""
                                body = "Voor mijn eigen website heb ik gebruik gemaakt van een aantal ontwerp technieken. Zo heb ik eerst een brainstormsessie gehouden voor het algehele ontwerp voor mijn website."
                            />
                            <Col xs={12}>
                                <Slider /> 
                            </Col>
                        </Row>
                    </div>
                    <div label="Wireframes">
                        <Row>
                            <ContentBlockLarge
                                className = "contentblock contentblock--alinea"
                                title = ""
                                body = "Uiteindelijk had ik voor mezelf duidelijk hoe de website er uit moest komen te zien. Het design is een beetje gebaseerd op al het werk wat ik gedaan heb tijdens mijn stage, maar wel met een Martijn Bankert filter er overheen. Oftewel een donker thema, alles strak en recht en vooral functioneel. Maar voor ik het echte design heb gemaakt heb ik eerst wireframes opgesteld. 
                                        Hierdoor had ik een goed overzicht waar alles zou komen op mijn website en kon ik van tevoren nog dingen aanpassen. Dat scheelde tijd tijdens het ontwikkelen."
                            />
                        </Row>   
                    </div>
                    <div label="Navigatie website">
                        <Row>
                            <ContentBlockLarge
                                className = "contentblock contentblock--alinea"
                                title = ""
                                body = "Een onderdeel waar ik veel tijd in gestoken heb, is mijn navigatie. Dit is altijd al één van de meest complexe onderdelen van een website en dat was nu geen uitzondering. Ik heb hem ondertussen al een aantal keer opnieuw gebouwd, omdat ik het niet helemaal eens was met het uiterlijk of hoe hij functioneerde. Uiteindelijk is de huidige versie de versie die ik het beste vond. 
                                        Hij is voor desktop simpel, overzichtelijk en vooral abstract. Voor mobile is hij dat ook, maar op een andere manier. Het enige waar ik nog niet tevreden over ben, is de animatie. Die zal ik hoogstwaarschijnlijk nog een keer veranderen."
                            />
                        </Row>  
                    </div>
                    <div label="User Stories">
                        <Row>
                            <ContentBlockLarge
                                className = "contentblock contentblock--alinea"
                                title = ""
                                body = "Voor mijn website heb ik User Stories opgesteld. Aan de hand van deze stories heb ik taken opgesteld. Daarbij had ik ook een Definition of Done. Wanneer alle taken van de User Story klaar waren en de Definition of Done was behaald heb ik hem op compleet gezet."
                            />
                        </Row>
                        <Row>
                            <div>
                                <ul>
                                    <li>Als student wil ik mijn website op eigen hosting hebben, zodat hij op mijn naam gevonden kan worden.</li>
                                    <li>Als student wil ik een header blok, zodat de bezoeker weet wat voor website/pagina het is.</li>
                                    <li>Als student wil ik een content blok, zodat ik teksten op mijn website kan plaatsen.</li>
                                    <li>Als student wil ik een image content block, zodat ik tekst met een foto ernaast op mijn website kan plaatsen.</li>
                                    <li>Als student wil ik een image slider, zodat ik foto's in slider vorm op mijn website kan plaatsen.</li>
                                    <li>Als student wil ik en introductie content block, zodat ik een welkoms woord op mijn homepagina kan plaatsen.</li>
                                    <li>Als student wil ik tabbladen hebben, zodat ik mijn content per project kan indelen.</li>
                                    <li>Als student wil ik een content blok speciaal voor omschrijvingen, zodat ik alle competentieomschrijvingen op de desbetreffende pagina kan vermelden.</li>
                                    <li>Als student wil ik een navigatiebalk, zodat al mijn pagina's te bereiken zijn.</li>
                                    <li>Als bezoeker wil ik dat de content leesbaar is, zodat ik het duidelijk is.</li>
                                </ul>
                            </div>
                        </Row>  
                    </div>
                    <div label="Wat heb ik geleerd?">
                        <Row>
                            <ContentBlockLarge
                                className = "contentblock contentblock--alinea"
                                title = ""
                                body = "Op ontwerpgebied heb tijdens mijn stage weinig nieuwe dingen geleerd. Wat ik wel geleerd heb is hoe ik mijn ontwerpkennis kan toepassen op echte projecten. Ik merkte bijvoorbeeld dat ik designs heel makkelijk kon interpreteren en om kon zetten in code. Verder kon ik ook mijn UX kennis goed gebruiken om voor de projecten op een aantal plekken de gebruikerservaring te verbeteren. Het was heel erg leerzaam om te zien hoe dat in een bedrijf gaat en vooral hoe andere developers omgaan met creatieve vrijheid."
                            />
                        </Row>    
                    </div>
                    <div label="Wat zou ik anders doen?">
                        <Row>
                            <ContentBlockLarge
                                className = "contentblock contentblock--alinea"
                                title = ""
                                body = "Ik zou meer mijn mening naar voren willen brengen in het team. Ik heb nu vaak gekozen om alleen te observeren. Ik heb te weinig mijn eigen kennis durven gebruiken terwijl ze bij DotControl juist open staan voor extra input, ook al komt dat van een stagiair. Bedrijven staan vaak juist open voor feedback van mensen die nieuw zijn binnen het bedrijf. Kortom ik moet meer vertrouwen hebben in mijn eigen werk en kennisniveau."
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

export default Ontwerpen;