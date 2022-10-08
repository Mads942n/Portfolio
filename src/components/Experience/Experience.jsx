import React from 'react'
import './Experience.css'
import {TbChecks} from 'react-icons/tb'

const experience = () => {
  return (
    <section id='experience'>
      <h5>The skills i possess</h5>
      <h2>My experience</h2>

      <div className="container experience__container">
        <div className="experience__design">
          <h3>Design and other tools</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <TbChecks className='experience__details-icon'/>
              <div>
                <h4>Figma</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <TbChecks className='experience__details-icon'/>
              <div>
                <h4>Adobe Programs</h4>
                <small className='text-light'>Beginner - Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <TbChecks className='experience__details-icon'/>
              <div>
                <h4>Trello</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__frontend">
        <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
                  <TbChecks className='experience__details-icon'/>
                  <div>
                    <h4>HTML</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <TbChecks className='experience__details-icon'/>
                  <div>
                    <h4>JavaScript</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <TbChecks className='experience__details-icon'/>
                  <div>
                    <h4>CSS</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <TbChecks className='experience__details-icon'/>
                  <div>
                    <h4>React</h4>
                    <small className='text-light'>Intermediate - Learning it</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <TbChecks className='experience__details-icon'/>
                  <div>
                    <h4>Typescript</h4>
                    <small className='text-light'>Beginner/Intermediate</small>
                  </div>
                </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default experience