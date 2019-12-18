import React, { Component } from 'react';
import { Col } from 'react-flexbox-grid';

export default class TestimonialBlock extends Component {
    showSettings (event) {
        event.preventDefault();
    }

    render () {
        return (
            <Col xs={12}>
                <div className="testimonialblock">
                    <div className="testimonialblock__content">
                        <span className="testimonialblock__subtitle">{this.props.subtitle1}</span>
                        <p className="testimonialblock__body">{this.props.body1}</p>
                    </div>
                    <div className="testimonialblock__content">       
                        <span className="testimonialblock__subtitle">{this.props.subtitle2}</span>
                        <p className="testimonialblock__body">{this.props.body2}</p>
                    </div>
                    <div className="testimonialblock__content">       
                        <span className="testimonialblock__subtitle">{this.props.subtitle3}</span>
                        <p className="testimonialblock__body">{this.props.body3}</p>
                    </div>
                </div>
            </Col>
        );
    }
}