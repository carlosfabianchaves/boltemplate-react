import React, { Component } from 'react';
import './news.scss';

class News extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div className="news-container">
            <h1>News & Updates</h1>
            <div className="news-block">
                <img src="/images/beer.jpg"/>
                <div className="news-info">
                    <h2>News Title</h2>
                    <h3>DECEMBER 24, 2018</h3>
                    <span className="news-line"></span>
                    <p>Description goes here, event description, music acts, festival stuff, etc.</p>
                    <a>read more</a>
                </div>
            </div>
            <div className="news-block">
                <img src="/images/beer.jpg"/>
                <div className="news-info">
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

export default News;