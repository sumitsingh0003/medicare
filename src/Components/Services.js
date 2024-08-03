import React from 'react'
import { Teth, Pediatric, Brain, Pulmonary  } from '../assets/svg/index';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      <section className='our_services'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='srvcHdng'>
                        <h2>Our Services</h2>
                        <p>We provide the most full medical services, so every person could heave the oppurtunity to receive qualitative medical help.</p>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                    <div className='srvcCol'>
                        <Teth />
                        <div className='srvcTitle'>
                            <h5>Dental Care</h5>
                            <Link to='#.' className='lrnMoreBtn'>Learn More</Link>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                    <div className='srvcCol'>
                        <Pulmonary />
                        <div className='srvcTitle'>
                            <h5>Pulmonary</h5>
                            <Link to='#.' className='lrnMoreBtn'>Learn More</Link>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                    <div className='srvcCol'>
                        <Brain />
                        <div className='srvcTitle'>
                            <h5>Neurological</h5>
                            <Link to='#.' className='lrnMoreBtn'>Learn More</Link>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                    <div className='srvcCol'>
                        <Pediatric />
                        <div className='srvcTitle'>
                            <h5>Pediatric</h5>
                            <Link to='#.' className='lrnMoreBtn'>Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Services
