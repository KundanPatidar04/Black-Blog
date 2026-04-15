import React from 'react'
import hero from '../assets/images/aboutHero.jpeg'

export const AboutHero = () => {
  return (
    <section className='dark-section'>
        <img src={hero} alt="" className='w-75 mx-auto d-block p-2' />
    </section>
  )
}
