import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import SmallHeader from '../components/smallheader';
import NavBar from '../components/navbar';
import { Footer } from '../webparts/_footer';
import  Slider  from '../components/slider';
import Tabs from '../webparts/_tabs';
import ContentBlock from '../components/contentBlock';
import TestimonialBlock from '../components/testimonialBlock';

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

export default Ondernemen;