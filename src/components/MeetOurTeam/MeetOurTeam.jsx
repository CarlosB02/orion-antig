import React from 'react';
import { User } from 'lucide-react';
import './MeetOurTeam.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import andreImg from '../../assets/andre-baptista-new.jpg';
import marioImg from '../../assets/mario-ramos-new.jpg';
import franciscoImg from '../../assets/francisco-oom-peres.jpg';
import joseImg from '../../assets/jose-macieira.jpg';
import davidImg from '../../assets/david-simao.jpg';

const partners = [
    {
        name: "Francisco Oom Peres",
        role: "Partner | Accountable Manager",
        email: "oomperes@orionaviation.eu",
        image: franciscoImg,
        objectPosition: '85% top'
    },
    {
        name: "David Simão",
        role: "Partner | Head of Planning",
        email: "david@orionaviation.eu",
        image: davidImg
    },
    {
        name: "José Macieira",
        role: "Partner | Head of Engineering",
        email: "jose@orionaviation.eu",
        image: joseImg
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

const TeamCard = ({ member, delay }) => (
    <div className="team-card" style={{ animationDelay: `${delay}s` }}>
        <div className="member-photo">
            {member.image ? (
                <img
                    src={member.image}
                    alt={member.name}
                    style={member.objectPosition ? { objectPosition: member.objectPosition } : {}}
                />
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
                                <TeamCard key={index} member={member} delay={index * 0.2} />
                            ))}
                        </div>
                    </section>

                    <section className="team-section">
                        <h2>Key Personnel</h2>
                        <div className="team-grid">
                            {keyPersonnel.map((member, index) => (
                                <TeamCard key={index} member={member} delay={(partners.length + index) * 0.2} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            <section id="contact" className="contact-section-full">
                <div className="contact-container">
                    <h2>Contact Us</h2>
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-row">
                            <div className="form-group">
                                <input type="text" placeholder="Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Email" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Subject" required />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default MeetOurTeam;
