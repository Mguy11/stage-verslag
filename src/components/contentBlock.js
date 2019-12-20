import React, { Component } from 'react';
import { Col } from 'react-flexbox-grid';

export default class ContentBlock extends Component {
    showSettings (event) {
        event.preventDefault();
    }

    render () {
        return (
            <Col xs={12} lg={6}>
                <div className={this.props.className}>
                    <h2 className={"contentblock__title"}>{this.props.title}</h2>
                        <div className="contentblock__content">
                            {this.props.body}
                        </div>
                </div>
            </Col>
        );
    }
}