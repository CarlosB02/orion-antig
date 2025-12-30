import React from 'react';
import './Hero.css';
import heroBg from '../../assets/hero-bg-v2.png';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background">
                <img src={heroBg} alt="Hangar with aircraft" />
            </div>
            <div className="hero-content">
                <h1 className="hero-title">
                    Your Security?<br />
                    Our Priority!
                </h1>
            </div>
        </section>
    );
};

export default Hero;
