import React, { Component } from 'react';
import  PrimaryHero from '../../primaryHero/primaryHero';
import WeatherWidget from '../../weatherwWidget/weatherwWidget';
import Sidebar from '../../sidebar/sidebar';
import Contact from '../../contact/contact';
import FooterNav from '../../footerNav/footerNav';
import './eventsDetail.scss';

class EventsDetail extends Component{
    componentData = {
        heading: "The Adventure Begins Event",
        subheading: "WILD MOUNTAIN EVENTS",
        backgroundImage: 'url("./images/heroes/event1.jpg")'
    }
    event = {};
    constructor(props){        
        super(props);  
    }

    render(){
        const {event} =this.props.location.state;

        return(
            <div className="main-content" id="events">
                <WeatherWidget></WeatherWidget>
                <PrimaryHero heroData={this.componentData} >                    
                </PrimaryHero>
                <div className="cm-content">
                    <div className="page-content event-detail">
                        <h2>{event.date}</h2>
                        <h3>{event.title}</h3>
                     <p>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque metus leo, lobortis eu dictum non, aliquam vel massa. Suspendisse ullamcorper mauris quis arcu varius laoreet. Aliquam commodo tellus ipsum, quis sollicitudin metus cursus at. Ut a libero a massa vestibulum sodales non vel metus. Vivamus ac felis aliquet, accumsan enim et, dignissim orci. Aenean tempor purus vel massa tristique, non rhoncus metus rutrum. Maecenas id suscipit justo. Integer aliquam nisi sed erat faucibus, eu eleifend ante placerat. Vestibulum euismod velit nec enim tincidunt, eu suscipit libero laoreet. Nulla varius nulla rhoncus felis egestas, eget dictum tortor posuere. Quisque mollis leo ut suscipit dignissim.
                         <br/><br/> 
                         Mauris aliquam sapien et blandit pharetra. In congue convallis tortor et semper. Duis nisl magna, bibendum non purus sed, ultrices placerat orci. Fusce mattis libero dolor, vitae cursus lorem aliquet sit amet. Praesent molestie magna turpis, at pharetra sem interdum rutrum. Suspendisse commodo varius molestie. Sed molestie diam in ante placerat vehicula. Sed commodo lacinia risus quis dictum. Etiam maximus vulputate ex eu maximus. Fusce finibus, urna ut eleifend tincidunt, metus diam imperdiet magna, vel egestas velit diam vel purus. Cras faucibus rhoncus turpis, vitae sollicitudin lorem. 
                         <br/><br/> 
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque metus leo, lobortis eu dictum non, aliquam vel massa. Suspendisse ullamcorper mauris quis arcu varius laoreet. Aliquam commodo tellus ipsum, quis sollicitudin metus cursus at. Ut a libero a massa vestibulum sodales non vel metus. Vivamus ac felis aliquet, accumsan enim et, dignissim orci. Aenean tempor purus vel massa tristique, non rhoncus metus rutrum. Maecenas id suscipit justo. Integer aliquam nisi sed erat faucibus, eu eleifend ante placerat. Vestibulum euismod velit nec enim tincidunt, eu suscipit libero laoreet. Nulla varius nulla rhoncus felis egestas, eget dictum tortor posuere. Quisque mollis leo ut suscipit dignissim.
                         <br/><br/> 
                         Mauris aliquam sapien et blandit pharetra. In congue convallis tortor et semper. Duis nisl magna, bibendum non purus sed, ultrices placerat orci. Fusce mattis libero dolor, vitae cursus lorem aliquet sit amet. Praesent molestie magna turpis, at pharetra sem interdum rutrum. Suspendisse commodo varius molestie. Sed molestie diam in ante placerat vehicula. Sed commodo lacinia risus quis dictum. Etiam maximus vulputate ex eu maximus. Fusce finibus, urna ut eleifend tincidunt, metus diam imperdiet magna, vel egestas velit diam vel purus. Cras faucibus rhoncus turpis, vitae sollicitudin lorem.
                     </p>
                    </div>          
                    <Sidebar></Sidebar>
                </div>
                <Contact></Contact>
                <FooterNav></FooterNav>

                
            </div>
        )
    }


}

export default EventsDetail;