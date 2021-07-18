import React , { Component,useState,useEffect} from 'react';
import {db} from './firebase.js';
import {  Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText,Form, FormGroup, Label, Input, FormText,Container,Row,Col } from 'reactstrap';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';


function Visuals() {
    const [UserData, setUserData] = useState([]);

  useEffect(() => {
    db.collection("UserData").orderBy('topic').onSnapshot((snapshot) => {
      setUserData(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
var UserData2 = [];
var point;
var amt;
  UserData.forEach(element => {
      var topic = element.topic;
      var amount = Number(element.amount)
     
     if(point === topic){
     
        UserData2.pop();
        amount = amount+amt;
     }
      
    UserData2.push({value:amount,name:topic}) 
    point = topic;   
    amt = amount;  
  });

 console.log(UserData2);
 const data01 = UserData2;
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
                            <div className="home_row">
        {UserData.map((product) => (
          <div style={{}} >
         
             <h6 style={{margin:'0;'}}>{product.date}</h6>  
              {product.topic}
              {product.amount}
            
          </div>
        ))}
      </div>
                        </Card>
                        </div>
                        </div>
                    </CardBody>
                </Card>
            )
    }


export default Visuals;