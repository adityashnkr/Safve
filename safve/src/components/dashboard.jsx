import React, { Component} from 'react';
import Header from './header';
import Info from './info'
import Visuals from './visuals'
import { Container, Row, Col } from 'reactstrap';
class Dashboard extends Component {
    render() {

        return (
            <React.Fragment>
                <Header />
                <h1 className="text-center text-primary text-capitalize my-5">Save more to Earn more 💸</h1>
                <h4 className="text-center text-primary text-capitalize text-muted my-2 font-weight-light">Input spendings below</h4>
                <br />
                <br />
                <Container>
                <Row>
                    <Col sm="4">
                        <Info />
                    </Col>
                    <Col sm="8">
                        <Visuals />
                    </Col>
                    <Col>
                    </Col>
                </Row>
                </Container>
            </React.Fragment>
                )
    }

}

export default Dashboard;

