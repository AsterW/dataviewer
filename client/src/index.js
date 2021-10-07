import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './Routes/App'
import Runs from './Routes/Runs'

const routs = (
   <Router>
      <div>
         <Route exact path="/" component={App}/>
         <Route path="/runs" component={Runs}/>
      </div>
   </Router>
);
ReactDOM.render(routs, document.getElementById('root'));