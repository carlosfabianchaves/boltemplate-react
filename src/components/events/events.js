import React, { Component } from 'react'
import  PrimaryHero from '../primaryHero/primaryHero';

class Events extends Component{

    componentData = {
        heading: "Wild Mountain Events",
        subheading: "THE SUBTITLE IS IN ALL CAPS",
        backgroundImage: 'url("./images/heroes/eventhero.jpg")'
    }
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="main-content">
                <PrimaryHero heroData={this.componentData} >                    
                </PrimaryHero>
            </div>
        )
    }
}

export default Events;