import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__banner">
                <Grid>
                    <Row center="xs">
                        <Col xs={12} lg={6}>
                            <div className="footer__name"><a href="https://www.linkedin.com/in/martijn-bankert-389491161/" target="__blank" className="overig__link overig__link--footer">Martijn Bankert</a>
                            <span>&nbsp;&copy;&nbsp;All rights Reserved</span></div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </div>
    );
}