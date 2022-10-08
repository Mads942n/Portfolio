import React from 'react'
import './Portfolio.css'
import fakeflix from  '../../assets/fakeflix.png'
import thiswebsite from '../../assets/Thiswebsite.png'
import {BsGithub} from 'react-icons/bs'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
        <div className="portfolio__item-image">
            <img src={thiswebsite} alt="This Website" />
          </div>
          <h3>This Website</h3>
          <p className='text-light'>Yay, this website is build with React!
            after the experience i have had, studying and making projects big or small with React.
            I have made this website! With react being a components based Javascript library it was hard to get into.
            But making these projects and this website, has showed me the power of React!
          </p>
          <div className="portfolio__item-cta">
            <a href="" className='btn'>Github <BsGithub/></a>
            <a href='#' className='btn' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={fakeflix} alt="FakeFlix" />
          </div>
          <h3>Fakeflix</h3>
          <p className='text-light'>This was a project i thought up, and i wanted to see for myself if i could recreate Netflix, but in react.
            Throughout this project i used themoviedb.org's API, to get data of all kinds of movies and display it.
            This project is on a live demo server, that is setup with Firebase hosting.
            Keep in mind when viewing this live demo, that there still are some bugs.
          </p>
          <div className="portfolio__item-cta">
            <a href="" className='btn'>Github <BsGithub/></a>
            <a href='https://fakeflix-12697.web.app' className='btn' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={fakeflix} alt="FakeFlix" />
          </div>
          <h3>Fakeflix</h3>
          <p className='text-light'>This was a project i thought up, and i wanted to see for myself if i could recreate Netflix, but in react.
            Throughout this project i used themoviedb.org's API, to get data of all kinds of movies and display it.
            This project is on a live demo server, that is setup with Firebase hosting.
            Keep in mind when viewing this live demo, that there still are some bugs.
          </p>
          <div className="portfolio__item-cta">
            <a href="" className='btn'>Github <BsGithub/></a>
            <a href='https://fakeflix-12697.web.app' className='btn' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={fakeflix} alt="FakeFlix" />
          </div>
          <h3>Fakeflix</h3>
          <p className='text-light'>This was a project i thought up, and i wanted to see for myself if i could recreate Netflix, but in react.
            Throughout this project i used themoviedb.org's API, to get data of all kinds of movies and display it.
            This project is on a live demo server, that is setup with Firebase hosting.
            Keep in mind when viewing this live demo, that there still are some bugs.
          </p>
          <div className="portfolio__item-cta">
            <a href="" className='btn'>Github <BsGithub/></a>
            <a href='https://fakeflix-12697.web.app' className='btn' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={fakeflix} alt="FakeFlix" />
          </div>
          <h3>Fakeflix</h3>
          <p className='text-light'>This was a project i thought up, and i wanted to see for myself if i could recreate Netflix, but in react.
            Throughout this project i used themoviedb.org's API, to get data of all kinds of movies and display it.
            This project is on a live demo server, that is setup with Firebase hosting.
            Keep in mind when viewing this live demo, that there still are some bugs.
          </p>
          <div className="portfolio__item-cta">
            <a href="" className='btn'>Github <BsGithub/></a>
            <a href='https://fakeflix-12697.web.app' className='btn' target='_blank'>Live Demo</a>
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default portfolio