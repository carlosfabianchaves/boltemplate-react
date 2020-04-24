import React, { Component } from 'react'
import  PrimaryHero from '../primaryHero/primaryHero';

class Example1 extends Component{

    componentData = {
        heading: "Alright This Title is Big",
        subheading: "THE SUBTITLE IS IN ALL CAPS",
        backgroundImage: 'url("/images/heroes/husky.jpg")'
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

export default Example1;