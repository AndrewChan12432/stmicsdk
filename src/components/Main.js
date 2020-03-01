import React from 'react';
import baptism from '../images/baptism.jpg'
import marry from '../images/marriage.jpg'
import church from '../images/mtmichael.jpg'
// import workship from '../images/workship.jpg'
import eventAnnounce from '../images/al.png';
import { Link } from 'react-router-dom'

function Main() {
    const ScrollToTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div className="Main Up-index">
                <div className="container-fluid event d-flex justify-content-center">
                    <div className="col-md-10 d-flex justify-content-center flex-column flex-lg-row">
                    <img src={ eventAnnounce } alt="event-announcement" className=" col-sm-6 col-lg-4" />
                     <div className="ml-md-4 mt-4 mx-3">
                        <h5>New event had Begin!!</h5>
                        <p>Ad enim occaecat proident reprehenderit cillum eu ea magna. Eu nostrud irure qui aliqua cillum adipisicing velit consectetur dolore voluptate id nostrud et nisi. Sint duis anim proident incididunt sunt minim eu. Laboris in sint aliqua deserunt exercitation cillum. </p>
                        <Link to="/landing-page" onClick={ScrollToTop}> 
                           <button>Learn more</button>
                        </Link>
                     </div>
                    </div>
                </div>
                <div className="container-fluid cards">
                    <div className="d-flex flex-column flex-md-row">
                    <div className="card m-4">
                        <img src={ baptism } className="card-img-top"  alt="event-announcement" />
                            <div className="card-body">
                                <h6 className="card-title">Lecturer Wong Coming</h6>
                                <p className="card-text">
                                    Nisi esse ipsum est velit magna laborum amet ea occaecat proident excepteur. 
                                    Quis proident adipisicing sit nulla esse velit. Non laborum.
                                </p>
                            </div>
                        </div>
                        <div className="card m-4">
                        <img src={ marry } className="card-img-top"  alt="event-announcement" />
                            <div className="card-body">
                                <h6 className="card-title">Christmas Eve</h6>
                                <p className="card-text">
                                    Irure qui do irure velit aliqua ex tempor dolor ipsum occaecat cupidatat cillum. 
                                    Occaecat dolore dolore dolore Lorem ea enim. Non ea qui.
                                </p>
                                 </div>
                        </div>
                        <div className="card m-4">
                        <img src={ church } className="card-img-top"  alt="event-announcement" />
                            <div className="card-body">
                                <h6 className="card-title">Chinese New Year</h6>
                                <p className="card-text">
                                    Eu nostrud tempor minim nisi elit adipisicing. Ipsum Lorem non irure consequat 
                                    labore Lorem fugiat veniam officia sit ea elit eiusmod sunt.
                                </p>
                            </div>
                        </div>
                        <div className="card m-4">
                        <img src={ baptism } className="card-img-top"  alt="event-announcement" />
                            <div className="card-body">
                                <h6 className="card-title">Baptism</h6>
                                <p className="card-text">
                                    Duis ullamco laborum Lorem veniam cillum dolor fugiat esse elit dolor 
                                    veniam. Consectetur elit nisi sint eu esse adipisicing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-3 d-md-flex" >
                    <img src="https://dg.imgix.net/do-you-worship-your-worship-xfjj2l1f-en/landscape/do-you-worship-your-worship-xfjj2l1f-2f531974bebef104465cf1bd5ccbd0d7.jpg?ts=1533236982&ixlib=rails-3.0.2&auto=format%2Ccompress&fit=min&w=800&h=450&dpr=2&ch=Width%2CDPR" className="container-fluid special-img" alt="carousel" />
                    <div className="carousel p-3">
                        <h4>Past Highlight</h4>
                        <hr />
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="d-flex">
                                        <div className="d-md-flex" >
                                            <img className="rounded-circle" src={ marry } alt="first slide" />
                                            <div className="m-3 float-left">
                                                <h5>EC Pre-Marriage Course</h5>
                                                <p>
                                                    Aliquip excepteur exercitation deserunt non reprehenderit 
                                                    ut culpa et esse consequat proident in esse. Incididunt 
                                                    eiusmod est esse et excepteur.
                                                </p>
                                                <Link to="/event" onClick={ScrollToTop}>
                                                <button>Learn more</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                        <div className="d-flex justify-content-center">
                                            <div className="d-md-flex" >
                                                <img className="rounded-circle" src={ marry } alt="first slide" />
                                                <div className="m-3">
                                                    <h5>Christmas ‘REACH’</h5>
                                                    <p>
                                                        Et est anim elit irure laboris officia tempor dolore 
                                                        tempor commodo amet aute eiusmod velit.Veniam 
                                                        adipisicing.
                                                    </p>
                                                    <Link to="/event2" onClick={ScrollToTop}>
                                                    <button>Learn more</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="d-flex justify-content-center">
                                            <div className="d-md-flex" >
                                                <img className="rounded-circle" src={ marry } alt="first slide" />
                                                <div className="m-3">
                                                    <h5>Christmas 2017</h5>
                                                    <p>
                                                        Et est anim elit irure laboris officia tempor dolore 
                                                        tempor commodo amet aute eiusmod velit.Tempor dolore 
                                                        tempor commodo amet aute eiusmod velit.
                                                    </p>
                                                    <Link to="/event3" onClick={ScrollToTop}>
                                                    <button>Learn more</button>
                                                    </Link>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="control-opacity">
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                            </div>
                            </div>
                    </div>
                </div>
        </div>
    )
}

export default Main
