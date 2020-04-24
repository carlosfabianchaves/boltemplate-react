import React, { Component } from 'react';
import './primaryHero.scss';
class PrimaryHero extends Component{

    heroStyle = {
        backgroundImage: "/images/"        
    };
    constructor(props){
        super(props);
        this.heroStyle.backgroundImage = props.heroData.backgroundImage;
    }
    

    render(){
        return(
            <div className="primary-hero" style={this.heroStyle} >
                <div className="heading-container">
                    <h1 className="primary-heading">{this.props.heroData.heading}</h1>
                    <h2 className="secondary-heading">{this.props.heroData.subheading}</h2>
                </div>
                <img className="separator" src='./images/path8544.png'/>
            </div>
        )
        
    }
}

export default PrimaryHero;