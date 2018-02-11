import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
// import { counter } from './index.redux'
import reducers from './reducers'
import './index.css';
import App from './App';
import Gun from './Gun'
import BasicExample from './basicExample'
import registerServiceWorker from './registerServiceWorker';

import Auth from './Auth.js'
import Dashboard from './Dashboard.js'
import './config'

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolExtension ? window.devToolsExtension() : f => f
))
console.log(store.getState())

function Erying() {
    return <h2>二营</h2>
}
function Qibinglian() {
    return <h2>骑兵连</h2>
}

class Test extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props)
        return <h2>测试组件{this.props.match.location}</h2>
    }
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>        
                <Switch>
                    <Route path='/login' component={Auth}></Route>
                    <Route path='/dashboard' component={Dashboard}></Route>
                    <Redirect to='/dashboard'></Redirect>
                </Switch>
        
                {/* <ul>
                    <li>
                        <Link to='/'>一营</Link>
                    </li>
                    <li>
                        <Link to='/erying'>二营</Link>
                    </li>
                    <li>
                        <Link to='/qibinglian'>骑兵连</Link>
                    </li>
                </ul> */}

            </div>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));

registerServiceWorker();
