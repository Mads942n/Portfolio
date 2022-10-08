import React from 'react'
import './Nav.css'
import {BiHomeAlt} from 'react-icons/bi'
import {FaUserAstronaut} from 'react-icons/fa'
import {MdAutoGraph} from 'react-icons/md'
import {GiMagicPortal} from 'react-icons/gi'
import {TiBusinessCard} from 'react-icons/ti'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeAlt/></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><GiMagicPortal/></a>
      <a href='#about'onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAstronaut/></a>
      <a href='#experience'onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdAutoGraph/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TiBusinessCard/></a>
    </nav>
  )
}

export default Nav