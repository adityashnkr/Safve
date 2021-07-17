import React ,{Component} from 'react';
import Home  from './home';


class Main extends Component {
    render(){
        const HomePage = () => {
            return (
                <Home />
                    )
        }
        return(
            <div>
                <HomePage></HomePage>
                </div>
                )
    }

}


export default Main;