import React from 'react'
import '../../../bootstrap.css'
import './SideNav.css'
import home from '../../../img/icons/home.png';
import explore from '../../../img/icons/explore.png';
import subscription from '../../../img/icons/subscription.png';
import history from '../../../img/icons/history.png';
import user from '../../../img/icons/user.png';
import library from '../../../img/icons/library.png';
import yourvideos from '../../../img/icons/your videos.png';
import watchlater from '../../../img/icons/watchlater.png';
import downloads from '../../../img/icons/downloads.jpg';
import more from '../../../img/icons/more.png';
function SideNav() {
  return (
      <div className='links-wrapper '>
        <ul className='links d-none d-lg-block'>
              <li><a href=""><img src={home} alt="" /> Home</a></li>
              <li><a href=""><img src={explore} alt="" /> Explore</a></li>
              <li><a href=""><img src={subscription} alt="" /> Subscription</a></li>
              <hr />
              <li><a href=""><img src={library} alt="" /> Library</a></li>
              <li><a href=""><img src={history} alt="" /> History</a></li>
              <li><a href=""><img src={yourvideos} alt="" /> Your videos</a></li>
              <li><a href=""><img src={watchlater} alt="" /> Watch later</a></li>
              <li><a href=""><img src={downloads} alt="" /> Downloads</a></li>
              <li><a href=""><img className='more' src={more} alt="" /> Show more</a></li>
              
              <hr />
              <p className='title'>SUBSCRIPTIONS</p>
              <li><a href=""><img src={user} alt="" /> Solomon</a></li>

      </ul> 
      
      <ul className='links-md d-none d-md-block d-lg-none '>
              <li><a href=""><img src={home} alt="" /><br /> <span className='nav-txt'>Home</span></a></li>
              <li><a href=""><img src={explore} alt="" /><br /> <span className='nav-txt'>Explore</span></a></li>
              <li><a href=""><img src={subscription} alt="" /><br /> <span className='nav-txt2'>Subscription</span></a></li>
              <li><a href=""><img src={subscription} alt="" /> <br /> <span className='nav-txt'>library</span></a></li>
        </ul>
    </div>
  )
}

export default SideNav