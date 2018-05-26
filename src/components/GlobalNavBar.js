import React, { Component } from 'react';
import {Nav, Navbar, NavItem, FormGroup, FormControl, Button, Glyphicon} from "react-bootstrap";
import './Nav.css';


/* This component is the navigation bar at the top of every page.*/
class GlobalNavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }
  //When something is entered in the search bar, the search value is updated in the state.
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  //When the search button is clicked, this will do something.
  handleSubmit = event => {
    alert("Coming soon");
  }

  //Renders the nav bar
  render() {
    return (
    <Navbar fluid>
      <Nav pullLeft>
        <NavItem eventKey={1} href="/profile">
        Social Network
        </NavItem>
        <NavItem>
          <Glyphicon glyph="list-alt" />
        </NavItem>
      </Nav>
        <Navbar.Form pullLeft>
          <form onSubmit={this.handleSubmit}>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>{' '}
              <Button type="submit">
                <Glyphicon glyph="search"/>
              </Button>
          </form>
        </Navbar.Form>
      <Nav pullRight>
        <NavItem eventKey={2} href="/AccountSettings">
          Account Settings
        </NavItem>
        <NavItem eventKey={3} href="/">
        Sign in
        </NavItem>
      </Nav>
    </Navbar>
    );
  }
}

export default GlobalNavBar;