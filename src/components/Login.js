import React, { Component } from "react";
import Nav from './Nav';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { login } from '../utils/authentication-api';
import "./Login.css"

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}
	validateForm() {
		return this.state.email.length > 0 && this.state.password.length > 0;
	}

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	handleSubmit = event => {
    //Send these to api, do verification, do next thing.
    console.log(event.target.email.value)
    console.log(event.target.password.value)
    var data = {
      "email": event.target.email.value,
      "password": event.target.password.value
    }
    login(data.email, data.password).then(e => {
    console.log(e);
    });
		event.preventDefault();
	}


	render() {
		return (
      <div>
        <Nav />
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
        </form>
      </div>
      </div>
			
		);
	}
}

export default Login