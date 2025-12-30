import React from 'react';
import { User } from 'lucide-react';
import './MeetOurTeam.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import andreImg from '../../assets/andre-baptista.jpg';
import marioImg from '../../assets/mario-ramos.jpg';

const partners = [
    {
        name: "Francisco Oom Peres",
        role: "Partner | Accountable Manager",
        email: "oomperes@orionaviation.eu",
        image: null
    },
    {
        name: "David Simão",
        role: "Partner | Head of Planning",
        email: "david@orionaviation.eu",
        image: null
    },
    {
        name: "José Macieira",
        role: "Partner | Head of Engineering",
        email: "jose@orionaviation.eu",
        image: null
    }
];

const keyPersonnel = [
    {
        name: "André Baptista",
        role: "NPCA - Nominated Person Continuing Airworthiness",
        email: "andre@orionaviation.eu",
        image: andreImg
    },
    {
        name: "Mário Ramos",
        role: "SCMM - Safety & Compliance Manager",
        email: "mario@orionaviation.eu",
        image: marioImg
    }
];

const TeamCard = ({ member }) => (
    <div className="team-card">
        <div className="member-photo">
            {member.image ? (
                <img src={member.image} alt={member.name} />
            ) : (
                <User className="placeholder-icon" />
            )}
        </div>
        <div className="member-info">
            <h3>{member.name}</h3>
            <div className="member-role">{member.role}</div>
            <a href={`mailto:${member.email}`} className="member-email">
                {member.email}
            </a>
        </div>
    </div>
);

const MeetOurTeam = () => {
    return (
        <>
            <Header />
            <div className="meet-team">
                <div className="meet-team-container">
                    <h1>Meet Our Team</h1>

                    <section className="team-section">
                        <h2>Leadership Team</h2>
                        <div className="team-grid">
                            {partners.map((member, index) => (
                                <TeamCard key={index} member={member} />
                            ))}
                        </div>
                    </section>

                    <section className="team-section">
                        <h2>Key Personnel</h2>
                        <div className="team-grid">
                            {keyPersonnel.map((member, index) => (
                                <TeamCard key={index} member={member} />
                            ))}
                        </div>
                    </section>

                    <section id="contact" className="contact-section-wrapper">
                        <h2>Contact Us</h2>
                        <div className="contact-content-split">
                            <div className="contact-info-column">
                                <h3>Get in Touch</h3>
                                <p>
                                    <strong>Email:</strong> <a href="mailto:camo@orionaviation.eu">camo@orionaviation.eu</a>
                                </p>
                                <p>
                                    <strong>Phone:</strong> <a href="tel:+351932751200">+351 932 751 200</a>
                                </p>
                            </div>

                            <div className="contact-form-column">
                                <h3>Send us a Message</h3>
                                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                                    <div className="form-group">
                                        <input type="text" placeholder="Name" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" placeholder="Email" required />
                                    </div>
                                    <div className="form-group">
                                        <textarea placeholder="Message" rows="5" required></textarea>
                                    </div>
                                    <button type="submit" className="submit-btn">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MeetOurTeam;
