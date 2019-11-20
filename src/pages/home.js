import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import LargeHeader from '../components/largeheader';
import Navigation from '../webparts/_navigation';
import { Footer } from '../webparts/_footer';
import  Slider  from '../components/slider';


const Home = () => {
    return (
        <div className="home">
            <LargeHeader 
                title = "Stage verslag - Martijn Bankert"
            />
            <Navigation />
            <div className="wrap">
                <Grid style={{marginTop: '4rem'}}>
                    <Row style={{margin: '1rem 0'}}>
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
                    <Row style={{margin: '1rem 0'}}>
                        <Col xs={6}>
                            <div className="content__image">
                                <figure className="content__image-wrapper">
                                    <img className="image"/>
                                </figure>
                            </div>
                        </Col>
                        <Col xs={6}>
                            <div className="content__block content__block--grey">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </Col>
                    </Row>
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

export default Home;