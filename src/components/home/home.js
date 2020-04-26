import React from 'react'
import './home.scss';

import WeatherWidget from '../weatherwWidget/weatherwWidget';

function Home(){
    return(
        <div className="main-component home">
            <WeatherWidget></WeatherWidget>
           <img className="separator" src='./images/path8544.png'/>
        </div>
    );
}

export default Home;