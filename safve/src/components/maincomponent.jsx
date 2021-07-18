import React ,{Component} from 'react';
import Home  from './home';
import Dashboard from './dashboard';
import Learn from './learn'
import Quiz from './quiz'
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
        return(
            <div>
                <Switch>
                <Route path="/home" component = { HomePage } />
                <Route exact path="/dash" component = { DashBoard } />
                <Route exact path="/learn" component = { LearnPage } />
                <Route exact path="/quiz" component = { quizPage } />
                <Redirect to="/home" />
                </Switch>
                </div>
                )
    }

}


export default Main;
