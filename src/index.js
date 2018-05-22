import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login'
import AboutMe from './components/AboutMe'
import ProfilePage from './components/ProfilePage'
import NewUserForm from './components/NewUserForm'

import { Switch, BrowserRouter, Route } from 'react-router-dom';

const Root = () => {
  return (
  	<BrowserRouter>
	    <div className="container">
	    	<Switch>
	        <Route exact path="/" component={Login}/>
	        <Route exact path="/AboutMe" component={AboutMe}/>
	        <Route exact path="/profile" component={ProfilePage}/>
	        <Route exact path="/register" component={NewUserForm}/>
	        <Route exact path="*" component={Login}/>
	       </Switch>
	    </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));