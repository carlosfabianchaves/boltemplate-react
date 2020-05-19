import React, { Component } from 'react'
import  PrimaryHero from '../primaryHero/primaryHero';
import WeatherWidget from '../weatherwWidget/weatherwWidget';
import './snowReport.scss';
import SecondaryHero from '../secondaryHero/secondaryHero';

class SnowReport extends Component{
    componentData = {
        heading: "Mountain & Conditions Report",
        subheading: "THE SUBTITLE IS IN ALL CAPS",
        backgroundImage: 'url("/images/heroes/reportHero.jpg")'
    }

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="SnowReport">
                <WeatherWidget></WeatherWidget>
                <PrimaryHero heroData={this.componentData} >                    
                </PrimaryHero>                
                <SecondaryHero></SecondaryHero>   
            </div>
        )
    }
}

export default SnowReport;