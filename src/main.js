import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class Main extends Component {
    showSettings (event) {
        event.preventDefault();

    }

    render () {
        return (
            <Container>
                <Row>
                    <Col lg={12}>
                       
                    </Col>
                </Row>
            <Row>
                <Col xs={12} lg={6}>
                    <div className="">

                    </div>
                </Col>
                <Col xs={12} lg={6}>
                    <div className="">

                    </div>
                </Col>
            </Row>
            </Container>
        );
    }
}