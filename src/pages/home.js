import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import LargeHeader from '../components/largeheader';


export default class Home extends Component {
    showSettings (event) {
        event.preventDefault();
    }

    render () {
        return (
            <Container>
                <Row>
                  <LargeHeader />
                </Row>
                <Row style={{padding: '4rem'}}>
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
            </Container>
        );
    }
}