import React, { Component } from 'react';
import Dock from 'react-dock';
import Button from 'react-bootstrap/Button';

import '../styles/webparts/navigation.scss';


export default class Navigation extends Component{

  constructor(props) {
    super(props);
    this.state = {
      positionIdx: 0,
      dimModeIdx: 0,
      isVisible: false,
      fluid: true,
      customAnimation: false,
      slow: false,
      size: 0.25
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState(state => ({
      isVisible: !state.isVisible
    }));
  }
  
  render() {
    return (
      <div className="navigation">
        <Dock position='left' isVisible={this.state.isVisible}>
          <a className="button button__close" onClick={() => this.setState({ isVisible: !this.state.isVisible })}></a>
          <div className="navigation__content">
            <div className="navigation__links">
              <a href="#" className="navigation__item">
                <span className="navigation__item-text">Betrokken</span>
              </a>
              <a href="#" className="navigation__item">
                <span className="navigation__item-text">Ondernemen</span>
              </a>
              <a href="#" className="navigation__item">
                <span className="navigation__item-text">Onderzoeken</span>
              </a>
              <a href="#" className="navigation__item">
                <span className="navigation__item-text">Ontwerpen</span>
              </a>
              <a href="#" className="navigation__item">
                <span className="navigation__item-text">Ontwikkelen</span>
              </a>
            </div>
          </div>
        </Dock>
        <a className="button__hamburger " onClick={this.handleClick}>
          <span className="button__text"></span>
        </a>
      </div>
    );
  }
}