import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login'
import Profile from './components/Profile'

import { Switch, BrowserRouter, Route } from 'react-router-dom';

const Root = () => {
  return (
  	<BrowserRouter>
	    <div className="container">
	    	<Switch>
	        <Route exact path="/" component={Login}/>
	        <Route exact path="/profile" component={Profile}/>
	        <Route exact path="*" component={Login}/>
	       </Switch>
	    </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));