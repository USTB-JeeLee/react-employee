import React from 'react'
import { Link,  Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from './Auth.redux.js'
import Gun from './Gun'

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

@connect(
    state=>state.auth,
    {logout}
)
class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const match = this.props.match
        console.log('jeelee', match)
        const redirectToLogin = <Redirect to='/login'></Redirect>
        const app = (
            <div>
                <h1>独立团</h1>
                {this.props.isAuth ? <button onClick={this.props.logout}>注销</button> : null}
                <ul>
                    <li>
                        <Link to={`${match.url}/`}>一营</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/erying`}>二营</Link>
                    </li>
                    <li>
                        <Link to='/dashboard/qibinglian'>骑兵连</Link>
                    </li>
                </ul>
            
                <Route path='/dashboard/erying' exact component={Erying}></Route>
                <Route path='/dashboard/qibinglian' component={Qibinglian}></Route>
                <Route path='/dashboard/:location' component={Gun}></Route>
            </div>
        )
        return this.props.isAuth ? app : redirectToLogin
    }
}

export default Dashboard