/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './app/components/login';
import Main from './app/components/main';
import ProductList from './app/components/productList';
// import React from 'react'
// import {Text} from 'react-native'

//分配路由
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
const MyRouter  = createStackNavigator({
  main: {
    screen: Main,
    navigationOptions: () => {
      return {
        title: '主页',
        headerTitleStyle: {
          flex:1,
          textAlign: 'center',
          color: 'red',
        }
      }
    }
  },
  login: {
    screen: Login,
    navigationOptions: () => {
      return {
        title: '登陆',
        headerTitleStyle: {
          flex:1,
          textAlign: 'center',
          color: 'red',
        }
      }
    }
  },
  productList: {
    screen: ProductList,
    navigationOptions: () => {
      return {
        title: '商品列表',
        //这里默认是不会占满真个空间的  所以需要使用flex 1 让其占满整个容器  在设置textAlign  文本居中
        headerTitleStyle: {
          flex:1,
          alignSelf: 'center',
          textAlign: 'center',
          color: 'red'
        }
      }
    }
  }
})
AppRegistry.registerComponent(appName, () => createAppContainer(MyRouter));
