import React from 'react'
import '../../../bootstrap.css'
import './Card.css'
import more from '../../../img/icons/more2.png'
function Card(props) {
  return (
      
          <div className='vid card col-6 col-md-6  col-lg-3 p-0'>
          <img className='thumb' src={props.thumbnail} alt="" />
          
          <div className='description'>
              <img className='logo' src={props.logo} alt="" />
              
              <div className='view'>
              <p className='vid-title'>Drake- FirstPerson Shooter ft J Cole</p>
                <p><span >Drake</span></p>
                      <p><span>2m views . 17 hours ago</span></p>
                   </div>
                  <img className='more-icon' src={more} alt="" />

                  </div>
                  
          
              
          </div>
      
  )
}

export default Card