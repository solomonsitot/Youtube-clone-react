// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../../../bootstrap.css'
import './TopNav.css'
import menu from '../../../img/icons/menu.png'
import logo from '../../../img/icons/YouTube_Logo.svg'
import mic from '../../../img/icons/mic.png'
import serch from '../../../img/icons/search.png'
import addvideo from '../../../img/icons/addvideo.png'
import squaredmenu from '../../../img/icons/squaredmenu.png'
import bell from '../../../img/icons/bell.png'
import user from '../../../img/icons/user.png'
function TopNav() {
    
  return (
      <>
      <div className='link-wrapper'>
          
              <ul className='left-items'>
                  <a href="">
                    <li><img src={menu} alt="" /></li>
                  </a>
                  <a href="">
                    <li><img src={logo} alt="" /></li>
                   </a>
        </ul>
        
            <div className='middle-items d-none d-md-block'>
          <input className='search-bar' type="text" placeholder='Search'/>
          <a href=""><img className='search-icon' src={serch} alt="" /></a>
          <a href=""><img className='mic' src={mic} alt="" /></a>
        </div>
        

              <ul className='right-items'>
          <div className='special d-md-none' >
            <li><a href=""><img src={serch} alt="" /></a></li>
            <li><a href=""><img src={mic} alt="" /></a></li>
          </div>
          
              <li><a href=""><img src={addvideo} alt="" /></a></li>
              <li><a href=""><img src={squaredmenu} alt="" /></a></li>
              <li><a href=""><img src={bell} alt="" /></a></li>
              <li><a href=""><img src={user} alt="" /></a></li>

              </ul>

          
          </div>
         
      </>
  )
}

export default TopNav