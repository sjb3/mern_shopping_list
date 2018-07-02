import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
  } from 'reactstrap';

export default class AppNavBar extends Component {
  constructor(props) {
    super(props);
    // instead binding functions, you can adopt ES6 way in function
    // this.toggle = this.toggle.bind(this);
    // this state actually can be extracted and stand alone not enclosed in constructor
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className='mb-5'>
          <Container>
            <NavbarBrand href="/">Shopping List for Debbie</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <NavLink href='https://github.com/sjb3/mern_shopping_list' target="_blank" rel="noopener noreferrer">
                    GitHub
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}
