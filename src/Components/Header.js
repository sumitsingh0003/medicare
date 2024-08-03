import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { MedicareLogo } from '../assets/svg/index';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let navbarClasses = ['navbar'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }
  return (
    <>
      {/*============Header Start============*/}
      
      <header className={`${navbarClasses.join(' ')} header_area`}> 
          <div className="container">
            <nav className="navbar navbar-expand-lg">
              <Link className="navbar-brand" to="/">
                <MedicareLogo />
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse align-to-right" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/services" className="nav-link">Services</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/news" className="nav-link">News</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link hdrBtn">Contact</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div> 
      </header>
      {/*============Header End============*/}
    </>
  )
}

export default Header
