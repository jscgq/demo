import React, { Component } from 'react'
import Logo from '../../component/logo/index.jsx'
import  { List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.register = this.register.bind(this)
    console.log(this.props)
  }
  register() {
    this.props.history.push('/register')
  }
  render() {
    return (
      <div>
        <Logo></Logo>
        <WingBlank>
          <List>
            <InputItem>用户</InputItem>
            <InputItem>密码</InputItem>
          </List>
          <WhiteSpace/>
          <Button type='primary'>登陆</Button>
          <WhiteSpace/>
          <Button onClick={this.register} type='primary'>注册</Button>
        </WingBlank>
      </div>
    )
  }
}
