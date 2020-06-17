import React, { Component } from 'react'
import './symbolKey.scss';
class SymbolKey extends Component {
    render() {
        return (
            <div id="symbolKey">
                <h1>Symbol Key</h1>
                <h3>Status</h3>
                <div className="row">
                    <div className="key-content">
                        <img src="/images/icons/snowreport/icon_snowreport_open.svg"></img>
                        <label>Closed</label>
                    </div>
                    <div className="key-content">
                        <img src="/images/icons/snowreport/icon_snowreport_open.svg"></img>
                        <label>Closed</label>
                    </div>
                    <div className="key-content">
                        <img src="/images/icons/snowreport/icon_snowreport_open.svg"></img>
                        <label>Closed</label>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default SymbolKey;
