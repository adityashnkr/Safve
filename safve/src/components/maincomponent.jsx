import React ,{Component} from 'react';
import Home  from './home';
import Dashboard from './dashboard';
import Learn from './learn'
import Quiz from './quiz'
import Stonkoins from './stonkoin'
import Invest from './invest'
import Redeem from './redeem'
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    render(){
        const HomePage = () => {
            return (
                <Home />
                    )
        }
        const DashBoard = () => { 
            return(
                <Dashboard />
                )
        }
        const LearnPage = () => {
            return(
                <Learn />)
        }
        const quizPage = () => {
            return(
                <Quiz />)
        }
        const stonks = () => {
            return(
                <Stonkoins />)
        }
        const investPage = () => {
            return(
                <Invest />)
        }
        const redeemPage = () => {
            return(
                <Redeem />)
        }
        return(
            <div>
                <Switch>
                <Route path="/home" component = { HomePage } />
                <Route exact path="/dash" component = { DashBoard } />
                <Route exact path="/learn" component = { LearnPage } />
                <Route exact path="/quiz" component = { quizPage } />
                <Route exact path="/stonks" component = { stonks } />
                <Route exact path="/invest" component = { investPage } />
                <Route exact path="/redeem" component = { redeemPage } />
                <Redirect to="/home" />
                </Switch>
                </div>
                )
    }

}


export default Main;
