import React from 'react'
import Header from '../components/Header';
import {SRLWrapper} from "simple-react-lightbox";
import {Link} from "react-router-dom";

  const ScrollToTop = () => {
    window.scrollTo(0, 0)
  }
const Event_cont2 = () => {
   return(
    <div className="Event-Page">
        <Header name="pastor.jpg"/>
          <div className="space-color Up-index event">
             <h4>Christmas 2017</h4>
             <p>Commodo et cupidatat labore adipisicing non laboris veniam. Cillum nisi incididunt aliquip nostrud qui incididunt minim magna aute ea. Veniam consectetur mollit ipsum minim tempor dolore labore dolore cupidatat id labore magna. Pariatur Lorem quis sit nostrud minim Lorem fugiat ad non ullamco consequat sint eu voluptate. Magna ad nostrud minim sint do quis excepteur enim.</p>
         <SRLWrapper>
           <div className="gallery">
              <div className="item1">
                <img src="http://stmicsdk.org/wp-content/uploads/2018/01/ff467508-592a-42f0-8cb9-c69b4a04672d.jpg" alt="mountain" />
              </div>
                <div className="item2"> 
                  <img src="http://stmicsdk.org/wp-content/uploads/2018/01/IMG_0905.jpg" alt="mountain" />
                </div>
                <div className="item2">
                  <img src="http://stmicsdk.org/wp-content/uploads/2018/01/af3a7280-e2c6-48ed-ac4d-8e0f65980b67.jpg" alt="mountain" />
                </div>
                <div className="item2 contain">
                  <img src="http://stmicsdk.org/wp-content/uploads/2018/01/DSC9501.jpg" alt="mountain" />
                  <div className="overlay">+5</div>
                </div>
                <div className="item2 invisible">
                     <img src="http://stmicsdk.org/wp-content/uploads/2018/01/DSC9589.jpg" alt="mountain" />
                   </div>
                   <div className="item2 invisible">
                      <img src="http://stmicsdk.org/wp-content/uploads/2017/03/IMG-20170306-WA0018.jpg" alt="mountain" />
                   </div>
                   <div className="item2 invisible">
                     <img src="http://stmicsdk.org/wp-content/uploads/2018/01/DSC9589.jpg" alt="mountain" />
                   </div>
                   <div className="item2 invisible">
                      <img src="http://stmicsdk.org/wp-content/uploads/2017/03/IMG-20170306-WA0018.jpg" alt="mountain" />
                   </div>
            </div>
         <div className="card">
                {/* <img className="card-img-top" src="http://stmicsdk.org/wp-content/uploads/2016/11/Small-Group-300x114.png" alt="Card cap" /> */}
                <div className="card-body">
                    <h5>EC Pre-Marriage Course</h5>
                    <p className="card-text">We encourage every church member to belong in any of the church cell groups, if you want to be connected to any of our church cell groups, simply call the church office.</p>
                    <Link to="/event" onClick={ScrollToTop}>
                        <button>Learn more</button>
                    </Link>
                </div>
                </div>
                <div className="card mt-4">
                {/* <img className="card-img-top" src="http://stmicsdk.org/wp-content/uploads/2016/11/Small-Group-300x114.png" alt="Card cap" /> */}
                <div className="card-body">
                    <h5>Christmas ‘REACH’</h5>
                    <p className="card-text">We encourage every church member to belong in any of the church cell groups, if you want to be connected to any of our church cell groups, simply call the church office.</p>
                    <Link to="/event2" onClick={ScrollToTop}>
                        <button>Learn more</button>
                    </Link>
                </div>
                </div>
         </SRLWrapper>
    </div>
  </div>
   )
}

export default Event_cont2
