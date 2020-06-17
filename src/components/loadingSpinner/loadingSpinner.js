import React, { Component } from 'react';
import './loadingSpinner.scss';

class LoadingSpinner extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div id="loadingSpinner">
                <h1>Loading... Please wait</h1>
            </div>
        )
    }
}

export default LoadingSpinner;