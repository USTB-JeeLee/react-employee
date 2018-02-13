import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

import Login from './container/login/login.js'
import Register from './container/register/register.js'
import AuthRoute from './component/authroute/authroute'
import BossInfo from './container/bossinfo/bossinfo'
import Boss from './component/boss/boss'
import GeniusInfo from './container/geniusinfo/geniusinfo'
import Dashboard from './component/dashboard/dashboard'
import reducers from './reducers'
import './config'
import './index.css'

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolExtension ? window.devToolsExtension() : f => f
))

// boss genius me msg四个页面
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Switch>
                    <Route path='/bossinfo' component={BossInfo}></Route>
                    <Route path='/boss' component={Boss}></Route>
                    <Route path='/genius' component={GeniusInfo}></Route>     
                    <Route path='/login' component={Login}></Route>
                    <Route path='/register' component={Register}></Route>
                    <Route component={Dashboard}></Route>
                </Switch>   
            </div>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));

registerServiceWorker();
