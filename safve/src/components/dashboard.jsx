import React, { Component} from 'react';
import Header from './header';
import Info from './info'
class Dashboard extends Component {
    render() {
        return (
            <div>
                <div>
                <Header />
                </div>
                <div>
                    <Info></Info>
                </div>
            </div>

                )
    }

}

export default Dashboard;