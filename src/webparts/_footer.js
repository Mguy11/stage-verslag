import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer__banner">
                    <Grid>
                        <Row>
                            <Col>
                                <div className="footer__name">Martijn Bankert</div>
                                <div className="footer__date">&copy;&nbsp;All rights Reserved </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}