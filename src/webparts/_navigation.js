import React, { Component } from 'react';
import Dock from 'react-dock';
import { Link } from 'react-router-dom';
 
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
      size: 0.25,
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
                <div className="navigation__item">
                  <Link to="/" className="navigation__item-text">Home</Link>
                </div>
                <div className="navigation__item">
                  <Link to="/betrokken" className="navigation__item-text">Betrokken</Link>
                </div>
                <div className="navigation__item">
                  <Link to="/ondernemen" className="navigation__item-text">Ondernemen</Link>
                </div>
                <div className="navigation__item">
                  <Link to="/onderzoeken" className="navigation__item-text">Onderzoeken</Link>
                </div>
                <div className="navigation__item">
                  <Link to="/ontwerpen" className="navigation__item-text">Ontwerpen</Link>
                </div>
                <div className="navigation__item">
                  <Link to="/ontwikkelen" className="navigation__item-text">Ontwikkelen</Link>
                </div>
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