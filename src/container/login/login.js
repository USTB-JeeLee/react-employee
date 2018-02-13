import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../redux/user.redux'
import Form from '../../component/form/form'

@WrapperHello
class Hello extends React.Component {
    render() {
        return <h2>hello~</h2>
    }
}

// 属性代理
function WrapperHello(Comp) {
    class WrapComp extends Comp {
        componentDidMount() {
            console.log('高阶组件新增的生命周期，加载完成')
        }
        render() {
            return <Comp></Comp>
        }
    }

    // class WrapComp extends React.Component {

    //     render() {
    //         return (
    //             <div>
    //                 <p>you are a good man</p>
    //                 <p>HOC特有的属性</p>
    //                 <Comp {...this.props}></Comp>
    //             </div>
    //         )
    //     }
    // }
    return WrapComp
}

// Hello = WrapperHello(Hello)

@connect(
    state=>state.user,
    {login}
)

@Form
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.register = this.register.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }
    register() {
        this.props.history.push('/register')
    }
    handleLogin() {
        this.props.login(this.props.state)
    }

    render() {
        return (
            <div>
                {this.props.redirectTo && this.props.redirectTo != '/login' ? <Redirect to={this.props.redirectTo} /> : null}
                <Logo></Logo>
                <h2>登录页</h2>
                <WingBlank>
                    <List>
                        {this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : null}
                        <InputItem onChange={v => this.props.handleChange('user', v)}>用户</InputItem>
                        <WhiteSpace />
                        <InputItem onChange={v => this.props.handleChange('pwd', v)} type='password'>密码</InputItem>
                    </List>
                    <Button type='primary' onClick={this.handleLogin}>登录</Button>
                    <WhiteSpace />
                    <Button type='primary' onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login

