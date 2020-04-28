import React, { Component } from 'react';
import './socialFeed.scss';

class SocialFeed extends Component{

    constructor(props){
        super(props);

    }

    render(){
        return(
        <div id="socialFeed">
            <h1>Social Feed</h1>
            <div className="social-feed">
                <img src="/images/social-feed.png"/>
                <div className="social-info">
                    <h2>News Title</h2>
                    <h3>DECEMBER 24, 2018</h3>
                    <span className="news-line"></span>
                    <p>Description goes here, event description, music acts, festival stuff, etc.</p>
                    <a>read more</a>
                </div>
            </div>
        </div>
        )
    }

}

export default SocialFeed;
