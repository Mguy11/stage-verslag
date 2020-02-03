import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import SmallHeader from '../components/smallheader';
import NavBar from '../components/navbar';
import { Footer } from '../webparts/_footer';
import Slider  from '../components/slider';
import Tabs from '../webparts/_tabs';
import ContentBlock from '../components/contentBlock';
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
                            <div style={{textAlign: 'center'}}>
                                <a href="../assets/documents/Onderzoeksverslag-SEO-SPA-versie-2.pdf" download>Download hier mijn onderzoek als PDF</a>
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


