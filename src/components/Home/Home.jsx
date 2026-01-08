import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Section from '../Section/Section';
import News from '../News/News';
import Footer from '../Footer/Footer';
import Certificates from '../Certificates/Certificates';
import heroBg from '../../assets/hero-bg-final.png';

import qualityImg from '../../assets/quality.png';
import camoImg from '../../assets/camo-services.png';
import maintenanceImg from '../../assets/maintenance-supervision.png';
import assetManagementImg from '../../assets/asset-management.png';
import otherImg from '../../assets/other-services.png';

// Placeholder data for sections


const qualityData = {
    title: "Compliance Monitoring Management",
    text: "Orion Aviation provides independent Compliance Monitoring Management to verify regulatory adherence, identify risks, and drive timely corrective actions across your continuing airworthiness and safety management systems.",
    image: qualityImg,
    reversed: false
};

const camoData = {
    title: "EASA and Bermudan certified CAMO services",
    text: "We provide comprehensive EASA and Bermudan CAA approved CAMO services under TM-CAD approval MT.CAMO.0107 and BDA CAMO 257, including Aircraft Management, Airworthiness Management, Development and approval of maintenance programs, Technical Support and Troubleshooting, Management of aircraft maintenance documentation, Record keeping of all maintenance activities, Reliability Monitoring, and Support to other CAMOs.",
    image: camoImg,
    reversed: true
};

const maintenanceData = {
    title: "Maintenance Supervision and Technical representation",
    text: "Our services include technically representing our clients, remotely or onsite, to assess, supervise and control 3rd party maintenance providers, ranging from line maintenance providers, to base maintenance MRO facilities, and including engine/propeller/landing gear/component repair shops. This representation can also include cost analysis, and, where necessary, value discussions with the provider.",
    image: maintenanceImg,
    reversed: false
};

const assetManagementData = {
    title: "Asset Management",
    text: "Our services include Pre-Purchase / Mid-Lease / End-of-Lease Inspections, with or without an associated valuation, delivery or redelivery coordination and/or support, repossession planning and execution, to name a few.",
    image: assetManagementImg,
    reversed: true
};

const otherData = {
    title: "Other services",
    text: "Additionally to the services already noted previously, we can also provide continuing airworthiness audits, engine/landing gear / propeller / other components Shop visit management, aircraft documental review, and technical aviation Consulting for any special project.",
    image: otherImg,
    reversed: true
};

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Hero />

            <News />
            <Section {...camoData}>
                <Certificates />
            </Section>
            <Section {...maintenanceData} />
            <Section {...assetManagementData} />
            <Section {...qualityData} />
            <Section {...otherData} />
            <Footer />
        </div>
    );
}

export default Home;
