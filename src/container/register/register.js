import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, Radio, WhiteSpace, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { register } from '../../redux/user.redux'
import Form from '../../component/form/form'

@connect(
    state=>state.user,
    {register}
)

@Form
class Register extends React.Component {
    constructor(props) {
        super(props)
        this.handleRegister = this.handleRegister.bind(this)
    }
    componentDidMount() {
        this.props.handleChange('type','genius')
    }
    handleRegister() {
        this.props.register(this.props.state)
    }
    render() {
        const RadioItem = Radio.RadioItem
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
                <Logo></Logo>
                <List>
                    {this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : null}
                    <InputItem onChange={v => this.props.handleChange('user', v)}>用户</InputItem>
                    <InputItem type='password' onChange={v => this.props.handleChange('pwd', v)}>密码</InputItem>
                    <InputItem type='password' onChange={v => this.props.handleChange('repeatPwd', v)}>确认密码</InputItem>
                    <WhiteSpace />
                    <RadioItem checked={this.props.state.type == 'genius'} onChange={() => this.props.handleChange('type','genius')}>牛人</RadioItem>
                    <RadioItem checked={this.props.state.type == 'boss'} onChange={() => this.props.handleChange('type', 'boss')}>BOSS</RadioItem>
                </List>
                <Button type='primary' onClick={this.handleRegister}>注册</Button>
            </div>
        ) 
    }
}

export default Register