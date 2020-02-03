import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import LargeHeader from '../components/largeheader';
import { Footer } from '../webparts/_footer';
import  Slider  from '../components/slider';
import ContentBlock from '../components/contentBlock';
import ContentBlockLarge from '../components/contentBlockLarge';
import NavBar from '../components/navbar';
import SideNav from '../components/sidenav';
import { Navbar } from 'react-bootstrap';


const Home = () => {
    return (
        <div className="home">
            <SideNav />
            <NavBar />
            <LargeHeader 
                title = "Stageverslag - Martijn Bankert"
            />
        </div>
    );
}

export default Home;