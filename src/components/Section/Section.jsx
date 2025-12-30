import React, { useEffect, useRef, useState } from 'react';
import './Section.css';
import { Plus } from 'lucide-react';

const Section = ({ title, text, image, reversed, children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.2,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            className={`section ${reversed ? 'reversed' : ''} ${isVisible ? 'visible' : ''}`}
            ref={sectionRef}
            id={title.toLowerCase()}
        >
            <div className="section-content">
                <h2 className="section-title">{title}</h2>
                <p className="section-text">{text}</p>
                <div className="section-actions">
                    {children}
                    <button className="learn-more-btn">
                        Learn more <Plus size={16} />
                    </button>
                </div>
            </div>
            <div className="section-image">
                <img src={image} alt={title} />
            </div>
        </section>
    );
};

export default Section;
