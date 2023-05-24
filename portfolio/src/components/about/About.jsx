import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {AiFillFund} from 'react-icons/ai'
import {VscFolderLibrary} from 'react-icons/vsc'
 
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>


      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Academic Year</h5>
              <small> 3rd Year of college</small>
            </article>

            <article className="about__card">
              <AiFillFund className='about__icon'/>
              <h5>Academic CGPA</h5>
              <small>8.36/10</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small> 4+ Completed</small>
            </article>
          </div>
          <p>
          Welcome to my portfolio website! This website showcases my skills, experiences, and projects, which I have developed throughout my academic and professional journey. I have gained a strong foundation in programming, web development,Robotics and software engineering. I have also had the opportunity to work on various projects, both independently and collaboratively, which have allowed me to apply my skills and knowledge in real-world situations.
          </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About
