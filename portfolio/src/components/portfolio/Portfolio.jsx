import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.gif'
import IMG2 from '../../assets/portfolio2.gif'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/portfolio7.png'
import IMG8 from '../../assets/portfolio8.png'

const data = [
  {
    id:1, 
    image: IMG8,
    title: 'Prayaas-Social Club of VNIT Website',
    github: 'https://github.com/YashGkwd/Prayaas-website',
    demo: 'https://prayaasvnit.cyclic.app/'
  },
  {
    id:2, 
    image: IMG1,
    title: 'Motion Planning- ground robot',
    github: 'https://github.com/IvLabs/MPGR',
    demo: 'https://drive.google.com/file/d/1DKMq1-ZGOOythyXw3WtEIhThV5oaFgtb/view?usp=sharing'
  },
  {
    id:2, 
    image: IMG2,
    title: 'Quadcoptor Trajectory Follower',
    github: 'https://github.com/akashchaute-21/Quadrotor-Trajectory-Follower',
    demo: 'https://www.youtube.com/watch?v=EycDqul6QDI'
  },
  {
    id:3, 
    image: IMG3,
    title: 'Voice Assistant',
    github: 'https://github.com/akashchaute-21/Voice-Assistant',
    demo: 'https://github.com/akashchaute-21/Voice-Assistant'
  },
  {
    id:4, 
    image: IMG4,
    title: 'Extended Kalmaan Filter',
    github: 'https://github.com/akashchaute-21/Extended-Kalman-Filter',
    demo: 'https://github.com/akashchaute-21/Extended-Kalman-Filter'
  },
  {
    id:5, 
    image: IMG5,
    title: 'Path Planning',
    github: 'https://github.com/akashchaute-21/A-star-Path-Planning',
    demo: 'https://github.com/akashchaute-21/A-star-Path-Planning'
  },
  
]
 
function Portfolio() {
  return (
    <section id="portfolio">
      <h2>My Recent Work</h2>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={image} alt={title} />
          </div>
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
            <a href={github} className='btn'>Github</a>
            <a href={demo} className='btn btn-primary' target="__blank">Live Demo</a>
            </div>
        </article>
            )
          }
          )
        }
      </div>
    </section>
  )
}   

export default Portfolio
