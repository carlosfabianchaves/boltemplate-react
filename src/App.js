import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

/*Import components*/
import Home from './components/home/home';
import Events from './components/events/events';
import Example1 from './components/example1/Example1';
import Navigation from './components/navigation/navigation';
import NavigationMobile from './components/navigationMobile/navigationMobile';
import EventsDetail from './components/events/eventsDetail/eventsDetail';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      screenWidth: window.innerWidth,
      isWinter : true,
    };
  }

  handleResize = () =>{
    this.setState(state=> ({screenWidth: window.innerWidth, isWinter: this.state.isWinter}));
  }

  handleSeason = (isWinter) =>{
    this.setState(state=> ({screenWidth: window.innerWidth, isWinter: isWinter}));
    console.log(this.state);
  }

  componentDidMount(){
    window.addEventListener('resize', this.handleResize);  
  }
  render (){
    return (
      <Router basename={'/'}>
        <div className="App">        
          {this.state.screenWidth > 980 ? 
            <Navigation handleSeason={this.handleSeason} isWinter={this.state.isWinter}></Navigation> : 
            <NavigationMobile></NavigationMobile>}

          <Switch>
            <Route path={`${process.env.PUBLIC_URL}/`} exact component={props=> <Home isWinter={this.state.isWinter}></Home>}/>
            <Route path={`${process.env.PUBLIC_URL}/events`}  exact component={Events}/>
            <Route path={`${process.env.PUBLIC_URL}/eventsDetail`}  exact component={EventsDetail}/>
            <Route path={`${process.env.PUBLIC_URL}/example1`}  exact component={Example1}/>
          </Switch>        
        </div>
      </Router>
      
    );
  }

}






export default App;
