import React from 'react'
import { images } from '../assets/images/index';

const Innovative = () => {
    return (
        <>
            <section className='clncInnovative'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='clncInnoc_cont'>
                                <div>
                                    <h2>Clinic With Innovative</h2>
                                    <p>We provide the most full medical services, so every person could heave the oppurtunity to receive qualitative medical help.</p>
                                    <div className='bannerButn'>
                                        <button className='blueBtn'>Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='bannerImg'>
                                <img src={images.Innovative} alt='Main Banner' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Innovative
