import React from 'react';

const WorkingProcess = () => {
    return (
        <section className="sec-padding">
            <div className="container workp mt-[-80px]">
                <div className="sec-title text-center py-2">
                    <h2 className='md:text-[3.5rem] text-3xl font-bold text-white my-5 py-4'>Our <span style={{ color: 'white' }}>Mission</span></h2>
                    <p className='text-[18px] tracking-wider text-white font-light tracking-tight text-black-500 mb-10'>Transparency and expertise, guiding you through our meticulous working process.</p>
                    <span className="decor"><span className="inner"></span></span>
                </div>
                <div className="row working-process justify-center flex p-5">
                    <div className="col-md-3 col-sm-3 neomorphic-box hover:scale-[1.15] transition duration-1000 ease-in-out">
                        <div className="process-box">
                            <div className="icon">
                                <img src="1.png" className='w-[80px]' alt="Environmental Sustainability" />
                            </div>
                            <h4 className="title text-[13px] font-normal text-center">Environmental Sustainability</h4>
                            <p className="text-center">Transforming urban spaces into eco-friendly agriculture hubs with aeroponics and hydroponics, conserving water usage.</p>
                        </div>
                    </div>
                    {/* Repeat the same structure for other process boxes */}
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </section>
    );
}

export default WorkingProcess;

