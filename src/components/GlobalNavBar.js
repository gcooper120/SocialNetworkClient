import React, { Component } from 'react';
import {Nav, Navbar, NavItem, FormGroup, FormControl, Button, Glyphicon} from "react-bootstrap";
import './Nav.css';


class myNav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    alert("Coming soon");
  }

  render() {
    return (
    <Navbar fluid>
      <Nav pullLeft>
        <NavItem eventKey={1} href="/">
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
        <NavItem eventKey={1} href="/">
          Account Settings
        </NavItem>
        <NavItem eventKey={1} href="/">
        Sign in
        </NavItem>
      </Nav>
    </Navbar>

    //   <nav className="navbar navbar-default">
    //     <div className="navbar-header">
    //       <Link className="navbar-brand" to="/">Social Network</Link>
    //     </div>
    //     <div className="navbar-header">
    //       <i className="material-icons navbar-text">priority_high</i>
    //     </div>
    //     <div>
    //       <form class="form-inline">
    //         <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
    //         <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    //       </form>
    //     </div>
    //     <div class="">
    //       <button className="btn btn-info log">Settings</button>
    //       <button className="btn btn-danger log">Log out </button>
    //     </div>
    //   </nav>
    );
  }
}

export default myNav;