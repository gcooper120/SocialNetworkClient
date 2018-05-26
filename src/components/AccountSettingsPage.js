import React, { Component } from "react";
import GlobalNavBar from './GlobalNavBar';
import { isLoggedIn } from '../utils/authentication-api.js';
import { getProfileData, changeName } from '../utils/profileData-api.js'
import {Grid, Row, Col, Glyphicon, FormGroup, FormControl, Button, Form} from "react-bootstrap";
import './AccountSettingsPage.css'



//	This component is used to change account details such as name, birthday and profile picture
class AccountSettingsPage extends Component {

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

  componentWillMount() {
    var self = this
    //This is used to ensure the page is protected. If a user is not logged in, they are redirected to the home page.
    isLoggedIn().then(function(e) {
      if (e === false) {
        self.props.history.push('/')
      }
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleClick = param => event => {
    var data = {
      e: "from client",
    };
    changeName(data).then(e => {}, e => {console.log(e)});
    alert("Clicked" + param);
    event.preventDefault();
  }

	render() {
		return (
			<div>
				<GlobalNavBar />
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={6}>
              <h1>Name:</h1>
            </Col>
            <Col xs={12} md={6}>
              <Form inline onSubmit={this.handleClick('name')}>
                <FormGroup controlId="Name" bsSize="large">
                  <FormControl
                    autoFocus
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <Button
                  inline="inline"
                  bsSize="large"
                  type="submit"
                >
                  <Glyphicon glyph="saved" />
                </Button>
              </Form>
            </Col>
          </Row>

          <Row className="show-grid evenRow">
            <Col xs={12} md={6}>
              <h1>City:</h1>
            </Col>
            <Col xs={12} md={6}>
              <Form inline onSubmit={this.handleClick('city')}>
                <FormGroup controlId="City" bsSize="large">
                  <FormControl
                    autoFocus
                    type="text"
                    value={this.state.city}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <Button
                  inline="inline"
                  bsSize="large"
                  type="submit"
                >
                  <Glyphicon glyph="saved" />
                </Button>
              </Form>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} md={6}>
              <h1>State:</h1>
            </Col>
            <Col xs={12} md={6}>
              <Form inline onSubmit={this.handleClick('state')}>
                <FormGroup controlId="City" bsSize="large">
                  <FormControl
                    autoFocus
                    type="text"
                    value={this.state.city}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <Button
                  inline="inline"
                  bsSize="large"
                  type="submit"
                >
                  <Glyphicon glyph="saved" />
                </Button>
              </Form>
            </Col>
          </Row>

          <Row className="show-grid evenRow">
            <Col xs={12} md={6}>
              <h1>Country:</h1>
            </Col>
            <Col xs={12} md={6}>
              <Form inline onSubmit={this.handleClick('country')}>
                <FormGroup controlId="City" bsSize="large">
                  <FormControl
                    autoFocus
                    type="text"
                    value={this.state.country}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <Button
                  inline="inline"
                  bsSize="large"
                  type="submit"
                >
                  <Glyphicon glyph="saved" />
                </Button>
              </Form>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} md={6}>
              <h1>City:</h1>
            </Col>
            <Col xs={12} md={6}>
              <Form inline onSubmit={this.handleClick('birthday')}>
                <FormGroup controlId="Birthday" bsSize="large">
                  <FormControl
                    autoFocus
                    type="date"
                    value={this.state.birthday}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <Button
                  inline="inline"
                  bsSize="large"
                  type="submit"
                >
                  <Glyphicon glyph="saved" />
                </Button>
              </Form>
            </Col>
          </Row>
          <Row className="show-grid evenRow">
            <Col xs={12} md={6}>
              <h1>City:</h1>
            </Col>
            <Col xs={12} md={6}>
              <Form inline onSubmit={this.handleClick('about')}>
                <FormGroup controlId="AboutText" bsSize="large">
                  <FormControl
                    componentClass="textarea"
                    placeholder={this.state.aboutText}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <Button
                  inline="inline"
                  bsSize="large"
                  type="submit"
                >
                  <Glyphicon glyph="saved" />
                </Button>
              </Form>
            </Col>
          </Row>
        </Grid>
			</div>
			);
	}

}
export default AccountSettingsPage
