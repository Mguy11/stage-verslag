import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import SmallHeader from '../components/smallheader';
import NavBar from '../components/navbar';
import { Footer } from '../webparts/_footer';
import  Slider  from '../components/slider';
import Tabs from '../webparts/_tabs';
import ContentBlock from '../components/contentBlock';
import TestimonialBlock from '../components/testimonialBlock';

export default class Onderzoeken extends Component {
    render() {
        return (
            <div className="onderzoeken">
                <SmallHeader
                    title = "Onderzoeken"
                />
                <NavBar />
                <div className="wrap">
                <Grid>
                    <TestimonialBlock
                        subtitle1="Onderzoeken en analyseren: "
                        body1=" De CMGT'er is in staat op structurele wijze een bronnen- en veldonderzoek uit te voeren in opdracht van het stagebedrijf 
                        en op basis van de verzamelde data conclusies te trekken en aanbevelingen te doen. De CMGT'er reflecteert de resultaten van het onderzoek kritisch."
                        subtitle2=""
                        body2=""
                        subtitle3=""
                        body3=""
                    />
                </Grid>
                </div>
                <Footer />
            </div>
        );
    }
}


