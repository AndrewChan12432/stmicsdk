import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../images/stmiclogo_redcolor460x155-2.png';

const Navbar = () => {
    var keys = {32: 1, 37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  document.addEventListener('wheel', preventDefault, {passive: false}); // Disable scrolling in Chrome
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}
function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    document.removeEventListener('wheel', preventDefault, {passive: false}); // Enable scrolling in Chrome
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}
    function navDisapear() {
        document.querySelector('.nav-links').classList.toggle('nav-active');
        document.querySelector('.burger').classList.toggle('toggle')
        if(document.querySelector(".nav-active")){
            disableScroll();  
        }else {
            enableScroll();
        }
    }
    return (
        <div className="Navbar">
            <div className="nav-bg"></div>
            <img src={ Logo } alt="stmitlogo" className="logo" />
            <div className="burger" onClick={navDisapear}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <ul className="nav-links">
                <Link to="/stmicsdk">
                    <li onClick={navDisapear}>Home</li>
                </Link>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="http://www.anglicansabah.org/" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About Us</a>
                    <div className="dropdown-menu">
                        <ul className="drop-li">
                            <Link to="/pastor">
                                <li className="dropdown-item" onClick={navDisapear}>Pastors Profile</li>
                            </Link>                           
                             <Link to="/history">
                                <li className="dropdown-item" onClick={navDisapear}>History</li>
                            </Link>
                            <Link to="/location">
                                <li className="dropdown-item" onClick={navDisapear}>Location</li>
                            </Link>
                        </ul>
                    </div>
                </li>
                <Link to="/ministries">
                    <li onClick={navDisapear}>Ministries</li>
                </Link>
                {/* <Link to="/gallery">
                    <li onClick={navDisapear}>Gallery</li>
                </Link> */}
                {/* <Link to="/resource">
                    <li onClick={navDisapear}>Resources</li>
                </Link> */}
                <Link to="/event">
                    <li  onClick={navDisapear}>Past Highlight</li>
                </Link>
                <Link to="/window">
                    <li onClick={navDisapear}>The Windows of Remembrance & The Friendship Windows</li>
                </Link>
            </ul>
        </div> 
    )
}

export default Navbar
