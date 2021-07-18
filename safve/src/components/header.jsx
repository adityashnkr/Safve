import React, { Component,useState,useEffect } from 'react';
import {db} from './firebase';
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
function Header() {
  const [userCoins, setuserCoins] = useState([]);

  useEffect(() => {
    db.collection("UserCoins").where('user','==','TestUser').onSnapshot((snapshot) => {
      setuserCoins(snapshot.docs.map((doc) => doc.data()));
      
    });
  }, []);
  const usercoin = userCoins[0].coins;
        return(
            <div>
            <Navbar color="dark" dark expand="md">
              <div className="container">
              <NavbarBrand className="mr-auto" href="/dash">Hello User 👋</NavbarBrand>
              {/* <NavbarToggler onClick={toggle} /> */}
              {/* <Collapse isOpen={isOpen} navbar> */}
                <Nav navbar>
                <NavItem>
                    <NavLink href="/stonks">{usercoin} <img src="assets\pixil-frame-0.png" height="20" width="20" alt='Safve' ></img></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">Invest</NavLink>
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

export default Header;
