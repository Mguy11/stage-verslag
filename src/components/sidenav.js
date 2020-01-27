import  React, { Component } from 'react';
import { bubble as Menu, bubble } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';

export default class SideNav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false,
      animation: bubble
    }
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }

  closeMenu () {
    this.setState({menuOpen: false})
  }

  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }

  render () {
    return (
      <div className="sidenav">
        <Menu 
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
        >
          <NavLink
            onClick={() => this.closeMenu()}
            activeClassName="nav__link--active"
            className="nav__link"
            to="/"> 
            <span>Home</span>
          </NavLink>
          <NavLink
            onClick={() => this.closeMenu()}
            activeClassName="nav__link--active"
            className="nav__link"
            to="/introductie"> 
            <span>Introductie</span>
          </NavLink>
          <NavLink
            activeClassName="nav__link--active"
            className="nav__link"
            to="/betrokken">
            <span>Betrokken</span>
          </NavLink>
          <NavLink 
            activeClassName="nav__link--active"
            className="nav__link"
            to="/ondernemen">
            <span>Ondernemen</span>
          </NavLink>
          <NavLink 
            activeClassName="nav__link--active"
            className="nav__link"
            to="/onderzoeken">
            <span>Onderzoeken</span>
          </NavLink>
          <NavLink 
            activeClassName="nav__link--active"
            className="nav__link"
            to="/ontwerpen">
            <span>Ontwerpen</span>
          </NavLink>
          <NavLink
            activeClassName="nav__link--active"
            className="nav__link"
            to="/ontwikkelen">
            <span>Ontwikkelen</span>
          </NavLink>
        </Menu>
      </div>
    )
  }
}