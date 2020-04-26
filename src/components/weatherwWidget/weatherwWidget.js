import React, { Component } from 'react';
import './weatherWidget.scss';


class WeatherWidget extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="weatherWidget">
                <div className="weather-detail">
                    <h4>Wednesday <br/>December 17th, 2018</h4>
                    <img src="./images/icons/PartlyCloudyDay.png"/>
                    <p className="weather-desc">
                        PARTLY CLOUDY WITH CHANCE OF RAIN IN EVENING
                    </p>
                    <span className="separator"></span>
                    <h3 className="surface">Packed Powder</h3>
                    <p className="weather-desc">
                      Surface
                    </p>
                    <span className="separator"></span>
                    <a className="btn-widget">VIEW FULL REPORT</a>
                </div>
                <div className="weather-summary">
                    <img src='./images/icons/PartlyCloudyDay.png'/>
                    <h3>65</h3>
                    <span className="separator"></span>
                    <h3>00"</h3>
                    <p className="surface">
                        Last 12h
                    </p>
                    <span className="separator"></span>
                    <h3>10"</h3>
                    <p className="surface">
                        Last 24h
                    </p>
                    <span className="separator"></span>
                    <h3>05"</h3>
                    <p className="surface">
                       BASE
                    </p>
                    <span className="separator"></span>                    
                    <h3>32"</h3>
                    <p className="surface">
                        Season
                    </p>
                    <span className="plus-icon"></span>
                    

                </div>
            </div>
        )
    }
}


export default WeatherWidget;