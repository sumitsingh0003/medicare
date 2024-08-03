import React from 'react'
import { images } from '../assets/images/index';


const MainBanner = () => {
  return (
    <>
      <section className='main_Banner' style={{backgroundImage:`url(${images.bannerBg})`}}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='bannerContent'>
                <div>
                  <h5>Welcome to MediCare+ Clinic</h5>
                  <h1>Best Specialists</h1>
                  <p>We are on the leading edge of cancer care. Providing the full continuum of cancer treatments and supportive care services in a single convenient location.</p>
                  <div className='bannerButn'>
                    <button className='blueBtn'>Make an Appointment</button>
                    <button className='blueBtn whiteBtn'>Departments</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='bannerImg'>
                <img src={images.main_banner} alt='Main Banner'/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainBanner
