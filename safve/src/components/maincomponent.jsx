import React ,{Component} from 'react';
import Home  from './home';
import Dashboard from './dashboard';
import Learn from './learn'
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
        return(
            <div>
                <Switch>
                <Route path="/home" component = { HomePage } />
                <Route exact path="/dash" component = { DashBoard } />
                <Route exact path="/learn" component = { LearnPage } />
                <Redirect to="/home" />
                </Switch>
                </div>
                )
    }

}


export default Main;
