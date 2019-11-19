import React, { Component } from 'react';

export default class LargeHeader extends Component {
    showSettings (event) {
        event.preventDefault();
    }

    render () {
        return (
          <div className="largeheader">
              
                <span className="largeheader__title">Welkom!</span>
              
              <figure className="largeheader__image-wrapper">
                  <img className="largeheader__image"/>
              </figure>
          </div>
    
        );
    }
}