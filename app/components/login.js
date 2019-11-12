import React, {Component} from 'react';
import {
  Text,
  TextInput,
  Button,
  View,
  Image,
  StyleSheet
} from 'react-native';


export default class Login extends Component {
  constructor(){
    super()
    this.state = {
      uname: '',
      upwd: ''
    }
  }
  //点击登录按钮事件
  handlePress = ()=> {
    var uname =  this.state.uname
    var upwd = this.state.upwd
    if ( !uname || !upwd ){
      return alert('请完整提交用户名密码')
    }
    var jsonUse = JSON.stringify({
      userName: uname,
      password: upwd
    })
    fetch('http://192.168.1.107/user/login', {
      method: 'POST',//设置请求类型
      headers: {
        //设置请求的请求方式是 application/json
        // 如果需要设置成普通表单的请求可以设置为
        //application/x-www-form-urlencoded
        // 需要件请求体改为 'uname=' + th
        'content-type': 'application/json',
      },
      body: jsonUse,

    })
      .then(res => res.json())
      .then(res => {
        if (res.code === 200) {
          return this.props.navigation.push('main') //跳转到主页面

        }

        this.setState({
          uname: '',
          upwd: ''
        })
        alert('账号密码不正确请重新输入')

      });


  }

  // 设置用户名
  handleSaveName = (val) => {
    this.setState({
      uname: val
    })
  }

  // 设置密码
  handleSavePwd = (val) => {
    this.setState({
      upwd: val
    })
  }
  render() {
    return <View>
      <Image
        source={require('../img/3.jpg')}
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          alignSelf: 'center'//这是在项目中设置的 而alignItem 是在容器中设置的 前者优先级高
        }}
      />
      <TextInput
        style={myStyle.inputStyle}
        placeholder='用户名'
        value={this.state.uname}
        onChangeText={this.handleSaveName}
      />
      <TextInput
        style={myStyle.inputStyle}
        placeholder='密码'
        secureTextEntry={true}
        value={this.state.upwd}
        onChangeText={this.handleSavePwd}
      />
      <Button title='登录' onPress={this.handlePress}/>
    </View>
  }
}
 const myStyle =  StyleSheet.create({
   inputStyle: {
     borderBottomWidth: 1,
     borderBottomColor: '#ccc',
     marginBottom: 10

   }
 })
