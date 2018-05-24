import React, { Component } from "react";
import GlobalNavBar from './GlobalNavBar';
import AboutMe from './AboutMe';
import { isLoggedIn } from '../utils/authentication-api.js';

//	This component is pretty much just a wrapper for the profile.
//	Presently it just renders the nav bar and about me section, but in the future will render the whole profile
class ProfilePage extends Component {

  componentWillMount() {
    var self = this
    //This is used to ensure the page is protected. If a user is not logged in, they are redirected to the home page.
    isLoggedIn().then(function(e) {
      if (e === false) {
        self.props.history.push('/')
      }
    });
  }

	render() {
		return (
			<div>
				<GlobalNavBar />
				<AboutMe />
			</div>
			);
	}

}
export default ProfilePage
