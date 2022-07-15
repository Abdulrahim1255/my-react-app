
import './App.css';
import logo from './images/logo.png'
import notification from './images/notification.png'
import inbox from './images/inbox.png'
import video from './images/video.png'
import search from './images/search.png'
import profile from './images/profile-pic.png'

function App() {
  return (
   <div>
    <body>
    <section>
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
                <div class="nav-user-icon">
                    <img src={profile} alt=""/>
                </div>
            </div>
        </nav>
       
        
    </section>
</body>
   </div>
  );
}

export default App;
