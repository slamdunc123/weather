import React from 'react';

const Home = () => {
    return(
        <div>
            <br/>
            <h5>Git URL</h5>
            <ul>
                <li>
                    <a href="https://github.com/slamdunc123/weather" target="_blank" rel="noopener noreferrer">https://github.com/slamdunc123/weather</a>
                </li>
            </ul>

            <h5>Features:</h5>
            <ul>
                <li>Cities dropdown</li>
                <li>Show weather forecast for selected city</li>
            </ul>
            <br/>
            <h5>Tech:</h5>
            <ul>
                <li>bootstrap - styling and tables</li>
                <li>react-router - routing</li>
                <li>axios - get initial data from api</li>
            </ul>
            <br/>
            <h5>Notes:</h5>
            <ul>
                <li>no persistent state</li>
            </ul>
        </div>


    )
}

export default Home;