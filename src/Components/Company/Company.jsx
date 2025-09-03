import React from 'react'
import './Company.css'
import team_1 from '../../assets/edusity_assets/team-1.png'
import team_2 from '../../assets/edusity_assets/team-2.png'
import team_3 from '../../assets/edusity_assets/team-3.png'
import team_4 from '../../assets/edusity_assets/team-4.png'
import white_arrow from '../../assets/edusity_assets/white-arrow.png'

const Company = () => {
  return (
    <div className='company'>
        <div className='team'>
            <img src={team_1} alt=''/>
            <img src={team_2} alt=''/>
            <img src={team_3} alt=''/>
            <img src={team_4} alt=''/>
        </div>
        <button className='btn  dark-btn'>See more here<img src={white_arrow} alt=''/></button>

    </div>
  )
}
export default Company;
