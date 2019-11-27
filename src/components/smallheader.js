import React, { Component } from 'react';

export default class SmallHeader extends Component {
    showSettings (event) {
        event.preventDefault();
    }

    render () {
        return (
          <header className="header header--small">
                <span className="header__title header__title--small">{this.props.title}</span>
                <figure className="header__image-wrapper header__image-wrapper--small">
                    <img className="header__image"/>
                </figure>
          </header>
        );
    }
}