import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './Routes/App'
import RunData from './Routes/RunData'

const routs = (
   <Router>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/runData" component={RunData}/>
        <Route path="/liveTelemetry" component={App}/>
        <Route path="/recordedTelemetry" component={RunData}/>
        <Route path="/about" component={App}/>]
      </div>
   </Router>
);
ReactDOM.render(routs, document.getElementById('root'));