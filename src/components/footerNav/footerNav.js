import React, { Component } from 'react';
import './footerNav.scss';

class FooterNav extends Component{

    constructor(props){
        super(props);
    }

    navigation = [
        {
            navLabel:"Wild Moutain",
            children: [
                {
                    navLabel:"Snow Report", 
                    link:"#"
                }
            ]
        },
        {
            navLabel:"Timberstone golf course",
            children: [
                {
                    navLabel:"Reserve Tee Time", 
                    link:"#"
                }
            ]
        },
        {
            navLabel:"Lodgin & Restaurant",
            children: [
                {
                    navLabel:"Reservation Request", 
                    link:"#"
                }
            ]
        }
    ];


    renderNav(){
        let navElements = this.navigation.map((item, index)=> 
        <ul key={index}>
            <span>{item.navLabel}</span>
            {item.children.map((child, childIndex)=> 
                <li key={childIndex}>{child.navLabel}</li>
            )}
        </ul>
        )

        return navElements;
    }



    render(){
        return(
        <div id="footerNav">
            <div className="about">
                <img src="/images/wild mountain logo.svg"/>
                <p>888 Wild Mountain Road <br/>Wild Mountain, MI 49888</p>
            </div>
            <div className="navigation">
                {this.renderNav()}
            </div>

            <p className="copy-right">© Copyright 2018 Wild Mountain Template WEB ACCESSIBILITY PRIVACY POLICY</p>
            <img className="map" src="/images/map.png"/>
        </div>
        )
    }

}

export default FooterNav;