import React from 'react'
import { Link } from 'react-router-dom';

class Subnavigation extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {isActive: false};
    }

    renderSubMenu = () =>{        
        if(this.props.navItem){            
            let subMenuItems = this.props.navItem.ChildrenItems.map((item, index)=>
                <ul key={index} className="sub-nav">
                    <span>{item.navLabel}</span>                    
                    {item.ChildrenItems.map((linkItem, linkItemIndex)=> 
                        <li key={linkItemIndex}>
                            <Link to={linkItem.link}>{linkItem.navLabel}</Link>
                        </li>
                    )}
                </ul>
            );           
            return(subMenuItems);           
        }
    }

    onCloseSubmenu = ()=>{
        // this.setState(state=> ({
        //     isActive: !this.state.isActive
        // }));
        this.props.closeMenu(null, this.props.navItem);
    }

    render(){
        return (
            <div  id="subNav" 
            className={this.props.isActive ? 'active-menu' : ''}>
                {this.renderSubMenu()}
                <span className="close-icon" onClick={this.onCloseSubmenu}></span>
            </div>
        )
    }
}

export default Subnavigation;