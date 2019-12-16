import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import SmallHeader from '../components/smallheader';
import NavBar from '../components/navbar';
import { Footer } from '../webparts/_footer';
import  Slider  from '../components/slider';
import Tabs from '../webparts/_tabs';
import ContentBlock from '../components/contentBlock';
import TestimonialBlock from '../components/testimonialBlock';

const Betrokken = () => {

    return (
        <div className="betrokken">
            <SmallHeader
                title = "Betrokken"
            />
            <NavBar />
            <div className="wrap">
                <Grid>
                    <TestimonialBlock
                        class=""
                        subtitle1="Lerend vermogen: "
                        body1="Ik ben kritisch en streef ernaar het beste in mezelf en anderen naar boven te halen. 
                        Ik reflecteer structureel op eigen ervaringen en feedback vanuit het stagebedrijf en trek daaruit lessen voor de toekomst."
                        subtitle2="Maatschappelijke verantwoordelijkheid: "
                        body2="Ik verdiep me naast de directe gebruikers ook in andere stakeholders en maatschappelijke ontwikkelingen. Ik kan maatschappelijke en ethische implicaties van producten waaraan ik meewerk benoemen, en er een onderbouwde mening over vormen."
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