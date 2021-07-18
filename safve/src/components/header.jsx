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
              <NavbarBrand className="mr-auto" href="/dash">Hello User 👋</NavbarBrand>
                <Nav navbar>
                <NavItem>
                    <NavLink href="/stonks">1000 <img src="assets\pixil-frame-0.png" height="20" width="20" alt='Safve' ></img></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/invest">Invest</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/redeem">Reedeem</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/learn">Learn</NavLink>
                  </NavItem>
                </Nav>
              </div>
            </Navbar>
          </div>
          
                )
    }
}

export default Header;