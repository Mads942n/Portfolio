import React, { useRef } from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import emailjs from 'emailjs-com';

const Contact = () => {
  const Form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fhuvut9', 'template_hio9f0l', Form.current, 'YmuKtl1TBA2CmYOvG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>madsEB@hotmail.dk</h5>
            <a href="mailto:madsEB@hotmail.dk" target='_blank'>Send an email</a>
          </article>
        </div>
        <form ref={Form} onSubmit={sendEmail}>
          <input className='contact__input' type="text" name='name' placeholder='Your Full Name' required/>
          <input className='contact__input' type="email" name='email' placeholder='YourEmail@Email.com' required/>
          <textarea className='contact__input' name="message" id="7" placeholder='Your Message to me' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact