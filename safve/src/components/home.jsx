import React from 'react';
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
    Button,
    Container,Row,Col
  } from 'reactstrap';
function Home(){
    return(
        <>
            <Navbar color="dark" dark expand="md">
              <NavbarBrand className="mr-auto" href="/stonks"><img src="assets\pixil-frame-0.png" height="30" width="30" alt='Safve' ></img></NavbarBrand>
              <div>
                <Nav navbar>
                  <NavItem>
                    <NavLink href="/" className="mr-auto">Invest</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/" className="mr-auto">Help</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/learn" className="mr-auto">Learn</NavLink>
                  </NavItem>
                </Nav>
              </div>
            </Navbar>
            <Row>
            <Col className='sm my-5'>
            <h1 className="text-center text-primary text-capitalize my-5">Become a Stonker 📈</h1>
            <h3 className="text-center text-capitalize my-5 font-weight-normal">Save and Earn 💸</h3>
            <h5  className="text-center text-capitalize text-muted my-5 font-weight-light">Join 2 other Users who are earning money by saving money</h5>
            <div className="text-center"> 
            <Button href="/dash" className="btn btn-success">Join us</Button>
            </div>
            </Col>
            <img src="assets\stonks.gif"  class="img-fluid my-5 rounded"width="40%" />
            </Row>
            <Row>
            <Col className='sm my-5'>
            <img src="assets\rand1.png"  class="img-fluid"  width="90%"/>
            </Col>
            <Col className='sm my-5'>
            <h1 className="text-center text-primary text-capitalize my-5">Track your Spendings 👛</h1>
            <h3 className="text-center text-capitalize my-5 font-weight-normal">Save more to earn more money</h3>
            <h5  className="text-center text-capitalize text-muted my-5 font-weight-light">Invest with us to earn cashback on every transaction</h5>
            </Col>
            </Row>
            <Row>
            <Col className='sm my-5'>
            <h1 className="text-center text-primary text-capitalize my-5">Higher interactions = More Rewards 🎁</h1>
            <h3 className="text-center text-capitalize my-5 font-weight-normal">Your interaction will contribute to the better rewards for everyone</h3>
            <h5  className="text-center text-capitalize text-muted my-5 font-weight-light">Learn more about Stonkoin</h5>
            <div className="text-center"> 
            <Button href="/stonks" className="btn btn-success">Learn More</Button>
            </div>
            </Col>
            <img src="assets\rand2.png"  class="img-fluid my-5"  width="40%"/>
            </Row>
            <br />

        </>
    )
}

export default Home;