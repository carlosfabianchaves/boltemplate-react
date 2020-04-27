import React, { Component } from 'react';

import './promo.scss';


class Promo extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
        <div className="promo-container" style={{backgroundImage: 'url(' + this.props.data.backgroundImage + ')'}}>
            <div className="heading">
                <h2>{this.props.data.title}</h2>
                <h3>{this.props.data.subtitle}</h3>
            </div>
        </div>
        )
    }
}

export default Promo;
