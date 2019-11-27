import React, { Component } from 'react';
import Particles from 'react-particles-js';

const particleOpt = {
    particles: {
        number: {
            value: 200,
            density: {
                enable: true,
                value_area: 1200
            }
        }
    }
}

export default class LargeHeader extends Component {
    showSettings (event) {
        event.preventDefault();
    }

    render () {
        return (
          <div className="header header--large">
                <span className="header__title header__title--large">{this.props.title}</span>
                <figure className="header__image-wrapper header__image-wrapper--large">
                    <Particles 
                        params = {particleOpt}
                    />
                </figure>
          </div>
        );
    }
}