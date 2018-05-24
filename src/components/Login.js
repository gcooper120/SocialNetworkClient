import React, { Component } from "react";
import GlobalNavBar from './GlobalNavBar';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { login } from '../utils/authentication-api';
import "./Login.css"

/*  This component handles the log in page.*/
class Login extends Component {
	constructor(props) {
		super(props);
    this.newUser = this.newUser.bind(this);
		this.state = {
			email: "",
			password: "",
		};
	}
  //  Ensures that the email and password fields are not empty.
  //  In the future this will perform more validation tests.
	validateForm() {
		return this.state.email.length > 0 && this.state.password.length > 0;
	}

  // Changes the state of the component whenever text is entered
	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	}
  //  When the form is submitted, the data is put in a json object and send as an argument to the login function imported from authentication-api.
	handleSubmit = event => {
    var data = {
      "email": event.target.email.value,
      "password": event.target.password.value
    }
    //On an unsuccessful login, the program will run the first function, and the second on failure.
    login(data).then(e => {
    //  The login function should return a status of 200 on successful login. We then redirect to the /profile page
    if (e.status === 200) {
      this.props.history.push('/profile')
    } else {
      console.log("Something went wrong..." + e);
    }
    }, e=> {console.log("Failed to login");});
    event.preventDefault();
  }

  // This is the button handler for the create nw user button.
  newUser = event => {
    event.preventDefault()
    window.location.assign('/register')
  }


  //  Renders the component
	render() {
		return (
      <div>
        <GlobalNavBar />
        <h1>Welcome Home!</h1>
        <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
          <Button
            onClick= {this.newUser}
            block
            bsSize="large"
            type="button"
          >
            New User?
          </Button>
        </form>
      </div>
      </div>
			
		);
	}
}

export default Login