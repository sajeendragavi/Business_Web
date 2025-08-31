import React from 'react'
import './Programs.css'
import service_1 from '../../assets/edusity_assets/service-1.png'
import service_2 from '../../assets/edusity_assets/service-2.png'
import service_3 from '../../assets/edusity_assets/service-3.png'
import program_icon_1 from '../../assets/edusity_assets/program-icon-1.png'
import program_icon_2 from '../../assets/edusity_assets/program-icon-2.png'
import program_icon_3 from '../../assets/edusity_assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={service_1} alt=''/>
            <div className='caption'>
                <img src={program_icon_1} alt='' />
                <p>Web & Mobile Development</p>
            </div>
        </div>
        
        <div className='program'>
            <img src={service_2} alt=''/>
             <div className='caption'>
                <img src={program_icon_2} alt='' />
                <p>Custom Software Solutions</p>
            </div>
        </div>

        <div className='program'>
            <img src={service_3} alt=''/>
             <div className='caption'>
                <img src={program_icon_3} alt='' />
                <p>Cloud & DevOps</p>
            </div>
        </div>
    </div>
  )
}

export default Programs;
