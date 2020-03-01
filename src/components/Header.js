import React from 'react'

const Header = props => {
    return (
        <header className="Header">
            <picture>
            <img src={require('../images/' + props.name)} alt="head" />
            </picture>
            <div className="disapear-scrolling">
                <div className="fixed-scrolling">
                    <h1>Psalm 5:3 (NIV)</h1>
                    <h3>
                        "In the morning, Lord, you hear my voice;
                        in the morning I lay my requests before you
                        and wait expectantly."
                    </h3>
                    <p>
                        Begin your day in prayer and meditation, so that you can maintain a peaceful
                        outlook and not start your day in a race. Ask the Lord <br />
                        for the desires of your heart and believe that he will answer.
                    </p>
                </div>   
            </div>
        </header>
    )
}

export default Header 
