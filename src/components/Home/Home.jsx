import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Section from '../Section/Section';
import News from '../News/News';
import Footer from '../Footer/Footer';
import Certificates from '../Certificates/Certificates';
import heroBg from '../../assets/hero-bg-final.png';
import capabilitiesImg from '../../assets/capabilities.png';
import qualityImg from '../../assets/quality.png';
import camoImg from '../../assets/camo-services.png';
import maintenanceImg from '../../assets/maintenance-supervision.png';
import engineeringImg from '../../assets/engineering-support.png';
import otherImg from '../../assets/other-services.png';

// Placeholder data for sections
const capabilitiesData = {
    title: "Capabilities",
    text: "Based in Lisbon, Portugal, Orion Technik is an EASA & EMAR 145 (PT.145.037) approved repair station specialized in Avionics, Instruments, Wheels and Brakes, Lighting, Antennas, Electronics, Galley, Electro-Mechanical, Hydraulic, Mechanical and Radar components for defense and commercial platforms.",
    image: capabilitiesImg,
    reversed: false
};

const qualityData = {
    title: "Quality",
    text: "Orion Technik is registered as a Portuguese Ministry of Defense and NATO supplier (CAGE Code: P3457) and manages the operations according to the Aerospace Industry Quality Management System AS/EN 9100, ISO 9001, NATO AQAP 2110, the European Aerospace Authority (EASA) PART-145 and the European Military Authority (EMAR) EMAR-145.",
    image: qualityImg,
    reversed: true
};

const camoData = {
    title: "CAMO Services under TM-CAD approval MT.CAMO.0107 and BDA CAMO 257",
    text: "We provide comprehensive CAMO Services under TM-CAD approval MT.CAMO.0107 and BDA CAMO 257, including Aircraft Management, Airworthiness Management, Development and approval of maintenance programs, Technical Support and Troubleshooting, Management of aircraft maintenance documentation, Record keeping of all maintenance activities, Reliability Monitoring, and Support to other CAMOs.",
    image: camoImg,
    reversed: true
};

const maintenanceData = {
    title: "Maintenance Supervision and Technical representation",
    text: "Our services include Pre-Purchase Inspections, Aircraft Phase In & Phase out supervision, Mid-life surveys, and Base Maintenance Inspections.",
    image: maintenanceImg,
    reversed: false
};

const engineeringData = {
    title: "Engineering Support",
    text: "We offer evaluation of existing modifications & repairs for their acceptance during any aircraft import/export, Development and approval of individual Minor Changes in house, and Support in the development of any STCs (Supplemental Type Certificate).",
    image: engineeringImg,
    reversed: true
};

const otherData = {
    title: "Other services",
    text: "Additional services include Aircraft valuation & aeronautical component appraisals, Aircraft physical inspections, Continuing airworthiness audits, Engine Shop visit management, Aircraft documental review, and General Aviation Consulting for any special projects.",
    image: otherImg,
    reversed: false
};

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Hero />
            <Section {...capabilitiesData} />
            <News />
            <Section {...camoData}>
                <Certificates />
            </Section>
            <Section {...maintenanceData} />
            <Section {...engineeringData} />
            <Section {...otherData} />
            <Section {...qualityData} />
            <Footer />
        </div>
    );
}

export default Home;
