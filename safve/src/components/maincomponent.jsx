import React ,{Component} from 'react';
import Home  from './home';
import Dashboard from './dashboard'


class Main extends Component {
    render(){
        const HomePage = () => {
            return (
                <Home />
                    )
        }
        const DashboardPage = () => { 
            return(
                <Dashboard />
                )
        }
        return(
            <div>
                <DashboardPage />
                {/* <HomePage></HomePage> */}
            </div>
                )
    }

}


export default Main;