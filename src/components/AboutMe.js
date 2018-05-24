import React, { Component } from "react";
import { getProfileData } from '../utils/profileData-api.js'
import {Grid, Row, Col, Image} from "react-bootstrap";

/*  This component is responsible for the about me section of a profile.
 *  There are two parts to the about me section, the picture and information.
 *  The picture is rendered on the left, name, city, state and DOB are rendered on the right.
 */
class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      profPicUrl: "",
      aboutText: "",
      city: "",
      state: "",
      country: "",
      birthday: "",
    };
  }
//When the component mounts, we call the profileData api and get all of the necessary data from the database for a given user.
  componentDidMount() {
    getProfileData().then(results => {
      this.setState({name: results.name});
      this.setState({profPicUrl: results.profPicUrl});
      this.setState({aboutText: results.aboutText});
      this.setState({city: results.city});
      this.setState({state: results.state});
      this.setState({country: results.country});
      this.setState({birthday: results.birthday});

    });
  }

//The component is rendered as a grid with two rows.
  render() {
    return (
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={4}>
              <Image id="profPic" src={this.state.profPicUrl} responsive />
            </Col>
            <Col xs={12} md={8}>
            <h1>{this.state.name}</h1>
            <h3>{this.state.city} {this.state.state} {this.state.country}</h3>
            <h5>{this.state.birthday}</h5>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <p>
              {this.state.aboutText}
              </p>
            </Col>
          </Row>
        </Grid>
    );
  }
}

export default AboutMe