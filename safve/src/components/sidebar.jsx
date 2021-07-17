import React from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div className = 'sidebar' >
                <div className = 'sidebar-header'>
                <span color="info" onClick={toggle} style={{ color: "#fff" }}>
                &times;
                </span>
                <h3>Dashboard</h3>
                </div>
            </div>
                )
    }

}
export default Sidebar;
