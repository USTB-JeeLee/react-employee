import React from 'react'
import { connect } from 'react-redux'
import { login, getUserData } from './Auth.redux'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

@connect(
    state=>state.auth,
    {login, getUserData}
)

class Auth extends React.Component {
    componentDidMount() {
        this.props.getUserData()
        // axios.get('/data').then(res => {
        //     if(res.status === 200) {
        //         this.setState({data: res.data})
        //     }
        // })
    }
    constructor(props) {
        super(props)
    }
    render() {
        return (
          <div>
              <h1>用户:{this.props.user},年龄:{this.props.age}</h1>
              <h2>你没有权限，需要登录才能看</h2>
              <button onClick={this.props.login}>登录</button>
              {this.props.isAuth ? <Redirect to='/dashboard' /> : null}
          </div>  
        )
    }
}

export default Auth