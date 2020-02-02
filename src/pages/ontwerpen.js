import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import SmallHeader from '../components/smallheader';
import NavBar from '../components/navbar';
import { Footer } from '../webparts/_footer';
import  Slider  from '../components/slider';
import Tabs from '../webparts/_tabs';
import ContentBlock from '../components/contentBlock';
import TestimonialBlock from '../components/testimonialBlock';
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
                            
                        </Row>
                    </div>
                    <div label="4Wind">
                        <Row>
                            
                        </Row>   
                    </div>
                    <div label="Toolsoup">
                        <Row>
                            
                        </Row>  
                    </div>
                    <div label="Wat heb ik geleerd?">
                        <Row>
                            
                        </Row>    
                    </div>
                    <div label="Wat zou ik anders doen?">
                        <Row>
                            
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

export default Ontwerpen;