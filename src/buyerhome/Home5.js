import React from 'react';
import Hero5 from './Hero5';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import WorkingProcess from '../components/Workprocess';

const Home = () => {
    return (
        <div>
            <Hero5 />
            <Intro />
            <Services />
            <WorkingProcess />
            <Portfolio />
            <Clients />
            <Cta />
            <Footer />
        </div>
    );
}

export default Home;


