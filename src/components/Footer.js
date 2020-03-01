import React from 'react'
import { Link } from 'react-router-dom'

const ScrollToTop = () => {
    window.scrollTo(0, 0)
}

const Footer = () => {
    return(
        <div className="Footer">
            <div className="wrapper-footer">
                <div className="intro">
                    <h6>We inpire people to believe in God</h6>
                    <p>
                        <em>Acts 20:28<br />
                        Keep watch over yourselves and all the flock of which the Holy Spirit has made you 
                        overseers. Be shepherds of the church of God, which he bought with his own blood.
                        </em>
                    </p>
                    <Link to="/history" onClick={ScrollToTop}>
                       <h5>MORE ABOUT OUR CHURCH...</h5>
                    </Link>
                </div>
                <div className="Border">
                    <h5>CONNECT</h5>
                    <div className="d-flex flex-column">
                    <a href="https://www.facebook.com/groups/142247175891700/">Facebook</a>
                    <a href="https://www.instagram.com/explore/locations/850755018/st-michaels-and-all-angels-church-sandakan/">Instagram</a>
                    <a href="https://www.youtube.com/channel/UCC6CR1XZ9957B7FEMzAhG5A">Youtube</a>
                    </div>
                    <p>089-123456</p>
                </div>
                <div className="Border">
                    <h5>RELATED SITES</h5>
                        <div className="d-flex flex-column  ">
                            <a href="https://anglicansabah.org/" >Diocese of Sabah</a>
                            <a href="http://www.diocesekuching.org/">Diocese of Kuching</a>
                            <a href="http://anglicanwestmalaysia.org.my/">Diocese of West Malaysia</a>
                            <a href="http://www.anglican.org.sg/">Diocese of Singapore</a>
                        </div>
                </div>
                <div className="workship-time Border">
                    <h5>SUNDAY WORSHIP</h5>
                    <div className="d-flex">
                        <div>
                            <p>
                            English Service<br />
                            - 7.15am
                            </p>
                            <p>
                            Chinese Service<br />
                            - 9.15am
                            </p>
                            <p>
                            BM Service (St. Michael's)<br />
                            - 11.15am
                            </p>
                            </div>
                            <div>
                                <p>
                                BM Service (St. Gabriel)<br />
                                - 8.30am
                                </p>
                                <p>
                                BM Service (Seguntor)<br />
                                - 3.30pm
                                </p>
                                <p>
                                Bilingual Service<br />
                                - 7.30pm
                                </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="policy">
                <div className="d-flex justify-content-center align-content-center policy-set"> 
                    <div className="d-flex flex-column flex-md-row m-3 text-center">
                        <h6>@2020 St-Michael Sabah Church</h6>
                        <h5>PRIVACY POLICY</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
