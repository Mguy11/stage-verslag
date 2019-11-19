import React, { Component } from 'react';

export default class SmallHeader extends Component {
    showSettings (event) {
        event.preventDefault();
    }

    render () {
        return (
          <div className="header">
                <span className="header__title header__title--small">Welkom!</span>
                <figure className="header__image-wrapper header__image-wrapper--small">
                    <img className="header__image"/>
                </figure>
          </div>
        );
    }
}