import React, { useState } from 'react'
import Navbar  from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Company from './Components/Company/Company'
import Testimonial from './Components/Testimonials/Testimonial'
import Contact  from './Components/Contact/Contact'
import Footertemp from './Components/Footer/Footertemp'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'



const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
          <Title subTitle='Our Services' title='Solutions We Provide'/>
          <Programs />
          <About setPlayState = {setPlayState} />
          <Title subTitle='Team & Culture' title='A Glimpse Into Our Journey of Excellence'/>
          <Company/>
          <Title subTitle='TESTIMONIALS' title='What Our clients Say'/>
          <Testimonial/>
          <Title subTitle='Contact us' title='Get in touch'/>
          <Contact/>
          <Footertemp/>
          
      </div>
    <VideoPlayer playState = {playState} setPlayState = {setPlayState} />  
    </div>
  )
}

export default App;