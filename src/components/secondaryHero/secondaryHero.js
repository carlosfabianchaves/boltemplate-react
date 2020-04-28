import React, { Component } from 'react';
import './secondaryHero.scss';

class SecondaryHero extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="secondary-hero">
                <img src="./images/upper-triangle.png" alt="" className="separator-top"/>
                <div className="heading">
                    <div className="heading-div">
                        <h1>Where Are You?</h1>
                        <h3>WHAT ARE YOU EVEN DOING?</h3>
                        <a className="btn btn-primary">Purchase Now</a>
                    </div>
                    <img src="./images/path8544.png" alt="" className="separator-bottom"/>
                </div>            
        </div>
        )
    }


}

export default SecondaryHero;