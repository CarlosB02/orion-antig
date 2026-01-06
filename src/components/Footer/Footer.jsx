import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer" id="contacts">
            <div className="footer-content">
                <div className="footer-column logo-column">
                    <img src={logo} alt="Orion Technik Logo" className="footer-logo-img" />
                </div>

                <div className="footer-column">
                    <h4>ADDRESS</h4>
                    <p>Caminho do Parrau 10</p>
                    <p>Zona Industrial das Corredoras</p>
                    <p>2630-369 Arruda dos Vinhos</p>
                    <p>Portugal</p>
                </div>

                <div className="footer-column">
                    <div className="contact-block">
                        <h4>PHONE</h4>
                        <p>+351 210 987 098</p>
                    </div>
                    <div className="contact-block">
                        <h4>EMAIL ADDRESS</h4>
                        <p>info@oriontechnik.com</p>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
