import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const HeaderLinks = () => {
  return (
    <div className='header__links'>
        <a href='https://linkedin.com/in/MadsEBruhn' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/Mads942n' target='_blank'><BsGithub/></a>
    </div>
  )
}

export default HeaderLinks