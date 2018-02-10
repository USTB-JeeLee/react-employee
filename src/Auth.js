import React from 'react'
import { connect } from 'react-redux'
import { login } from './Auth.redux'
import { Redirect } from 'react-router-dom'

@connect(
    state=>state.auth,
    {login}
)

class Auth extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
          <div>
              <h2>你没有权限，需要登录才能看</h2>
              <button onClick={this.props.login}>登录</button>
              {this.props.isAuth ? <Redirect to='/dashboard' /> : null}
          </div>  
        )
    }
}

export default Auth