import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button
  } from 'reactstrap';
class Header extends Component {
    render() {
        return(
            <div>
            <Navbar color="dark" dark expand="md">
              <div className="container">
              <NavbarBrand className="mr-auto" href="/">Hello User 👋</NavbarBrand>
              {/* <NavbarToggler onClick={toggle} /> */}
              {/* <Collapse isOpen={isOpen} navbar> */}
                <Nav navbar>
                <NavItem>
                    <NavLink href="/">1000<img src="assets\pixil-frame-0.png" height="20" width="20" alt='Safve' ></img></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">Discover</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">Help</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/learn">Learn</NavLink>
                  </NavItem>
                </Nav>
              {/* </Collapse> */}
              </div>
            </Navbar>
          </div>
          
                )
    }
}

export default Header;
