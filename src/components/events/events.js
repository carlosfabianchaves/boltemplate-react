import React, { Component } from 'react'
import  PrimaryHero from '../primaryHero/primaryHero';
import WeatherWidget from '../weatherwWidget/weatherwWidget';
import Sidebar from '../sidebar/sidebar';
import Contact from '../contact/contact';
import FooterNav from '../footerNav/footerNav';
import './events.scss'

import { Link } from 'react-router-dom';

class Events extends Component{

    componentData = {
        heading: "Wild Mountain Events",
        subheading: "THE SUBTITLE IS IN ALL CAPS",
        backgroundImage: 'url("./images/heroes/eventhero.jpg")'
    }

    events = [
        {
            image: "/images/event1.jpg",
            title: "The Adventure Begins Event",
            date: "DECEMBER 24, 2018",
            description: "Description goes here, event description, music acts, festival stuff, etc. Description goes here, event description, music acts, festival stuff, etc.",
            link: ""
        },
        {
            image: "/images/event2.jpg",
            title: "Nature Hike & Wildlife Battle",
            date: "JANUARY 1, 2019",
            description: "Description goes here, event description, music acts, festival stuff, etc. Description goes here, event description, music acts, festival stuff, etc.",
            link: ""
        },
        {
            image: "/images/event3.jpg",
            title: "Second Annual Set Things on Fire",
            date: "DECEMBER 31, 2019",
            description: "Description goes here, event description, music acts, festival stuff, etc. Description goes here, event description, music acts, festival stuff, etc.",
            link: ""
        },
    ]
    constructor(props){
        super(props);
    }

    renderEvents(){
        return this.events.map((item,index)=> (
            <div key={index} className="event-element">
                <img src={item.image}/>
                <div className="event-data">
                    <h2>{item.title}</h2>
                    <h3>{item.date}</h3>
                    <span className="news-line"></span>
                    <p>{item.description}</p>
                    <Link to={{
                        pathname: 'eventsDetail',
                        state:{
                            event: item
                        }
                    }} >read more</Link>
                </div>
               

            </div>
        ))
    }
    

    render(){
        return(
            <div className="main-content" id="events">
                <WeatherWidget></WeatherWidget>
                <PrimaryHero heroData={this.componentData} >                    
                </PrimaryHero>
                <div className="cm-content">
                    <div className="page-content">
                        <div className="filters">
                            <input placeholder="Date"/>
                            <select></select>
                            <select></select>
                            <input placeholder="Search"/>
                            <a className="search-btn"></a>
                        </div>
                       <h1 className="event-date-title">December 2020</h1>
                       {this.renderEvents()}                        
                    </div>          
                    <Sidebar></Sidebar>
                </div>
                <Contact></Contact>
                <FooterNav></FooterNav>

                
            </div>
        )
    }
}

export default Events;