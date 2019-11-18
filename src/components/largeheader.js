import React, { Component } from 'react';

export default class LargeHeader extends Component {
    showSettings (event) {
        event.preventDefault();
    }

    render () {
        return (
          <div className="largeheader">
              <div className="largeheader__title-box">
                <span className="largeheader__title">Welkom!</span>
              </div>
              <figure className="largeheader__image-wrapper">
                  <img className="largeheader__image"/>
              </figure>
          </div>
    
        );
    }
}