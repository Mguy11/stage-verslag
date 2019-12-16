import React, { Component } from 'react';
import { Col } from 'react-flexbox-grid';

export default class TestimonialBlock extends Component {
    showSettings (event) {
        event.preventDefault();
    }

    render () {
        return (
            <Col xs={12}>
                <div className={this.props.className}>
                    <div className="">
                        <span className="">{this.props.subtitle1}</span>
                        <p className="">{this.props.body1}</p>
                    </div>
                    <div className="">       
                        <span className="">{this.props.subtitle2}</span>
                        <p className="">{this.props.body2}</p>
                    </div>
                </div>
            </Col>
        );
    }
}