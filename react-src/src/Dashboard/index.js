import React, { Component } from 'react';
import Sidebar from '../sidebar/index'; 

class Dashboard extends Component{

    render(){
        return(
            <div>
                <h1>Dashboard</h1>
                <p>{JSON.stringify(this.props)}</p>
                <Sidebar />
            </div>
        );
    }
}

export default Dashboard;