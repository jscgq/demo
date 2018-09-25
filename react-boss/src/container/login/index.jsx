import React, { Component } from 'react'
import Logo from '../../component/logo/index.jsx'
import  { List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'
import {login} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'
import { connect} from 'react-redux'

@connect(
  state => state.user,
  { login }
)
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      pwd: ''
    }
    this.register = this.register.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }
  handleChange (key, val) {
    this.setState({[key]: val})
  }
  register() {
    this.props.history.push('/register')
  }
  handleLogin() {
    this.props.login(this.state)
  }
  render() {
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
        <Logo></Logo>
        <WingBlank>
          <List>
            <InputItem onChange={v => this.handleChange('user', v)}>用户</InputItem>
            <InputItem type='password' onChange={v => this.handleChange('pwd', v)}>密码</InputItem>
          </List>
          <WhiteSpace/>
          <Button type='primary' onClick={this.handleLogin}>登陆</Button>
          <WhiteSpace/>
          <Button onClick={this.register} type='primary'>注册</Button>
        </WingBlank>
      </div>
    )
  }
}
