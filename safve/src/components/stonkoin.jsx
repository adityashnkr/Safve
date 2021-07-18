import React from 'react';
import Header from './header';
import {  Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText,Form, FormGroup, Label, Input, FormText,Container,Row,Col } from 'reactstrap';
function Stonkoins(){
    return(
        <>
        <Header />
        <Container>
            <Row>
            <Col className="sm my-5">
                <img src="assets\pixil-frame-0.png"  height="200" width="200" alt='Safve' />
                </Col>
                <Col className="my-5">
                <h1 className="text-center text-bold text-capitalize my-5">STONKOIN 📈</h1>
                <h4 className="text-center text-primary text-capitalize text-muted my-2 font-weight-light">Save More Earn More💸</h4>
            </Col>
            </Row>
            <br /><hr/><br />
            <Row>
            <Col className="sm">
            <h1 className="text-center text-primary text-capitalize my-5">We believe in giving back to our users 💖</h1>
            <h4 className="text-center  my-2 font-weight-light"> 30% of all our profits goes back to provide liquidity for Stonkoin.</h4>
            <h5 className="text-center my-3 font-weight-light"> 1 Stonkoin = Revenue X Number of Users / Secret Number 🤫</h5>
            </Col>
            </Row>
            <br /><hr/><br />
            <Row>
            <Col className="sm">
            <h1 className="text-center text-capitalize">More Users 🤑<br/> = </h1>
            </Col>
            </Row>
            <Row>
            <Col className="sm">
            <h1 className="text-center text-capitalize">More Revenue 💵<br/> = </h1>
            </Col>
            </Row>
            <Row>
            <Col className="sm">
            <div className="text-center">
            <img src="assets\stonks.gif" width="500"/>
            </div>
            </Col>
            </Row>
            <br /><hr/><br />
            <Row>
            <Col className="sm">
            <h1 className="text-center text-primary text-capitalize my-5">How can you earn Stonkoins</h1>
            <h4 className="text-center  my-2 font-weight-normal">Save more Earn More 💸</h4>
            <h5 className="text-center my-3 font-weight-light">Save more money that last week and get 0.001 Stonkoin for every 10$</h5>
            <br />
            <h4 className="text-center  my-2 font-weight-normal">Interact with the community 🧑🏻‍🤝‍🧑🏿</h4>
            <h5 className="text-center my-3 font-weight-light">Use the Learn section to interact with the community and earn stonkoins by answering quizzes</h5>
            <br />
            <h4 className="text-center  my-2 font-weight-normal">Invest with our Partner 🧑‍💻</h4>
            <h5 className="text-center my-3 font-weight-light">Get 0.5 Stonkoin for every 10$ invested with your Partner</h5>
            </Col>
            </Row>
        </Container>

        </>)
}

export default Stonkoins;