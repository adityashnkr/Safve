  
import React from 'react';
import Header from './header';
import Quiz from './quiz';
import {  Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText,Form, FormGroup, Label, Input, FormText,Container,Row,Col } from 'reactstrap';
function Home(){
    return(
        <React.Fragment>
            <Header />
            <h1 className="text-center text-primary text-capitalize my-5">Learn to Save and Invest 💸</h1>
            <h4 className="text-center text-primary text-capitalize text-muted my-2 font-weight-light">Read & take a quiz to earn Stonkoins</h4>
            <br />
            <Container>
            <h2 className="text-left my-5">Popular Posts:</h2>
                <Row>
                    <Col className='sm'>
                    <Card style={{width: "25rem;"}}>
                    <img src="assets\coffee.gif" class="card-img-top" alt="..." />
                    <CardBody>
                        <CardTitle tag = "h5">Make your own coffee to save 💰</CardTitle>
                        <p class="card-text">Why spend 5$ on a coffee when you can make if for 20¢ ☕.</p>
                        <a href="/quiz" class="btn btn-primary">Read</a>
                    </CardBody>
                    </Card>
                    </Col>
                    <Col className='sm'>
                    <Card style={{width: "25rem;"}}>
                    <img src="assets\kevin.gif" class="card-img-top" alt="..." />
                    <CardBody>
                        <CardTitle tag = "h5">Start a side Hustle 💪</CardTitle>
                        <p class="card-text">Tips to start an effective side hustle to suppliment your income 💻.</p>
                        <a href="#" class="btn btn-primary">Read</a>
                    </CardBody>
                    </Card>
                        </Col>
                        <Col className='sm'>
                        <Card style={{width: "25rem;"}}>
                    <img src="assets\travel.gif" class="card-img-top" alt="..." />
                    <CardBody>
                        <CardTitle tag = "h5">Travel the world fo 0$🌍</CardTitle>
                        <p class="card-text">Learn to travel for free using Credit Cards💳.</p>
                        <a href="#" class="btn btn-primary">Read</a>
                    </CardBody>
                    </Card>
                        </Col>
                </Row>
                <br /> 
                <Row>
                    <Col className='sm'>
                    <Card style={{width: "25rem;"}}>
                    <img src="assets\crypto.gif" class="card-img-top" alt="..." />
                    <CardBody>
                        <CardTitle tag = "h5">[AD] How to invest in Crypto 🪙</CardTitle>
                        <p class="card-text">[Sponsored]Learn to invest in crypto from experts at Coinbase.</p>
                        <a href="#" class="btn btn-primary">Read</a>
                    </CardBody>
                    </Card>
                    </Col>
                    <Col className='sm'>
                    <Card style={{width: "25rem;"}}>
                    <img src="assets\stonks.gif" class="card-img-top" alt="..." />
                    <CardBody>
                        <CardTitle tag = "h5">[AD] These stocks will make you RICH🤑</CardTitle>
                        <p class="card-text">[Sponsored]Invest in these stocks picked by experts at Webull 📈.</p>
                        <a href="#" class="btn btn-primary">Read</a>
                    </CardBody>
                    </Card>
                        </Col>
                        <Col className='sm'>
                        <Card style={{width: "25rem;"}}>
                    <img src="assets\vacation.gif" class="card-img-top" alt="..." />
                    <CardBody>
                        <CardTitle tag = "h5">[AD] Find the cheapest airlines and hotels in minutes ✈️.</CardTitle>
                        <p class="card-text">[Sponsored] Use Expedia to book your next travel 🧳.</p>
                        <a href="#" class="btn btn-primary">Read</a>
                    </CardBody>
                    </Card>
                        </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Home;