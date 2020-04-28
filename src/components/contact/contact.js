import React, { Component } from 'react';
import './contact.scss';


class Contact extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="contact">
                <div className="connect">
                    <h1>Stay Connected</h1>
                    <p>
                        Enter your email address for updates, deals, and special announcements. 
                    </p>
                    <input placeholder="E-Mail Address"></input>
                    <a className="contact-btn">SIGN UP</a>                    
                </div>
                <div className="follow">
                    <h1>Follow Us</h1>
                    <div className="icons">
                        <img src="/images/icons/icon_social_facebook.svg"/>
                        <img src="/images/icons/icon_social_twitter.svg"/>
                        <img src="/images/icons/icon_social_youtube.svg"/>
                        <img src="/images/icons/icon_social_insta.svg"/>                    
                    </div>
                </div>
            </div>
        )
    }
}


export default Contact;