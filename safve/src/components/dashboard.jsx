import React, { Component} from 'react';
import Header from './header';
import Info from './info'
import Visuals from './visuals'
import { Container, Row, Col } from 'reactstrap';
class Dashboard extends Component {
    render() {

        return (
            <div>
                <Header />
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
            </div>
                )
    }

}

export default Dashboard;

