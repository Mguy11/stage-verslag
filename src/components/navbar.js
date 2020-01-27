import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import Logo from '../components/parts/logo';
import { format } from 'path';


const NavBarSticky = 'navbar--sticky';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: false};

        this.handleClick = this.handleClick.bind(this);
    }

    state = {
        sticky: window.pageYOffset >= 80,
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleWindowScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleWindowScroll);
    }

    handleWindowScroll = (event) => {
        const { sticky } = this.state;
        const shouldBeSticky = window.pageYOffset >= 10;

        if (sticky && !shouldBeSticky) {
            this.setState({
                sticky: false
            })
        }

        if (!sticky && shouldBeSticky) {
            this.setState({
                sticky: true,
            })
        }
    }

    showSettings = (event) => {
        event.preventDefault();
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));

        if (!this.state.isToggleOn) {
           console.log("piep");
        }
    }
    

    render() {
        //same functionality as a ternary operator
        const cx = classNames({
            nav: true,
            'nav--sticky': this.state.sticky
        })

        return (
            <div className={cx}>
                <Col lg={2}>
                    <Logo />
                </Col>
                <Col lg={8}>
                    <ul className="nav__items">
                        <li className="nav__item">
                            <NavLink 
                                activeClassName="nav__link--active"
                                className="nav__link"
                                to="/introductie"> 
                                <span>Introductie</span>
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink
                                activeClassName="nav__link--active"
                                className="nav__link"
                                to="/betrokken">
                                <span>Betrokken</span>
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink 
                                activeClassName="nav__link--active"
                                className="nav__link"
                                to="/ondernemen">
                                <span>Ondernemen</span>
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink 
                                activeClassName="nav__link--active"
                                className="nav__link"
                                to="/onderzoeken">
                                <span>Onderzoeken</span>
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink 
                                activeClassName="nav__link--active"
                                className="nav__link"
                                to="/ontwerpen">
                                <span>Ontwerpen</span>
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink
                                activeClassName="nav__link--active"
                                className="nav__link"
                                to="/ontwikkelen">
                                <span>Ontwikkelen</span>
                            </NavLink>
                        </li>
                    </ul>
                </Col>
                <Col lg={2}>
                </Col>
            </div>
        );
    }
}