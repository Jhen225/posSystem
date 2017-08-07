import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home/index';
import Order from './Order/index';
import Restaurant from './Restaurant/index';
import Dashboard from './Dashboard/index'
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path='/admin' component={Dashboard}>
                <Route path='/restaurants' render/>
            </Route>
            <Route exact path='/restaurants' component={Restaurant}/>
            <Route path='/orders' component={Order}/>
            <Route path='/checkout' component={Home}/>
        </div>
    </BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
