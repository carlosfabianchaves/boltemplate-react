import React, { Component } from 'react';
import './principalHero.scss';

class PrincipalHero extends Component{

    constructor(props){
        super(props);
        console.log(props);
    }

    render(){
        return(
        <div id="principalHero">
            <h1>{this.props.data.title}</h1>
            <h3>{this.props.data.subtitle}</h3>
            <a href={this.props.data.buttonLink}>{this.props.data.buttonText}</a>
        </div>
        )
    }

}

export default PrincipalHero;