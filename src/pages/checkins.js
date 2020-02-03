import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import SmallHeader from '../components/smallheader';
import { Footer } from '../webparts/_footer';
import NavBar from '../components/navbar';
import SideNav from '../components/sidenav';
import ContentBlockLarge from '../components/contentBlockLarge';

const CheckIns = () => {
  return (
      <div className="checkins">
          <SideNav />
          <NavBar />
          <SmallHeader 
              title = "Check-In's"
          />
          <div className="wrap">
              <Grid>
                <Row>
                  <ContentBlockLarge
                    className = "contentblock contentblock--alinea"
                    title = "Wat zijn Check-In’s?"
                    body = "Check-In’s zijn feedback momenten die DotControl en RockBoost ingevoerd hebben voor alle medewerkers.
                            Tijdens deze Check-In’s loop je  een formulier met punten door waar een score aan hangt. Op basis van jouw prestaties wordt het formulier ingevuld. Aan de hand van het formulier is vervolgens te zien waar je sterke en minder sterke punten liggen en waar je dus meer op moet focussen."
                  />
                  <ContentBlockLarge
                    className = "contentblock contentblock--alinea"
                    title = ""
                    body = "Het formulier werkt twee kanten op. Je krijgt als werknemer feedback vanuit het bedrijf en je krijgt de kans om feedback terug te geven. Op deze manier kan iedereen blijven verbeteren waar nodig.
                            Ik vond het als stagiair fijn om dit formulier ook een aantal keer in te vullen, zodat ik een idee had hoe ik mezelf ontwikkelde tijdens deze stageperiode."
                  />
                </Row>
                <Row>
                  <div>
                    <h3>Waaruit bestaat een Check-In formulier?</h3>
                      <ul>
                          <li>Color score (DotControl naar werknemer)</li>
                          <li>Soft skills ratings</li>
                          <li>KPI’s (Key Performance indicators)</li>
                          <li>Feedback naar het bedrijf (werknemer naar DotControl)</li>
                      </ul>
                  </div>
                </Row> 
                <Row>
                  <div>
                    <h3>Mijn Algemene Score:</h3>
                      <ul>
                          <li>week 3: Mijn algemene score was in de derde week groen. Dit hield in dat ik presteerde naar mijn niveau en de verwachtingen die het bedrijf daarbij had.</li>
                          <li>week 11: Mijn algemene score was wederom groen. Ik presteerde nog steeds volgens alle verwachtingen.</li>
                          <li>week 22: Mijn algemene score was weer groen gebleven. Mijn niveau voldeed wederom aan de verwachtingen.</li>
                      </ul> 
                  </div>
                  <Col xs={12}>
                      <div className="overig__imagewrapper">
                          <span className="overig__text">Color score van alle drie de Check-In's</span>
                          <img className="overig__image" src="../images/color-score.png" alt="denkstappen-navigatie"></img>
                      </div>
                  </Col>
                </Row> 
                <Row>
                  <h3>Soft skill ratings:</h3>
                  <ContentBlockLarge
                    className = "contentblock contentblock--alinea"
                    title = ""
                    body = "week 3: Tijdens de eerste Check-In kreeg ik op de meeste punten een 3. Dit hield in dat ik op de goede weg zat, maar nog genoeg ruimte had om te kunnen verbeteren. Een aantal punten werden zelfs wat lager beoordeeld. Dit waren de punten waar ik echt aan moest werken. De belangrijkste daarvan was proactiveness.
                            Proactiveness heeft te maken met actief bezig zijn met het project, meedenken en anticiperen. Dat waren dingen die ik in de eerste weken moeilijk vond en daardoor scoorde ik ook lager. Een ander punt was Detail oriented werken. Dit had vooral te maken met de manier waarop ik taken uitvoerde. Vaak ging het hier om stukken code die tijdens een Pull Request werden afgekeurd,
                            omdat de code niet goed was of niet voldeed aan alle eisen. Voor de eerstvolgende Check-In was het de bedoeling om extra hard te werken aan deze punten, zodat ze zouden verbeteren."
                  />
                  <ContentBlockLarge
                    className = "contentblock contentblock--alinea"
                    title = ""
                    body = "week 11: Tijdens mijn tweede Check-In was de feedback vrij positief. Ik had me al beter ontwikkeld ten opzichte van de eerste Check-In. Ik scoorde al hoger op proactiveness, maar er was zeker nog ruimte om te verbeteren. Daarnaast was het punt Detail oriented werken veel beter geworden, hij was namelijk van een 2 naar een 4 gegaan. Ik maakte dus goede vorderingen. Ik had me voorgenomen zo door te gaan, want ik wil mezelf alleen maar verbeteren."
                  />
                  <ContentBlockLarge
                    className = "contentblock contentblock--alinea"
                    title = ""
                    body = "week 22: Dit was mijn laatste Check-In. Dit keer kreeg ik ook extra feedback per punt, beoordeeld over mijn gehele stageperiode. Het was duidelijk dat mijn proactiveness nog verder verbeterd was. Er werd duidelijk aangegeven dat ik in het begin van mijn stageperiode heel duidelijke uitleg nodig had om te starten met werken, 
                            maar nu aan het einde ging dat allemaal vanzelf en kon ik zelfs problemen spotten en direct oplossen. Verder was ik ook vooruit gegaan op het gebied van Creative output & ideas. Ik heb goed kunnen laten zien welke skills ik beheers op het UX deel na. Daar hadden ze graag meer willen zien. Ik heb daarop ook aangegeven dat ik het moeilijk vond om mijn eigen creativiteit te gebruiken, omdat we volgens designs moeten werken en ik daarvan niet af durf te wijken.
                            Overall kreeg ik een zeer positieve beoordeling over hoe ik mezelf heb ontwikkeld binnen deze korte tijd en ik moet vooral zo door blijven gaan en mijn skills blijven verbeteren."
                  />
                </Row>
                <Row>
                  <h3>KPI’s</h3>
                  <ContentBlockLarge
                    className = "contentblock contentblock--alinea"
                    title = ""
                    body = "De KPI’s hebben we ook tijdens elke Check-In ingevuld. Deze punten werden beoordeeld met behaald, niet behaald of n.v.t. De KPI’s gaan vooral over hoe jij je uren bijhoud in Simplicate, of je je code etc. in één keer goed oplevert, of je op tijd bent bij meetings en afspraken en als laatste hoe je communicatie is binnen het bedrijf. Op alles, behalve het opleveren van mijn code, kreeg ik behaald. De laatste heb ik nog niet “behaald”, 
                            omdat ik nog niet al mijn Pull Request foutloos heb opgeleverd. Als ik nog iets beter zou testen op responsiveness en in alle browsers kan ik alles met “behaald” afsluiten."
                  />
                </Row>
              </Grid>
          </div>
          <Footer />
      </div>
  );
}

export default CheckIns;