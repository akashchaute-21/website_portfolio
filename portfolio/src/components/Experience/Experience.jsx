import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return ( 
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Technical Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Tailwind</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>BootStrap</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Technical Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Data Structure & Algorithms</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>C++/ Python</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Ms-Excel</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Fusion 360</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Matlab</h4>
            <small className='text-light'>Basic</small>
            </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>LaTex</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
          </div>
        
        </div>
      </div>
    </section>
  )
}

export default Experience
