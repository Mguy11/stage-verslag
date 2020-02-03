import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import SmallHeader from '../components/smallheader';
import NavBar from '../components/navbar';
import { Footer } from '../webparts/_footer';
import Slider  from '../components/slider';
import Tabs from '../webparts/_tabs';
import ContentBlockLarge from '../components/contentBlockLarge';
import TestimonialBlock from '../components/testimonialBlock';
import SideNav from '../components/sidenav';

export default class Onderzoeken extends Component {
    render() {
        return (
            <div className="onderzoeken">
                <SideNav />
                <NavBar />
                <SmallHeader
                    title = "Onderzoeken"
                />
                <div className="wrap">
                <Grid>
                <Row>
                    <Col xs={12}>
                        <div className="overig__pageslist">
                            <ul>
                                <li className="overig__list-item">
                                    <a href="/bedrijf" className="overig__link">Het Bedrijf</a>
                                </li>
                                <li className="overig__list-item">
                                    <a href="/reflectie" className="overig__link">Algemene Reflectie</a>
                                </li>
                                <li className="overig__list-item">
                                    <a href="/terugkomdagen" className="overig__link">Stageterugkomedagen</a>
                                </li>
                                <li className="overig__list-item">
                                    <a href="/uitwisselingsboek" className="overig__link">Uitwisselingsboek</a>
                                </li>
                                <li className="overig__list-item">
                                    <a href="/dura-vermeer" className="overig__link">Het Dura Vermeer Project</a>
                                </li>
                                <li className="overig__list-item">
                                    <a href="/4WIND" className="overig__link">Het 4Wind Project</a>
                                </li>
                                <li className="overig__list-item">
                                    <a href="/Toolsoup" className="overig__link">Het Toolsoup project</a>
                                </li>
                                <li className="overig__list-item">
                                    <a href="/checkins" className="overig__link">Check-In's overzicht</a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row> 
                </Grid>
                </div>
                <Footer />
            </div>
        );
    }
}


