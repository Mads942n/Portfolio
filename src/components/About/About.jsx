import React from 'react'
import './About.css'
import Me from '../../assets/ME.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'

const about = () => {
  return (
    <section id='about'>
      <h5>This is</h5>
      <h2>Me!</h2>
      
      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={Me} alt="Me" />
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <GiGraduateCap className='about__icon'/>
              <h5>Experience</h5>
              <small>Student Frontend Dev.</small>
            </article>

            <article className='about__card'>
              <HiOutlineLightBulb className='about__icon'/>
              <h5>Thinking</h5>
              <small>A new way to approach problems</small>
            </article>

            <article className='about__card'>
              <AiOutlineFundProjectionScreen className='about__icon'/>
              <h5>Projects</h5>
              <small>10+</small>
            </article>
          </div>

          <p>Yo</p>

          <a href='#contact' className='btn btn-primary'>Talk to me!</a>
        </div>
      </div>
    </section>
  )
}

export default about