import React from 'react'
import Header from '../components/Header'

export default function Location() {
    return (
        <div className="Location">
            <Header name="church.jpg" />
            <div className="space-color Up-index">
                <h4>Our Location</h4>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15876.430778596612!2d118.1127117!3d5.8404421!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa425279f415cdf6c!2sSt.%20Michael&#39;s%20and%20All%20Angels%20Church%2C%20Sandakan!5e0!3m2!1sen!2smy!4v1579197454550!5m2!1sen!2smy" title="map" width="auto" height="auto" frameborder="0" style={{border:0}} allowfullscreen="" />
                <h6>
                    The Parish Of St Michael & All Angels<br />
                    P.O. Box 17<br />
                    90700, Sandakan, Sabah<br />
                    Malaysia.
                </h6>
                <p>
                    Contact : +6089215860, +6089213457<br />
                    Fax : +6089274830<br />
                    Office Hours: Monday, Wednesday – Saturday (8:00 am – 4:30 pm)<br />
                    Day Off: Tuesday & Public Holiday.
                </p>
            </div>
        </div>
    )
}
