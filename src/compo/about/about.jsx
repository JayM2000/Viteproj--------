import React from 'react';
import {FaAward as Fa} from 'react-icons/fa';
import {FiUsers as Users} from 'react-icons/fi';
import {VscFolderLibrary as Lib} from 'react-icons/vsc';
import './about.css';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className='container about__container'>
        {/* <div className='about__me'>
          <div className='about_me-image'>
            <img src={} alt='My Image' />
          </div>
        </div> */}

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <Fa className='about__icon' />
              <h5 >Experience </h5>
              <small> 1 Years working</small>
            </article>

            <article className='about__card'>
              <Users className='about__icon' />
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>

            <article className='about__card'>
              <Lib className='about__icon' />
              <h5>Projects</h5>
              <small>90+ Completed</small>
            </article>          
          </div>

          <p className='ptags'>
            Lorem epsum text here goes.....
          </p>

          <a href='#contact' className='btn btn-primary bttn'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;