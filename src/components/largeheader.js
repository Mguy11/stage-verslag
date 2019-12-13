import React, { Component } from 'react';

export default class LargeHeader extends Component {
    showSettings (event) {
        event.preventDefault();
    }

    render () {
        return (
          <div className="header header--large">
                <span className="header__title header__title--large">{this.props.title}</span>
                <figure className="header__image-wrapper header__image-wrapper--large">
                </figure>
          </div>
        );
    }
}