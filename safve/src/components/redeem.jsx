import React from 'react';
import Header from './header';
import {  Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText,Form, FormGroup, Label, Input, FormText,Container,Row,Col } from 'reactstrap';

function Redeem(){
    return(
        <React.Fragment>
            <Header />
            <h1 className="text-center text-capitalize my-5">Invest with our partner to earn cahback on every transaction 💸</h1>
            <h2 className="text-center  text-capitalize  my-5 font-weight-normal">Get 0.5 stonkoin for every 10$</h2>
            <h3  className="text-center text-primary text-capitalize text-muted my-5 font-weight-normal">Apes strong together baking tendies with diamond hands💎🙌.</h3>
            <h4  className="text-center text-primary text-capitalize text-muted my-5 font-weight-light">0 Commissions and no deposit minimums.
<br/><br/>Everyone gets smart tools for smart investing.Diversifying your portfolio with a comprehensive suite of investment products including stocks, fractional shares, options, ETFs, and ADRs.
<br/><br/>Different types of brokerage accounts to satisfy your different investment objectives.<br/><br/>Everyone has access to our advanced and fully customizable desktop platform. You can consolidate your watchlists, analyze charts, place orders, and check your positions across all of platforms
</h4>
                <img src="assets\pepi-stojanovski-MJSFNZ8BAXw-unsplash.jpg" alt="invest photo" width="100%" height="700"/>
                <h1 className="text-center text-capitalize my-5">Your support will help add more money to the liquidity for stonkoin</h1>
            <h4 className="text-center text-primary text-capitalize text-muted my-5 font-weight-normal">Learn how stonkoin works</h4>
            <div className="text-center"> 
            <Button href="/stonks" className="btn btn-success">Learn More</Button>
            </div>
        </React.Fragment>
            )
}


export default Redeem;