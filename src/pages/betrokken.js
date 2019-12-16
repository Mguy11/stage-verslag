import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import SmallHeader from '../components/smallheader';
import NavBar from '../components/navbar';
import { Footer } from '../webparts/_footer';
import  Slider  from '../components/slider';
import Tabs from '../webparts/_tabs';

const Betrokken = () => {

    return (
        <div className="betrokken">
            <SmallHeader
                title = "Betrokken"
            />
            <NavBar />
            <div className="wrap">
                <Grid>
                    <Row style={{padding: '4rem'}}>
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
                    <Row>
                        <Col xs={12}>
                        <Slider />
                        </Col>
                    </Row>
                    <Row>
                        <Tabs>
                            <div label="Gator">
                                See ya later, <em>Alligator</em>!
                            </div>
                            <div label="Croc">
                                After 'while, <em>Crocodile</em>!
                            </div>
                            <div label="Sarcosuchus">
                                Nothing to see here, this tab is <em>extinct</em>!
                            </div>
                        </Tabs>
                    </Row>
                </Grid>
            </div>
            <Footer />
        </div>
    ); 
}

export default Betrokken;