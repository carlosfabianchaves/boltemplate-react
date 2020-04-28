import React, { Component } from 'react'
import './navigation.scss'
import Subnavigation from './subnavigation/subnavigation'
import {returnNav} from '../navList';
import { Link } from 'react-router-dom';

class Navigation extends Component{
    
    navigationItems = returnNav();

    constructor(props){
        super(props);
        this.state = {activeMenuId: 0};
        
    }   

    activateMenu = (event, navItem) => {
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
                <Link to="/">
                    <img src="./images/main-logo.svg" className="main-logo" alt="Company Logo"/>
                </Link>
               
                {this.renderMenu()}
                <span className="search-top"></span>
                <span className="shop-top"></span>
                <Subnavigation navItem={this.state.navItem}     
                    isActive={this.state.isActive}
                    closeMenu={this.activateMenu}>
                </Subnavigation>  
                <div className="season-switch">
                    <a href="#" onClick={()=> {this.props.handleSeason(false)}}
                       className={this.props.isWinter ? "" : "season-active"}>
                        <img src="./images/icons/Clear.png" alt="" className="season-switch-button clickable"/>
                    </a>
                    <a onClick={()=> {this.props.handleSeason(true)}}
                       className={this.props.isWinter ? "season-active" : ""}>
                    <img src="./images/icons/HeavySnow.png" alt="" className="season-switch-button clickable"/>                    
                    </a>
                    
                </div>            
            </nav>
           
        );
    }
}




export default Navigation;