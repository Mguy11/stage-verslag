import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__banner">
                <Grid>
                    <Row center="xs">
                        <Col xs={12} lg={6}>
                            <div className="footer__name"><a href="https://www.linkedin.com/in/martijn-bankert-389491161/" target="__blank">Martijn Bankert</a>&nbsp;&copy;&nbsp;All rights Reserved</div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </div>
    );
}