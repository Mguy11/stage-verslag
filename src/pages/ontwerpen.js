import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import SmallHeader from '../components/smallheader';
import NavBar from '../components/navbar';
import { Footer } from '../webparts/_footer';
import  Slider  from '../components/slider';
import Tabs from '../webparts/_tabs';
import ContentBlock from '../components/contentBlock';
import TestimonialBlock from '../components/testimonialBlock';

const Ontwerpen = () => {
    return (
        <div className="ontwerpen">
            <SmallHeader
                title = "Ontwerpen"
            />
            <NavBar />
            <div className="wrap">
            <Grid>
                <TestimonialBlock
                    subtitle1="Conceptualiseren: "
                    body1="De CMGT'er is in staat een concept te ontwerpen dat relevant is voor een vooraf gespecificeerde doelgroep. Vanuit een probleemstelling past 
                    de mediatechnoloog creatieve technieken toe om tot een ontwerpkader te komen dat als een startpunt gebruikt kan worden voor een ontwikkeltraject."
                    subtitle2="Ontwerpen en prototypen: "
                    body2="De CMGT'er kan een gestructureerd doelgroeponderzoek opzetten en uitvoeren in opdracht van het stagebedrijf. 
                    Door middel van prototyping en gebruikerstesten kan hij/zij tot een interface komen die aansluit bij deze doelgroep."
                    subtitle3=""
                    body3=""
                />
                <Tabs style={{padding: '4rem'}}>
                    <div label="Dura Vermeer">
                    <Row>
                        <Col xs={6}>
                            <div className="content__block content__block--grey">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </Col>
                        <Col xs={6}>
                            <div className="content__image">
                                <figure className="content__image-wrapper">
                                    <img className="image"/>
                                </figure>
                            </div>
                        </Col>
                    </Row>
                    
                    </div>
                    <div label="4Wind">
                        
                    </div>
                    <div label="Toolsoup">
                        
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

export default Ontwerpen;