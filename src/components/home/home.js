import React, { Component } from 'react'
import './home.scss';

import WeatherWidget from '../weatherwWidget/weatherwWidget';
import PrincipalHero from '../principalHero/principalHero';
import BookingBar from '../bookingbar/bookingbar';
import Promo from '../promo/promo';
import News from '../news/news';
import SecondaryHero from '../secondaryHero/secondaryHero';
import SocialFeed from '../socialFeed/socialFeed';
import Contact from '../contact/contact';
import FooterNav from '../footerNav/footerNav';

class Home extends Component{

    principalHeroData = {};
    promos = [{
        title:"A Headline Would Go Right Here",
        subtitle:"BOOK YOUR LODGING SIMPLY & EASILY",
        backgroundImage:"./images/placeholder-1.jpg"
    },
    {
        title:"A Headline Would Go Right Here2",
        subtitle:"BOOK YOUR LODGING SIMPLY & EASILY2",
        backgroundImage:"./images/placeholder-2.jpg"
    }]

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
            <div>
                <div className={this.props.isWinter ? 
                    "main-component home winter" :
                    "main-component home summer"}>
                    <PrincipalHero data={this.principalHeroData}></PrincipalHero>
                    <WeatherWidget></WeatherWidget>
                    <img className="separator" src='./images/path8544.png'/>               
                </div>
               <BookingBar></BookingBar>
               <div className="promos">
                    <img src="./images/upper-triangle.png" alt="" className="separator-top"/>
                    <Promo data={this.promos[0]}></Promo>
                    <Promo data={this.promos[1]}></Promo>
                    <img className="promo-separator" src='./images/path8544.png'/> 
               </div>
               <News></News>
               <SecondaryHero></SecondaryHero>   
               <SocialFeed></SocialFeed>   
               <Contact></Contact>  
               <FooterNav></FooterNav>       
            </div>
            
        );
    }
}

export default Home;