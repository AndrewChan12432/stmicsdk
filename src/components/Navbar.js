import React from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Link } from 'react-router-dom'
import Logo from '../images/stmiclogo_redcolor460x155-2.png';

const Navbar = () => {
    const ScrollToTop = () => {
        window.scrollTo(0, 0)
    }

    function navDisapear() {
        document.querySelector('.nav-links').classList.toggle('nav-active');
        document.querySelector('.burger').classList.toggle('toggle');
        if(document.querySelector(".nav-active") && window.innerWidth < 1024){
            disableBodyScroll(document.querySelector('body'));
        }else {
            enableBodyScroll(document.querySelector('body')) 
        }
    }
    function navSetting() {
        navDisapear();
        ScrollToTop()
    }
    return (
        <div className="Navbar">
            <div className="nav-bg"></div>
            <Link to="/">
                <img src={ Logo } onClick={ScrollToTop} alt="stmitlogo" className="logo" />
            </Link>
            <div className="burger" onClick={navDisapear}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <ul className="nav-links">
                <Link to="/">
                    <li onClick={navSetting}>Home</li>
                </Link>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="http://www.anglicansabah.org/" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About Us</a>
                    <div className="dropdown-menu">
                        <ul className="drop-li">
                            <Link to="/pastor">
                                <li className="dropdown-item" onClick={navSetting}>Pastors Profile</li>
                            </Link>                           
                             <Link to="/history">
                                <li className="dropdown-item" onClick={navSetting}>History</li>
                            </Link>
                            <Link to="/location">
                                <li className="dropdown-item" onClick={navSetting}>Location</li>
                            </Link>
                        </ul>
                    </div>
                </li>
                <Link to="/ministries">
                    <li onClick={navSetting}>Ministries</li>
                </Link>
                {/* <Link to="/gallery">
                    <li onClick={navSetting}>Gallery</li>
                </Link> */}
                {/* <Link to="/resource">
                    <li onClick={navSetting}>Resources</li>
                </Link> */}
                <Link to="/event">
                    <li  onClick={navSetting}>Past Highlight</li>
                </Link>
                <Link to="/window">
                    <li onClick={navSetting}>The Windows of Remembrance & The Friendship Windows</li>
                </Link>
            </ul>
        </div> 
    )
}

export default Navbar
