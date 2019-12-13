import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to="/">
            <div className="logo">
                <div className="logo__background"></div>
                <span className="logo__text">Martijn Bankert</span>
            </div>
        </Link>
    );
}

export default Logo;