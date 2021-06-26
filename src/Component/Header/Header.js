import React from 'react';
import BrandLogo from '../BrandLogo/BrandLogo';
import Slider from './Slider'
import './Slider.css'

const Header = () => {
    return (
        <div className="header-container">
            <BrandLogo/>
            <Slider/>
        </div>
    );
};

export default Header;