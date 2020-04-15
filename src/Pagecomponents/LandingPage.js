import React from 'react'
import Header from '../components/Header'

export default function LandingPage() {
    return (
        <div className="LandingPage">
            <Header name="virus.jpg" />
            <div className="space-color Up-index">
                <h4>Coronavirus</h4>
                <h5>Wash your hands frequently</h5>
                <p>
                    Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.
                </p>
                <p>
                    Why? Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands.
                </p>
                <iframe src="https://www.youtube.com/embed/6Ooz1GZsQ70" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="null" allowfullscreen></iframe>
                <h5>Maintain social distancing</h5>
                <p>
                    Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.
                </p>
                <p>
                    Why? When someone coughs or sneezes they spray small liquid droplets from their nose or mouth which may contain virus.
                    If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person 
                    coughing has the disease.
                </p>
                <h5>Avoid touching eyes, nose and mouth</h5>
                <p>
                    Why? Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth.
                    From there, the virus can enter your body and can make you sick.
                </p>
                <h5>If you have fever, cough and difficulty breathing, seek medical care early</h5>
                <p>
                    Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow 
                    the directions of your local health authority.
                </p>
                <p>
                    Why? National and local authorities will have the most up to date information on the 
                    situation in your area. Calling in advance will allow your health care provider to 
                    quickly direct you to the right health facility. This will also protect you and help 
                    prevent spread of viruses and other infections.
                </p>
                <p>Track cases at:<a href="https://www.nytimes.com/interactive/2020/world/coronavirus-maps.html">coronavirus.map</a></p>
            </div> 
        </div>
    )
}
