import React , { Component} from 'react';
import {  Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText,Form, FormGroup, Label, Input, FormText,Container,Row,Col } from 'reactstrap';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
  ];

class Visuals extends Component {
    render() {
        return(
                <Card color='secondary' style={{width:"50rem",height:"28rem"}}>
                    <CardBody>
                        <div className="row">
                            <div className="col-sm-5">
                        <Card style={{width:"20rem",height:"25rem"}} className="text-center">
                            <CardTitle tag="h5">Breakdown</CardTitle>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart width={100} height={100}>
                            <Pie
                                dataKey="value"
                                isAnimationActive={false}
                                data={data01}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#26D7AB"
                                label
                            />
                            <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                        </Card>
                        </div>
                        <div className="col-sm-5">
                        <Card style={{width:"27rem",height:"25rem"}}  className="text-center">
                            <CardTitle tag="h5">Spendings</CardTitle>
                        </Card>
                        </div>
                        </div>
                    </CardBody>
                </Card>
            )
    }
}

export default Visuals;