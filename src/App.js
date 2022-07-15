
import './App.css';
import logo from './images/logo.png'
import notification from './images/notification.png'
import inbox from './images/inbox.png'
import video from './images/video.png'
import search from './images/search.png'
import profile from './images/profile-pic.png'
import news from './images/news.png'
import friend from './images/friends.png'
import group from './images/group.png'
import Marketplace from './images/marketplace.png'
import Watch from './images/watch.png'


function App() {
  return (

   <div>
    <body>
   
        <nav>
            <div class="nav-left">
                <img src={logo} alt="" class="logo"/>

                <ul>
                    <li><img src={notification} alt=""/>

                        
                    </li>
                    <li> <img src={inbox} alt=""/></li>

                           <li> <img src={video} alt=""/></li>
                    <li></li>

                </ul>
            </div>
            <div class="nav-right">
                <div class="search-box">
                    <img src={search} alt=""/>
                    <input type="text" placeholder="search"/>   
                
                </div>
                <div class="nav-user-icon online">
                    <img src={profile} alt=""/>
                </div>
            </div>
        </nav>
       
        
   




         <div className="container">
{/* ----------------------left side bar----------------- */}
          <div className="left-sidebar">
            <div className="imp-link">
              <a href="#"><img src={news} alt="" /> Latest News</a>
              <a href="#"><img src={friend} alt="" /> Friend</a>
              <a href="#"><img src={group} alt="" /> group</a>
              <a href="#"><img src={Marketplace} alt="" /> Marketplace</a>
              <a href="#"><img src={Watch} alt="" /> Watch</a>
              <a href="#">See More</a>
            </div>

          </div>
          {/* ----------------------main content----------------- */}
          <div className="main-content">

          </div>
          {/* ----------------------right side bar----------------- */}
          <div className="right-sidebar">
            
          </div>
         
         </div>

</body>
</div>
  );
}

export default App;
