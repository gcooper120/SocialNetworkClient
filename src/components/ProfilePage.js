import React, { Component } from "react";
import GlobalNavBar from './GlobalNavBar';
import AboutMe from './AboutMe';

class ProfilePage extends Component {


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
