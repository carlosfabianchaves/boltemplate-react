import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './navigationMobile.scss';

class NavigationMobile extends Component{
    navigationItems = [
        {   id: 1,     
            navLabel: "Explore the Resort",
            ChildrenItems : [
                {
                    navLabel: "Example Pages",
                    ChildrenItems: [ 
                        {navLabel: "Events", link: "/events"},
                        {navLabel: "Snow Report", link: "/snowreport"}
                ]
                },
                {
                    navLabel: "Placeholder",
                    ChildrenItems: [ {navLabel: "Events", link: "/events"}]
                }
            ]
        },
        {     
            id:2,   
            navLabel: "The Mountain",
            ChildrenItems : [
                {
                    navLabel: "The Mountain 1",
                    ChildrenItems: [ {navLabel: "Events", link: "/events"}]
                },
                {
                    navLabel: "The Mountain 2",
                    ChildrenItems: [ {navLabel: "Events", link: "/events"}]
                }
            ]
        },
        {     
            id:2,   
            navLabel: "Lessons & Rentals",
            ChildrenItems : [
                {
                    navLabel: "Lessons & Rentals 1",
                    ChildrenItems: [ {navLabel: "Events", link: "/events"}]
                },
                {
                    navLabel: "Lessons & Rentals 2",
                    ChildrenItems: [ {navLabel: "Events", link: "/events"}]
                }
            ]
        },
        {     
            id:2,   
            navLabel: "Lodging & Specials",
            ChildrenItems : [
                {
                    navLabel: "L & S 1",
                    ChildrenItems: [ {navLabel: "Events", link: "/events"}]
                },
                {
                    navLabel: "L & S 1 2",
                    ChildrenItems: [ {navLabel: "Events", link: "/events"}]
                }
            ]
        }
    ];
    constructor(props){
        super(props);
        this.state = {isSubmenuOpen: false};
        
    }

    componentDidMount(){
        Array.from(document.getElementsByClassName('submenu-parent')).map((element, index)=> {
            element.addEventListener('click', this.handleSubmenuParentClik)
        });
    }

    handleSubmenuParentClik(){
        var childs = Array.from(this.parentElement.getElementsByTagName('ul')).map((element, index)=>{
            element.classList.toggle('opened');
        });

    }
   

    getMovileMenu(){
        let allChildrenitems = []; 
         this.navigationItems.map((navItem, index)=>{
             allChildrenitems = [...allChildrenitems, ...navItem.ChildrenItems];
        });
        return allChildrenitems;
    }
    
    onOpenCloseSubmenu = ()=>{
        this.setState(state => ({isSubmenuOpen: !this.state.isSubmenuOpen}))
    }

    render(){
       let mobileNav = this.getMovileMenu();
        return(            
           <nav id="navMobile">
            <img src="./images/main-logo.svg" className="main-logo" alt="Company Logo"/>
            <div className={this.state.isSubmenuOpen ? "submenu-open sub-navigation" : "sub-navigation" }>
                {mobileNav.map((navItem, index)=> (
                    <ul key={index} className="mobile-submenu">
                        <li>
                            <span className="submenu-parent">{navItem.navLabel}</span>
                            <ul>
                                {navItem.ChildrenItems.map((subNavItem, subNavIndex)=> (
                                    <li key={subNavIndex}>
                                        <Link to={subNavItem.link}>{subNavItem.navLabel}</Link>                                        
                                    </li>
                                ))}                           
                            </ul>
                        </li>
                    </ul>
                ))} 
                <span className="close-icon" onClick={this.onOpenCloseSubmenu}></span>
            </div> 
            <span className="search-top"></span>
            <span className="shop-top"></span>     
            <div className="season-switch">
                <a href="./summerpage.html">
                    <img src="./images/icons/Clear.png" alt="" className="season-switch-button clickable"/>
                </a>
                <img src="./images/icons/HeavySnow.png" alt="" className="season-switch-button clickable season-active"/>                    
            </div>         
            <span id="mobileMenu" onClick={this.onOpenCloseSubmenu}></span>
           </nav>
        );
    }

    
}

export default NavigationMobile;