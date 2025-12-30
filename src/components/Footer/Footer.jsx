import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer" id="contacts">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logo} alt="Orion Technik Logo" className="footer-logo-img" />

                </div>

                <div className="footer-column">
                    <h4>Address</h4>
                    <p>Caminho do Parrau 10</p>
                    <p>Zona Industrial das Corredouras</p>
                    <p>2630-369 Arruda dos Vinhos</p>
                    <p>Portugal</p>
                </div>

                <div className="footer-column">
                    <h4>Phone</h4>
                    <p>+351 219 987 090</p>
                </div>

                <div className="footer-column">
                    <h4>Email Address</h4>
                    <p>info@oriontechnik.com</p>
                </div>

                <div className="footer-column">
                    <h4>Links</h4>
                    <p><Link to="/design2" style={{ color: 'inherit', textDecoration: 'none' }}>Design 2</Link></p>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
