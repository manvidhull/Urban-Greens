import React from 'react';
import ServiceCard from './ServiceCard'; 
import img from '../images/service1.svg';
import img2 from '../images/service2.svg';
import img3 from '../images/service3.svg';
import img4 from '../images/service4.svg';

const Services = () => {
    return (
        <div id="services" className="bg-gray-100 py-12">
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-green-900 uppercase font-bold">Services</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-green-900'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-green-900">We are deeply committed to the growth and success of our clients.</h2>
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        <ServiceCard
                            img={img}
                            title="Vacant Space Listing"
                            description="Easily rent rooftop and vacant spaces for farming using our user-friendly platform, connecting space owners with farmers hassle-free."
                        />
                        <ServiceCard
                            img={img2}
                            title="Immutable Data Vaults"
                            description="Experience secure transactions and data storage with blockchain's immutable ledger, ensuring transparency and trust in every interaction."
                        />
                        <ServiceCard
                            img={img3}
                            title="Setup Guidance"
                            description="Get personalized advice and assistance to start and manage your rooftop farm efficiently with special focus on hydroponics and aeroponics."
                        />
                        <ServiceCard
                            img={img4}
                            title="Rewards Initiative"
                            description="Earn rewards for contributing to Urban Greens by leasing rooftops, sharing knowledge, or participating in community activities, fostering engagement and empowerment."
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;
