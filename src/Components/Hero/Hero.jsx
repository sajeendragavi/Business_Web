import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/edusity_assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Innovative Software Solutions For Your Business Growth</h1>
        <p>Custom software, web apps, and digital solutions tailored for startups and enterprises.</p>
          <button className='btn'>Explore more<img src={dark_arrow} alt='' /></button>
      </div>
    </div>
  )
}
export default Hero;
