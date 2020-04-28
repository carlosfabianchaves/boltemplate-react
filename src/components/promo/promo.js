import React, { Component } from 'react';

import './promo.scss';


class Promo extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
        <div className="promo-container" style={{backgroundImage: 'url(' + this.props.data.backgroundImage + ')'}}>
            {this.props.sidebar === true &&
                <img src="/images/upper-triangle.png" alt="" class="separator-top"></img>
            }
            
            <div className="heading">
                <h2>{this.props.data.title}</h2>
                <h3>{this.props.data.subtitle}</h3>
            </div>
            {this.props.sidebar === true &&
                <img src="/images/path8544.png" alt="" class="separator-promo-bottom"></img>
            }
         
        </div>
        )
    }
}

export default Promo;
