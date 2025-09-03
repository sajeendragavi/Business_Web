import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/edusity_assets/next-icon.png'
import back_icon from '../../assets/edusity_assets/back-icon.png'
import client_1 from '../../assets/edusity_assets/client-1.png'
import client_2 from '../../assets/edusity_assets/client-2.png'
import client_3 from '../../assets/edusity_assets/client-3.png'
import client_4 from '../../assets/edusity_assets/client-4.png'

const Testimonial = () => {
  const slider = useRef();
  let tx = 0;
  
  const slideForward =() => {
      if(tx > -50){
        tx -= 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`;
  }

  const slideBackward =()=>{
      if(tx < 0){
        tx += 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`;
  }
  

  return (
    <div className='testimonials'>
        <img src={next_icon} alt='' className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt='' className='back-btn'onClick={slideBackward}/>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className='slide'>
                <div className='user_info'>
                  <img src={client_1} alt=''/>
                    <div>
                        <h3>Gavindu De Silva</h3>
                        <span>Moscow, Russia</span>
                    </div>
                </div>
                <p>
                  Gusto Sovet delivered exactly what my business needed. 
                  Their team is highly professional, reliable, and creative. 
                  The website they developed for us is fast, secure, and user-friendly. 
                  I truly appreciate their attention to detail and ongoing support
                </p>
              </div>
            </li>
            <li>
              <div className='slide'>
                <div className='user_info'>
                  <img src={client_2} alt=''/>
                    <div>
                        <h3>Tharindu De Silva</h3>
                        <span>Kuala Lumpur, Malaysia</span>
                    </div>
                </div>
                <p>
                  Working with Gusto Sovet was a smooth and rewarding experience. 
                  They understood my requirements clearly and suggested innovative solutions. 
                  The final product exceeded my expectations, and I would gladly recommend them to 
                  anyone looking for quality digital services.
                </p>
              </div>
            </li>
            <li>
              <div className='slide'>
                <div className='user_info'>
                  <img src={client_3} alt=''/>
                    <div>
                        <h3>Venura De Silva</h3>
                        <span>Seoul, Korea</span>
                    </div>
                </div>
                <p>
                  I was impressed with the modern design and scalability of the solution provided by Gusto Sovet.
                   They were quick to respond to changes and delivered on time. 
                  It’s refreshing to work with a team that genuinely cares about client satisfaction
                </p>
              </div>
            </li>
            <li>
              <div className='slide'>
                <div className='user_info'>
                  <img src={client_4} alt=''/>
                    <div>
                        <h3>Yashora De Silva</h3>
                        <span>Colombo, Sri Lanka</span>
                    </div>
                </div>
                <p>
                  Gusto Sovet helped bring my vision to life. Their expertise in web development and digital
                   solutions gave my business a strong online presence. 
                  The team was supportive throughout the process, making everything simple and stress-free.
                </p>
              </div>
            </li>
          </ul>


        </div>


    </div>
  )
}

export default Testimonial;
