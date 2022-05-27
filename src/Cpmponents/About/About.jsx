import React from 'react'
import "./about.css"
import ME from "../../assets/me-about.jpg"
import {FaAward} from 'react-icons/fa' 
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="about Image"/>
          </div>
        </div>

        <div className='about__content'>

         <div className='about__cards'>
           <article className='about__card'>
           <FaAward  className="about__icon"
           />
             <h5>Experience</h5>
             <small>3+ Years working</small>
           </article>

           <article className='about__card'>
           <FiUsers  className="about__icon"
           />
             <h5>Clients</h5>
             <small>300 Clients Worldwide</small>
           </article>

           <article className='about__card'>
           <VscFolderLibrary  className="about__icon"
           />
             <h5>Projetcs</h5>
             <small>80_ Completed</small>
           </article>
         </div>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet sodales turpis ac sagittis. Cras nec feugiat eros, eget condimentum nisi. Nullam dapibus vel velit sit amet malesuada. Nam porta.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About