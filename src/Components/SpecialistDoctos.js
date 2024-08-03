import React from 'react'
import { images } from '../assets/images'

const SpecialistDoctos = () => {
    return (
        <>
            <section className='spclDoctor' style={{ backgroundImage:`url(${images.doctorBg})`}}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='spclDoctorHdng'>
                                <h2>We Have The Best Specialist</h2>
                                <p>We have a wide experience in experience design and strategy,<br /> with locally-rooted knowledge.</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-12'>
                            <div className='doctors'>
                                <div className='doctorImg'>
                                    <img src={images.SingleDoctor} alt='Doctors' />
                                </div>
                                <div className='doctorCont'>
                                    <h5>Dr. Awaatif Al</h5>
                                    <span>Dental Care</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-12'>
                            <div className='doctors'>
                                <div className='doctorImg'>
                                    <img src={images.SingleDoctor} alt='Doctors' />
                                </div>
                                <div className='doctorCont'>
                                    <h5>Dr. Filipa Gaspar</h5>
                                    <span>Cardiology</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-12'>
                            <div className='doctors'>
                                <div className='doctorImg'>
                                    <img src={images.SingleDoctor} alt='Doctors' />
                                </div>
                                <div className='doctorCont'>
                                    <h5>Dr. Sukjmeet Gorae</h5>
                                    <span>Neurological</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-12'>
                            <div className='doctors'>
                                <div className='doctorImg'>
                                    <img src={images.SingleDoctor} alt='Doctors' />
                                </div>
                                <div className='doctorCont'>
                                    <h5>Dr. Siri Jakobosson</h5>
                                    <span>Pediatric</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SpecialistDoctos
