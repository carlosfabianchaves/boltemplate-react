import React, { Component } from 'react'
import  PrimaryHero from '../primaryHero/primaryHero';
import WeatherWidget from '../weatherwWidget/weatherwWidget';
import Sidebar from '../sidebar/sidebar';
import Contact from '../contact/contact';
import FooterNav from '../footerNav/footerNav';

class Events extends Component{

    componentData = {
        heading: "Wild Mountain Events",
        subheading: "THE SUBTITLE IS IN ALL CAPS",
        backgroundImage: 'url("./images/heroes/eventhero.jpg")'
    }
    constructor(props){
        super(props)
    }
    

    render(){
        return(
            <div className="main-content">
                <WeatherWidget></WeatherWidget>
                <PrimaryHero heroData={this.componentData} >                    
                </PrimaryHero>
                <div className="cm-content">
                    <div className="page-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque metus leo, lobortis eu dictum non, aliquam vel massa. Suspendisse ullamcorper mauris quis arcu varius laoreet. Aliquam commodo tellus ipsum, quis sollicitudin metus cursus at. Ut a libero a massa vestibulum sodales non vel metus. Vivamus ac felis aliquet, accumsan enim et, dignissim orci. Aenean tempor purus vel massa tristique, non rhoncus metus rutrum. Maecenas id suscipit justo. Integer aliquam nisi sed erat faucibus, eu eleifend ante placerat. Vestibulum euismod velit nec enim tincidunt, eu suscipit libero laoreet. Nulla varius nulla rhoncus felis egestas, eget dictum tortor posuere. Quisque mollis leo ut suscipit dignissim. 
                            <br/>
                            <br/>
                            <br/>
                            Mauris aliquam sapien et blandit pharetra. In congue convallis tortor et semper. Duis nisl magna, bibendum non purus sed, ultrices placerat orci. Fusce mattis libero dolor, vitae cursus lorem aliquet sit amet. Praesent molestie magna turpis, at pharetra sem interdum rutrum. Suspendisse commodo varius molestie. Sed molestie diam in ante placerat vehicula. Sed commodo lacinia risus quis dictum. Etiam maximus vulputate ex eu maximus. Fusce finibus, urna ut eleifend tincidunt, metus diam imperdiet magna, vel egestas velit diam vel purus. Cras faucibus rhoncus turpis, vitae sollicitudin lorem.
                        </p>
                        <br/>
                        <br/>
                        <img src="/images/contentimg1.jpg"/>
                        <p>
                        Donec sodales libero in diam eleifend, et pharetra sapien facilisis. In sed eleifend ante. Nulla porttitor eleifend vestibulum. Quisque efficitur, lacus eu pellentesque pretium, augue lacus posuere erat, quis mattis sapien mi non ligula. 
                        <br/>
                        <br/>
                        <br/>
                        Donec maximus eget ipsum quis efficitur. Nullam cursus odio sed nisl porta sagittis. Cras ultricies euismod neque, vel pretium dolor fermentum at. Suspendisse metus libero, dictum scelerisque sapien id, maximus lobortis nisi. Aliquam velit dolor, interdum eget nibh at, lacinia imperdiet risus. Curabitur non ipsum non erat posuere aliquet. In hac habitasse platea dictumst. Nulla facilisi. Praesent commodo nunc et varius sodales. Morbi sit amet convallis eros. Donec at urna eget arcu tristique fermentum vitae at urna. Ut semper velit molestie vulputate ullamcorper. Etiam tristique elit varius nisi porttitor rutrum. Aenean mattis nulla ut risus pretium venenatis. In nisl tortor, blandit non metus ut, auctor facilisis eros. Nullam leo mauris, fringilla non mattis vel, feugiat id justo. Pellentesque in massa in sem tempor vestibulum. Suspendisse nulla ex, tempus viverra ultrices hendrerit, volutpat dignissim magna. Maecenas et sem egestas, tincidunt sem vitae, ullamcorper nisl. Quisque a diam vitae lorem facilisis vestibulum. Suspendisse pellentesque gravida libero vitae vehicula. Aliquam rhoncus varius scelerisque. In vel odio interdum, posuere augue rutrum, dictum turpis. In eget diam arcu. Vivamus tincidunt accumsan diam nec tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec luctus velit nunc, sit amet ornare leo tincidunt vitae. Nunc fringilla at purus ac venenatis. Duis ac sapien consectetur, fringilla odio commodo, varius libero. Etiam eu ipsum bibendum, ultricies sem at, congue justo. Integer fermentum orci a tellus mattis, ac viverra neque ultrices. Ut a laoreet mi. Ut lobortis quis lacus vel vestibulum. In id metus erat. Cras ac tincidunt erat.
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

export default Events;