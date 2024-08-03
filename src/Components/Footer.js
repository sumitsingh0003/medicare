import React from 'react'
import { Link } from 'react-router-dom'
import { MedicareLogo } from '../assets/svg/index';

const Footer = () => {
  return (
    <>
      <footer>
        <div className='footerMenues'>
        <div className='container'>
        <div className='footerLogoSec'>
          <div className='footerLogo'>
            <Link to="/"><MedicareLogo /></Link>
          </div>
          <div className='footerMenu'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/news">News</Link></li>
          </ul>
          </div>
        </div>
        </div>
        </div>
        <div className='copyRight'>
        <div className='container'>
          <div className='cpyRght'>
            <ul>
              <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                <li> <Link to="/"><i className="fab fa-google"></i></Link></li>
                <li> <Link to="/"><i className="fab fa-twitter"></i></Link></li>
            </ul>
            <p>©2023 - 011BQ </p>
          </div>
        </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
