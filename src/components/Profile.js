import React, { Component } from "react";
import Nav from './Nav';
import { getProfilePicture } from '../utils/profileData-api';
import "./Profile.css";


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profPicUrl: ""
    };
  }

  componentDidMount() {
    getProfilePicture().then(results => {
      this.setState({profPicUrl: results});
    });
  }

	render() {
    var profPicUrl = this.state.profPicUrl;
		return (
      <div>
        <Nav />
        <div className = "Container">
        	<h1> Kevin Johnson </h1>
        	<img id="profPic" src={profPicUrl} alt="Profile"/>
        	<p>My name is Kevin and I am a photographer</p>
        </div>
      </div>
			
		);
	}
}

export default Profile