import React from 'react'
import './About.css'
import about_img from '../../assets/edusity_assets/about.png'
import play_icon from '../../assets/edusity_assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt='' className='about-img'/>
            <img src={play_icon} alt='' className='play-icon' onClick={()=> {setPlayState(true)}}/>

        </div>

        <div className='about-right'>
            <h3>About Company</h3>
            <h2>Transforming Ideas Into Scalable Software Solutions</h2>
            <p>At Gusto Sovet, we believe technology should empower businesses,
                 not complicate them. Our journey began with a vision to deliver modern,
                  user-focused, and reliable software solutions that help organizations stay 
                  ahead in an ever-changing digital world.</p>

            <p>Driven by a passion for innovation, reliability, and scalability, 
                we specialize in web development, cloud computing, and enterprise solutions tailored to 
                meet diverse business needs.</p>

            <p>More than just a software company, Gusto Sovet is a partner in growth.
                 We work closely with startups, SMEs, and enterprises to understand their challenges 
                 and deliver solutions that create real impact. </p>         

        </div>



    </div>
  )
}

export default About;
