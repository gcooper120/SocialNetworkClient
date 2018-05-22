import React, { Component } from "react";
import GlobalNavBar from './GlobalNavBar';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { newUser } from '../utils/newUser-api';
import "./NewUserForm.css"

class NewUserForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
      name: "",
			email: "",
      email2: "",
			password: "",
      password2: ""
		};
	}
	validateForm() {
		return this.state.name.length > 0 &&
    this.state.email.length > 0 && 
    this.state.password.length > 0 &&
    (this.state.email === this.state.email2) &&
    (this.state.password === this.state.password2);
	}

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	 handleSubmit = event => {
    console.log(event.target.email.value)
    console.log(event.target.password.value)
    var data = {
      "name": event.target.name.value,
      "email": event.target.email.value,
      "password": event.target.password.value
    }
    newUser(data).then(e => {
    console.log(e);
    });
    event.preventDefault();
  }


	render() {
		return (
      <div>
        <GlobalNavBar />
        <h1>Let's get started...</h1>
        <div className="NewUserForm">
        <form onSubmit={this.handleSubmit}>

          <FormGroup controlId="name" bsSize="large">
            <ControlLabel>Name</ControlLabel>
            <FormControl
              autoFocus
              type="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </FormGroup>
         
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="email2" bsSize="large">
            <ControlLabel>Retype Email</ControlLabel>
            <FormControl
              type="email"
              value={this.state.email2}
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

          <FormGroup controlId="password2" bsSize="large">
            <ControlLabel>Retype Password</ControlLabel>
            <FormControl
              value={this.state.password2}
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
            Create Account
          </Button>
        </form>
      </div>
      </div>
			
		);
	}
}

export default NewUserForm