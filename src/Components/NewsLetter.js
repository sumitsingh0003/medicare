import React from 'react'
import { images } from '../assets/images'

const NewsLetter = () => {
  return (
    <>
      <section className='newsLetter'  style={{ backgroundImage: `url(${images.newsLetter})` }}>
        <div className='container'>
            <div className='sbscbSec'>
                <h2>Subscribe to Newsletter</h2>
                <p>We have a wide experience in experience design and strategy,</p>

                <div className='inputSec'>
                    <input type='text' placeholder='Enter your email address' />
                    <button className='blueBtn'>Send Now</button>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default NewsLetter
