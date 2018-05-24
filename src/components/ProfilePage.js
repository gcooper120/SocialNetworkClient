import React, { Component } from "react";
import GlobalNavBar from './GlobalNavBar';
import AboutMe from './AboutMe';
import { isLoggedIn } from '../utils/authentication-api.js';


class ProfilePage extends Component {

  componentWillMount() {
    var self = this
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
