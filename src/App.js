import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

/*Import components*/
import Home from './components/home/home';
import Events from './components/events/events';
import Example1 from './components/example1/Example1';
import Navigation from './components/navigation/navigation';
import NavigationMobile from './components/navigationMobile/navigationMobile';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {screenWidth: window.innerWidth};
  }

  handleResize = () =>{
    this.setState(state=> ({screenWidth: window.innerWidth}));
  }

  componentDidMount(){
    window.addEventListener('resize', this.handleResize);  
  }
  render (){
    return (
      <Router basename={'/'}>
        <div className="App">        
          {this.state.screenWidth > 980 ? <Navigation></Navigation> :  <NavigationMobile></NavigationMobile>}
          <Switch>
            <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home}/>
            <Route path={`${process.env.PUBLIC_URL}/events`}  exact component={Events}/>
            <Route path={`${process.env.PUBLIC_URL}/example1`}  exact component={Example1}/>
          </Switch>        
        </div>
      </Router>
      
    );
  }

}






export default App;
