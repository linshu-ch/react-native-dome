import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';


export default class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      goodsList: [],
      pno: 1,
      page: 1,
      isLoader: true
    };
  }

  componentDidMount() {
    this.setState({
      pno: 1,
    }, () => {
      this.getGoodsList();
    });

  }

  // 获取goodsList
  getGoodsList = () => {
    fetch('http://192.168.1.107/product/list?pno=' + this.state.pno)
      .then(res => res.json())
      .then(res => {
        res.data.forEach((item, index) => {
          item.key = item.id.toString();
        });

        var goodsList = this.state.goodsList;
        goodsList.push(...res.data);

        this.setState({
          page: res.pageCount,
          goodsList,
        }, () => {
          console.log(this.state.goodsList);
        });
      });
  };

  // 加载更多
  handleMove = (e) => {
    if (this.state.isLoader ){
      this.setState({
        isLoader: false
      }, () => {
        let pon = this.state.pno;
        console.log(pon);
        if (pon < this.state.page) {
          this.setState({
            pno: pon + 1,
            isLoader: true
          }, () => {
            this.getGoodsList();
          });
        }
      })

    }


  };


  renderList = (info) => {
    return <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
      }}

    >
      <Image
        style={{
          width: 100,
          height: 120,
          marginRight: 10,
        }}
        source={{
          uri: info.item.img_src,
        }}
      />
      <View
        style={{
          flex: 1,
        }}
      >
        <Text>{info.item.title}</Text>
        <Text
        >{info.item.zhaiyao}</Text>
        <Text>{'\n'}</Text>
      </View>
    </View>;
  };

  render() {
    return <View
    style={{
     flex: 1
    }}>
      <FlatList
        data={this.state.goodsList}
        extraData={this.state}
        onEndReached={
          this.handleMove
        }
        onEndReachedThreshold={0.1}
        renderItem={this.renderList}
      />
    </View>


  }
}
