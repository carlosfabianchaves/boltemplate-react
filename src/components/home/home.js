import React, { Component } from 'react'
import './home.scss';

import WeatherWidget from '../weatherwWidget/weatherwWidget';
import PrincipalHero from '../principalHero/principalHero';
import BookingBar from '../bookingbar/bookingbar';

class Home extends Component{

    principalHeroData = {};

    constructor(props){
        super(props);
        this.principalHeroData = props.isWinter ? {
            title: "2020-21",
            subtitle: "WINTER PASSES ON SALE",
            buttonText: "PURCHASE NOW",
            buttonLink: "#",
        } :

        {
            title: "2020-21",
            subtitle: "SUMMER PASSES ON SALE",
            buttonText: "PURCHASE NOW",
            buttonLink: "#",
        }; 
        
    }

    
    

    render(){
        return(
            <div className={this.props.isWinter ? 
                "main-component home winter" :
                "main-component home summer"}>
                <PrincipalHero data={this.principalHeroData}></PrincipalHero>
                <WeatherWidget></WeatherWidget>
               <img className="separator" src='./images/path8544.png'/>
               <BookingBar></BookingBar>

            </div>
        );
    }
}

export default Home;