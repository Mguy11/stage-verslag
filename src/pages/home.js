import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import LargeHeader from '../components/largeheader';
import { Footer } from '../webparts/_footer';
import  Slider  from '../components/slider';
import ContentBlock from '../components/contentBlock';
import ContentBlockLarge from '../components/contentBlockLarge';
import NavBar from '../components/navbar';


const Home = () => {
    return (
        <div className="home particles-js">
            <LargeHeader 
                title = "Stageverslag - Martijn Bankert"
            />
            <NavBar />
            <div className="wrap">
                <Grid style={{marginTop: '2rem'}}>
                    <Row>
                        <ContentBlockLarge 
                            className = "contentblock contentblock--intro"
                            title = "Test"
                            body = "Deze website heb ik gebouwd voor de verslaglegging van mijn 3e jaars stage. 
                            Ik heb mijn stage gelopen bij DotControl in Rotterdam. DotControl is samen met RockBoost een full service web bureau. "
                        />      
                    </Row>
                    <Row style={{margin: '4rem 0'}}>
                        <Col xs={6}>
                            <div className="content__image">
                                <figure className="content__image-wrapper">
                                    <img className="image"/>
                                </figure>
                            </div>
                        </Col>                   
                        <ContentBlock 
                            className = "contentblock contentblock--right"
                            title = ""
                            body = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        />
                    </Row>                   
                    <Row style={{margin: '4rem 0'}}>
                        <ContentBlock 
                            className = "contentblock contentblock--left"
                            title = ""
                            body = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        />     
                        <Col xs={6}>
                            <div className="content__image">
                                <figure className="content__image-wrapper">
                                    <img className="image"/>
                                </figure>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{margin: '4rem 0'}}>
                        <Col xs={6}>
                            <div className="content__image">
                                <figure className="content__image-wrapper">
                                    <img className="image"/>
                                </figure>
                            </div>
                        </Col>
                        <ContentBlock 
                            className = "contentblock contentblock--right"
                            title = ""
                            body = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        />
                    </Row>
                    <Row style={{margin: '4rem 0'}}>
                        <ContentBlockLarge 
                            className = "contentblock contentblock--middle"
                            title = "Test"
                            body = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        />
                    </Row>
                    <Row style={{margin: '4rem 0'}}>
                        <Col xs={12}>
                            <Slider />
                        </Col>
                    </Row>
>                </Grid>
            </div>
            <Footer />
        </div>
    );
}

export default Home;