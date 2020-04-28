import React, { Component } from 'react';
import './sidebar.scss';
import Promo from '../promo/promo';
import {returnPromos} from '../promoList';
import BookingBar from '../bookingbar/bookingbar';

class Sidebar  extends Component{

    promos = returnPromos();
    constructor(props){
        super(props);        
    }

    render(){
        return(
            <div id="sideBar">
              <Promo data={this.promos[0]} sidebar={true}></Promo>
                <BookingBar></BookingBar>
              <Promo data={this.promos[1]} sidebar={true}></Promo>
            </div>
        )
    }
}

export default Sidebar;