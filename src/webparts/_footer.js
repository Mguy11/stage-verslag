import React from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__banner">
                <Grid>
                    <Row>
                        <Col xs={6}>
                            <div className="footer__name">Martijn Bankert</div>
                        </Col>
                        <Col xs={6}>
                            <div className="footer__date">&copy;&nbsp;All rights Reserved </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </div>
    );
}