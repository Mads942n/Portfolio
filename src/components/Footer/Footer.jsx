import React from 'react'
import './Footer.css'
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MadsBruhn</a>

      <div className="footer__socials">
        <a href="https://www.facebook.com/mads.bruhn.5"><FaFacebookF/></a>
        <a href="https://www.instagram.com/mads_bruhnere/"><FaInstagram/></a>
        <a href="https://twitter.com/dermazz"><FaTwitter/></a>
      </div>



      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>


      

      <div className="footer_copyright">
        <small>&copy; Mads E. Bruhn. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer