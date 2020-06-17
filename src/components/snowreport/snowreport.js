import React, { Component } from 'react'
import  PrimaryHero from '../primaryHero/primaryHero';
import WeatherWidget from '../weatherwWidget/weatherwWidget';
import Contact from '../contact/contact'
import FooterNav from '../footerNav/footerNav'
import LoadingSpinner from '../loadingSpinner/loadingSpinner';
import './snowReport.scss';
import SecondaryHero from '../secondaryHero/secondaryHero';
import axios from 'axios';


class SnowReport extends Component{
    componentData = {
        heading: "Mountain & Conditions Report",
        subheading: "THE SUBTITLE IS IN ALL CAPS",
        backgroundImage: 'url("/images/heroes/reportHero.jpg")'
    }

    constructor(props){
        super(props);
    }

    componentDidMount(){
        // axios.get('http://schweitzer.local/GetSnowReportData').then(response=>{
        //     console.log(response.data.Trails[0].TrailName);
        //     this.setState({snowReportData: response.data});
        // })
        axios.get('http://schweitzer.staging.dirigodev.com/GetSnowReportData').then(response=>{
            console.log(response.data.Trails[0].TrailName);
            this.setState({snowReportData: response.data});
        })
    }

    render(){
        return(
            <div id="SnowReport">
                <WeatherWidget></WeatherWidget>
                <PrimaryHero heroData={this.componentData} >                    
                </PrimaryHero>   
                
                {this.state ?  
                <div className="content">    
                    <div className="intro-section">
                        <div className="heading-section">
                            <h1>A Note</h1>
                            <h2>FROM OUR SNOW REPORTER</h2>
                        </div>                        
                        <div className="snow-section">
                            <h2>So Much Snow</h2>
                            <h3>DECEMBER 24, 2020</h3>
                            <span></span>
                            <p>The past week of weather has brought an astonishing amount of the fluffy white stuff. Lifts are …</p>
                            <a>read more</a>
                        </div>

                    </div>               
                    <div className="report-count">
                        <h1>Lift & Trail Snapshot</h1>
                        <div className="counter-container">
                            <div className="counter">
                                <h2 className="open-number">{this.state.snowReportData.OpenLiftCount}</h2>
                                <p className="total-number">/ {this.state.snowReportData.LiftCount}</p>
                                <h3 className="counter-title">Lifts Open</h3>
                                <a>view lift status</a>
                            </div>
                            <div className="counter">
                                <h2 className="open-number">{this.state.snowReportData.OpenTrailCount}</h2>
                                <p className="total-number">/ {this.state.snowReportData.TrailCount}</p>
                                <h3 className="counter-title">Trails Open</h3>
                                <a>view trails status</a>
                            </div>
                            <div className="counter">
                                <h2 className="open-number">{this.state.snowReportData.GroomedCount}</h2>
                                <p className="total-number">/ {this.state.snowReportData.TrailCount}</p>
                                <h3 className="counter-title">Groomed Trails</h3>
                                <a>view trails status</a>
                            </div>
                        </div>                    
                    </div>           
                    <div className="weather-container">
                        <h1>Extended Forecast</h1>
                        <div className="weather-info">
                            <div className="day-info">
                                <h3 className="day">THURSDAY DECEMBER 18th</h3>
                                <img className="weather-icon" src="/images/icons/snowreport/MostlySunny.svg"></img>
                                <h2 className="temperature">54F</h2>
                                <p className="weather">Partly Cloudy</p>
                            </div>
                            <div className="day-info">
                                <h3 className="day">THURSDAY DECEMBER 18th</h3>
                                <img className="weather-icon" src="/images/icons/snowreport/PartlyCloudy.svg"></img>
                                <h2 className="temperature">49F</h2>
                                <p className="weather">Cloudy</p>
                            </div>
                            <div className="day-info">
                                <h3 className="day">THURSDAY DECEMBER 18th</h3>
                                <img className="weather-icon" src="/images/icons/snowreport/Rain.svg"></img>
                                <h2 className="temperature">52F</h2>
                                <p className="weather">Rain</p>
                            </div>
                            <div className="day-info">
                                <h3 className="day">THURSDAY DECEMBER 18th</h3>
                                <img className="weather-icon" src="/images/icons/snowreport/Snow.svg"></img>
                                <h2 className="temperature">48F</h2>
                                <p className="weather">Snow</p>
                            </div>
                        </div>    
                    </div>           
                     <SecondaryHero></SecondaryHero>   
                     <div className="status-container">
                         <h1>Lift & Trail Status</h1>
                         <div className="filters">
                             <select>
                                 <option>Status</option>
                             </select>
                             <select>
                                 <option>Difficulty</option>
                             </select>
                         </div>
                         {this.renderStatusList()}
                     </div>
                </div>   
                      : <LoadingSpinner></LoadingSpinner>}
                         
               <Contact></Contact>
               <FooterNav></FooterNav>
            </div>
        )
    }

    renderStatusList(){
       console.log( this.state.snowReportData.Lifts[0]);
        return (           
            this.state.snowReportData.Lifts.map((lift, indexLift)=> (               
                
                <div key={lift.LiftId}>
                    <div className="lift-heading">
                        <h3 className="lift-name">{lift.Title}</h3>
                        {
                            lift.LiftStatus.Title == "Open"? 
                            <img className="lift-status-icon" src="/images/icons/snowreport/icon_snowreport_open.svg"></img> :
                            <img className="lift-status-icon" src="/images/icons/snowreport/icon_snowreport_closed.svg"></img> 
                        }
                        <p className="lift-summary">{lift.HoursOfOperation} / {lift.RideTime}</p>
                    </div>
                    {this.preRenderTrails(this.state.snowReportData.Trails.filter(x=> x.PrimaryLiftId == lift.LiftId))}                    
                </div>                        
            ))           
        )
    }

    preRenderTrails(trailsList){
        let trailByTable = trailsList.length % 2 == 0 ? trailsList.length / 2 :  (trailsList.length / 2) + 1;
        console.log({
            trailsLength: trailsList.length,
            trailsByTable: trailByTable,
            firstTable: trailsList.slice(0, trailByTable),
            secondTable: trailsList.slice(trailByTable, trailsList.length)
        });

        return(
            <div className="table-container">
                {this.renderTrails(trailsList.slice(0, trailByTable))}
                {this.renderTrails(trailsList.slice(trailByTable, trailsList.length))}
            </div>
        )
    }

    renderTrails(trailsList){
        return(     
            <table className="table-status">
                <thead>
                  <tr>
                    <th className="name-column">Status / Trail Name</th>
                    <th className="difficulty-column">Difficulty</th>
                    <th className="others-column">Others</th>
                  </tr>
                </thead>  
                <tbody>
                    {trailsList.map((trail, indexTrail)=>{
                        let diffLevel = trail.DifficultyLevel.Title;
                        let diffLevelIcon = "/images/icons/snowreport/icon_snowreport_" + diffLevel.split(' ').join('') + ".svg";
                        return( 
                        <tr key={trail.TrailId}>
                            <td className="name-column">
                                {
                                    trail.Open ? 
                                    <img src="/images/icons/snowreport/icon_snowreport_open.svg" className="report-icon"></img> :
                                    <img src="/images/icons/snowreport/icon_snowreport_closed.svg" className="report-icon"></img> 
                                }
                                <p>{trail.TrailName}</p>
                            </td>                   
                                {
                                diffLevel == "Double-Black Diamond" ? 
                                    (<td className="difficulty-column">
                                        <img src="/images/icons/snowreport/icon_snowreport_blackDiamond.svg" className="report-icon"></img> 
                                        <img src="/images/icons/snowreport/icon_snowreport_blackDiamond.svg" className="report-icon"></img>
                                    </td>) : 
                                    <td className="difficulty-column">
                                        <img src={diffLevelIcon} className="report-icon"></img>
                                    </td>
                                }
                                {this.renderOtherColum(trail)}
                        </tr>
                        )                    
                        })}
                </tbody>
             </table>               
        )
    }

    renderOtherColum(trail){
        return(
        <td className="others-column">
            {trail.Gladed ? <img className="report-icon" src="/images/icons/snowreport/icon_snowreport_gladed.svg"></img> : ""}
            {trail.Hold ? <img src="/images/icons/snowreport/icon_snowreport_hol.svg"></img> : ""}
            {trail.Racing ? <img src="/images/icons/snowreport/icon_snowreport_racecourse.svg"></img> : ""}
            {trail.Moguls ? <img src="/images/icons/snowreport/icon_snowreport_moguls.svg"></img> : ""}
            {trail.SnowMaking ? <img src="/images/icons/snowreport/icon_snowreport_snowmaking.svg"></img> : ""}

        </td>)
    }
}

export default SnowReport;