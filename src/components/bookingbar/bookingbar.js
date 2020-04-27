import React, { Component } from 'react';
import './bookingbar.scss';

class BookingBar extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="bookingBar">
                <div className="titles">
                    <h1>Stay & Play</h1>
                    <h3>BOOK YOUR LODGING SIMPLY & EASILY</h3>
                </div>
                <div className="book-now">
                    <input placeholder="Arrival Date"></input>
                    <input placeholder="Departure Date"></input>
                    <input placeholder="Departure Date"></input>
                    <a className="book-btn"> VIEW LODGING </a>
                </div>
            </div>
        )
    }
}

export default BookingBar;