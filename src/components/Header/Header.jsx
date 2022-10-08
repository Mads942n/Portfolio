import React from 'react'
import './Header.css'
import CTA from './CTA'
import Me from '../../assets/Mig-removebg-preview.png'
import HeaderLinks from './HeaderLinks'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hey! I'm</h5>
        <h1>Mads E. Bruhn</h1>
        <h5 className='text-light'>Frontend Dev.</h5>
        <CTA/>
        <HeaderLinks/>

        <div className='picture'>
          <img src={Me} alt="Me" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header