import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { counter } from './index.redux'
import './index.css';
import App from './App';
import Gun from './Gun'
import BasicExample from './basicExample'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(counter, compose(
    applyMiddleware(thunk),
    window.devToolExtension ? window.devToolsExtension() : f => f
))

function Erying() {
    return <h2>二营</h2>
}
function Qibinglian() {
    return <h2>骑兵连</h2>
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <div>
                <ul>
                    <li>
                        <Link to='/'>一营</Link>
                    </li>
                    <li>
                        <Link to='/erying'>二营</Link>
                    </li>
                    <li>
                        <Link to='/qibinglian'>骑兵连</Link>
                    </li>
                </ul>
                <Route path='/' component={Gun}></Route>
                <Route path='/erying' component={Erying}></Route>
                <Route path='/qibinglian' component={Qibinglian}></Route>
            </div>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));

registerServiceWorker();
