import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    showSettings (event) {
        event.preventDefault();
    }

    render () {
        return (
          <div className="nav">
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