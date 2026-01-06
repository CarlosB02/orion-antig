import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/orion-logo-new.png';

const Footer = () => {
    return (
        <footer className="footer" id="contacts">
            <div className="footer-content">
                <div className="footer-column logo-column">
                    <img src={logo} alt="Orion Technik Logo" className="footer-logo-img" />
                </div>

                <div className="footer-column">
                    <h4>ADDRESS</h4>
                    <p>Northlink Business Centre, Level 2</p>
                    <p>Burmarrad Road</p>
                    <p>Naxxar, Malta</p>
                </div>

                <div className="footer-column">
                    <div className="contact-block">
                        <h4>PHONE</h4>
                        <p>+351 210 987 098</p>
                    </div>
                    <div className="contact-block">
                        <h4>EMAIL ADDRESS</h4>
                        <p>camo@orionaviation.eu</p>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
