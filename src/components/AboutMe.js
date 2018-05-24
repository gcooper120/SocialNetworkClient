import React, { Component } from "react";
import { getProfileData } from '../utils/profileData-api.js'
import {Grid, Row, Col, Image} from "react-bootstrap";

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