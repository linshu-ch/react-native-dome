import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';


export default class Main extends Component {
  constructor() {
    super();
  }

  // 条转去商品列表处理
  handleGoGoodsList = () => {
    // console.log(this)
    this.props.navigation.push('productList')
  }

  render() {
    return <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#ccc',
      }}
    >
      {/*  第一行 */}
      <View style={
        mainStyle.tongJi
      }>
        {/*  第一列*/}
        <View
          style={[mainStyle.tongJiItem, mainStyle.tongJiItemLeft]}>
          <Text
            style={[mainStyle.red, mainStyle.tongJiItemTextNum]}
          >24380</Text>
          <Text
          >当日pc量</Text>
        </View>

        {/*  第二列 */}
        <View
          style={mainStyle.tongJiItem}
        >
          <Text
            style={[mainStyle.green, mainStyle.tongJiItemTextNum]}
          >1967</Text>
          <Text>当日移动端量</Text>
        </View>

      </View>

      {/*  第二行 */}
      <View style={{
        flexDirection: 'row'}} >
        {/*  第一列*/}
        <View
          style={{
            height: 100,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderRightWidth: 1,
            borderBottomWidth: 2,
            borderColor: '#fff',
          }}
        >
          <Text
            style={{
              color: 'red',
              fontSize: 30,
            }}
          >24380</Text>
          <Text
          >当日pc量</Text>
        </View>

        {/*  第二列 */}
        <View
          style={{
            height: 100,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderLeftWidth: 1,
            borderBottomWidth: 2,
            borderColor: '#fff',
          }}
        >
          <Text
            style={{
              color: 'green',
              fontSize: 30,
            }}
          >1967</Text>
          <Text>当日移动端量</Text>
        </View>
      </View>

      <Text>{'\n\n'}</Text>

      {/*3行*/}
      <View style={mainStyle.tongJi}>
        <TouchableOpacity
          style={mainStyle.imgCol}>
          <Image
            source={require('../img/order.png')}
            style={{
              width: 80,
              height: 80,
            }}
          />
          <Text>订单管理</Text>
        </TouchableOpacity>
        <TouchableOpacity style={mainStyle.imgCol}>
          <Image
            source={require('../img/user.png')}
            style={{
              width: 80,
              height: 80,
            }}
          />
          <Text>用户管理</Text>
        </TouchableOpacity>
      </View>
      <Text>{'\n\n'}</Text>
      {/*  4*/}
      <View style={mainStyle.tongJi}>
        <TouchableOpacity
          onPress={this.handleGoGoodsList}
          style={mainStyle.imgCol}>
          <Image
            source={require('../img/product.png')}
            style={{
              width: 80,
              height: 80,
            }}
          />
          <Text>商品管理</Text>
        </TouchableOpacity>
        <TouchableOpacity style={mainStyle.imgCol}>
          <Image
            source={require('../img/setting.png')}
            style={{
              width: 80,
              height: 80,
            }}
          />
          <Text>设置</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>;
  }
}

const mainStyle = StyleSheet.create({
  tongJi: {
    flexDirection: 'row',
  },
  tongJiItem: {
    flex: 1,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderBottomWidth: 2,
    padding: 10,
  },
  tongJiItemLeft: {
    borderRightWidth: 2,
  },
  tongJiItemRight: {},
  tongJiItemTextNum: {
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  green: {
    color: 'green',
  },
  imgCol: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
