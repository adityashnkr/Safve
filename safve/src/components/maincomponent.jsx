import React ,{Component} from 'react';
import Home  from './home';
import Dashboard from './dashboard';
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
        return(
            <div>
                <Switch>
                <Route path="/home" component = { HomePage } />
                <Route exact path="/dash" component = { DashBoard } />
                <Redirect to="/home" />
                </Switch>
                </div>
                )
    }

}


export default Main;
