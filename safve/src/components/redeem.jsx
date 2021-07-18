import React from 'react';
import Header from './header';
import {  Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText,Form, FormGroup, Label, Input, FormText,Container,Row,Col } from 'reactstrap';

function Redeem(){
    return(
        <React.Fragment>
            <Header />
            <h1 className="text-center text-primary text-capitalize my-5">Redeem 👛</h1>
            <h4 className="text-center text-primary text-capitalize text-muted my-2 font-weight-light">You can redeem your Stonkoins but we suggest to HODL</h4>
            <br />
            <Container>
            <h2 className="text-left my-5">Redeem:</h2>
                <Row>
                    <Col className='sm'>
                    <Card style={{width: "25rem;"}}>
                    <img src="assets\paypal.jpg" class="card-img-top" alt="..." />
                    <CardBody>
                        <CardTitle tag = "h5">Paypal gift card</CardTitle>
                        <p class="card-text">Get paypal gift card.</p>
                        <a href="/quiz" class="btn btn-primary">Reedeem</a>
                    </CardBody>
                    </Card>
                    </Col>
                    <Col className='sm'>
                    <Card style={{width: "25rem;"}}>
                    <img src="assets\pepi-stojanovski-MJSFNZ8BAXw-unsplash.jpg" class="card-img-top" alt="..." />
                    <CardBody>
                        <CardTitle tag = "h5">Bank Deposit</CardTitle>
                        <p class="card-text">Might take 3-5 businees days.</p>
                        <a href="#" class="btn btn-primary">Reedeem</a>
                    </CardBody>
                    </Card>
                        </Col>
                        <Col className='sm'>
                        <Card style={{width: "25rem;"}}>
                    <img src="assets\coinbase.jpg" class="card-img-top" alt="..." />
                    <CardBody>
                        <CardTitle tag = "h5">Crypto</CardTitle>
                        <p class="card-text">Get BTC to your Coinbase account.</p>
                        <a href="#" class="btn btn-primary">Reedeem</a>
                    </CardBody>
                    </Card>
                        </Col>
                </Row>
                <br /> 

            </Container>
        </React.Fragment>
            )
}


export default Redeem;