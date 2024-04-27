import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import SecondHero from '../components/SecondHero';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import WorkingProcess from '../components/Workprocess';

const Home2 = () => {
    return (
        <>
            <SecondHero /> {/* Updated component name */}
            <Intro />
            <WorkingProcess />
            <Services />
            <Footer />
        </>
    );
}

export default Home2;


