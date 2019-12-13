import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import Logo from '../components/parts/logo';

const NavBarSticky = 'navbar--sticky';

export default class NavBar extends Component {
    state = {
        sticky: window.pageYOffset >= 80
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

    showSettings(event) {
        event.preventDefault();
    }

    render() {
        //same functionality as a ternary operator
        const cx = classNames({
            nav: true,
            'nav--sticky': this.state.sticky
        })

        return (
            <div className={cx}>
                <ul className="nav__items">
                    <li className="nav__item">
                        <Link to="/" className="nav__link">Home</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/betrokken" className="nav__link">
                            <span>Betrokken</span>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/ondernemen" className="nav__link">
                            <span>Ondernemen</span>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/onderzoeken" className="nav__link">
                            <span>Onderzoeken</span>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/ontwerpen" className="nav__link">
                            <span>Ontwerpen</span>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/ontwikkelen" className="nav__link">
                            <span>Ontwikkelen</span>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}