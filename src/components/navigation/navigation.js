import React, { Component } from 'react'
import './navigation.scss'
import Subnavigation from './subnavigation/subnavigation'
import {returnNav} from '../navList';

class Navigation extends Component{
    
    navigationItems = returnNav();

    constructor(props){
        super(props);
        this.state = {activeMenuId: 0};
        console.log(returnNav);
    }

    

    activateMenu = (event, navItem) => {
        // console.log({
        //     state: this.state,
        //     navItem: navItem
        // });

        this.setState(state => ({ 
            activeMenuId: navItem.id, 
            navItem: navItem,
            isActive: (this.state.activeMenuId !== navItem.id) || !this.state.isActive 
         }));   
    }  

    renderMenu = () => {
        let listItems =  this.navigationItems.map((item, index)=>
            <li key={index} className={item.id === this.state.activeMenuId ? 
                'main-menu-option active-tab' : 'main-menu-option'} 
                onClick={(e)=> this.activateMenu(e, item)}>{item.navLabel}</li>
        );
        return (       
            <ul className="main-menu">
               {listItems}
            </ul>
        );
    }
    render(){
        return(
            <nav id="desktopNav">
                <img src="/images/main-logo.svg" className="main-logo" alt="Company Logo"/>
                {this.renderMenu()}
                <span className="search-top"></span>
                <span className="shop-top"></span>
                <Subnavigation navItem={this.state.navItem}     
                    isActive={this.state.isActive}
                    closeMenu={this.activateMenu}>
                </Subnavigation>  
                <div className="season-switch">
                    <a href="./summerpage.html">
                        <img src="./images/icons/Clear.png" alt="" className="season-switch-button clickable"/>
                    </a>
                    <img src="./images/icons/HeavySnow.png" alt="" className="season-switch-button clickable season-active"/>                    
                </div>            
            </nav>
           
        );
    }
}




export default Navigation;