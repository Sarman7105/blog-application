import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="container">
                <div className="row align-items-center inner-footer">
                    
                    <div className="col-md-4">
                        <div className="pt-3 m-2">
                            <img src="https://i.ibb.co/5GbpjFJ/footer-logo.webp" alt="footer-logo" border="0"></img>
                        </div>
                        
                    </div>
                    <div className="col-md-8">

                        <div className="m-2">

                            <p> <span className="fw-bolder"> Subscribe </span> now <span className="fw-bolder"> to get </span> daily <span className="fw-bolder"> updates </span></p>
                        
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Enter your email here"  aria-describedby="basic-addon2"/>
                            <span className="input-group-text theme-color text-uppercase" id="basic-addon2">subscribe</span>
                        </div>
                        </div>

                    </div>
                    <p className="text-center"> &copy; All rights reserved to Smart Blog </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;