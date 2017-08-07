import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component{
    render() {
        return(
            <div id="sidebar">
                  <nav className="dashnav">
                      <ul className="nav-group">
                          <li>
                              <Link to="/dashboard/route1">Route 1</Link>
                          </li>
                          <li>
                              <Link to="route2">Route 2</Link>
                          </li>
                          <li>
                              <Link to="route3">Route 3</Link>
                          </li>
                          <li>
                              <Link to="route4">Route 4</Link>
                          </li>
                      </ul>
                  </nav>
            </div>
        );
    }
}

export default Sidebar;