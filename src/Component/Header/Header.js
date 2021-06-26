import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';
import BrandLogo from '../BrandLogo/BrandLogo';
import Slider from './Slider'
import './Slider.css'

const Header = () => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const url = `https://powerful-tor-41926.herokuapp.com/blogs`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBlogs(data);
            });
    },[])

    return (
        <div className="header-container">
            <BrandLogo/>
            <Slider />
            <Blogs blogs={ blogs}/>
        </div>
    );
};

export default Header;