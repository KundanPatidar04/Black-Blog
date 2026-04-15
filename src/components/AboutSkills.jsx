import React from 'react'
import { ExperienceCard } from './ExperienceCard'

export const AboutSkills = () => (
  <section>
    <div className='container d-flex p-5'>
      <div className='w-50'>
        <h3 className='about-skill-h'>Our Skills</h3>
        <p className='about-card-p'>We are Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsum ducimus excepturi harum obcaecati incidunt ex aspernatur ad eius asperiores.</p>
      </div>
      <div className='w-50 d-flex flex-wrap justify-content-evenly'>
        <ExperienceCard count='20+' experience='Years of Experience' />
        <ExperienceCard count='200+' experience='Exposers' />
        <ExperienceCard count='10+' experience='Years of no.1' />
        <ExperienceCard count='20+' experience='Certified Awards' />
      </div>

    </div>
  </section>
)
