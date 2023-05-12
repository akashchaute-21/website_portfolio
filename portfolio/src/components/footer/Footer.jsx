import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

function footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>Akash Chaute</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testmonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>
      
      <div className="footer__socials">
        <a href="https://www.facebook.com/akash.c.39982/"><FaFacebookF/></a>
        <a href="https://www.instagram.com/akashchute6023/"><FiInstagram/></a>
        <a href="https://twitter.com/Akash_C2109"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Akash Chaute. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default footer
