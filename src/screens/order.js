import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Alert,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../components/Header';

export default class order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderList: [
        {
          oder_id: '1',
          oder_name: 'Oder 1',
          oder_image: './assets/i1.jpg',
          oder_address: 'Address 1',
        },
        {
          oder_id: '2',
          oder_name: 'Oder 2',
          oder_image: './assets/i2.jpg',
          oder_address: 'Address 2',
        },
        {
          oder_id: '3',
          oder_name: 'Oder 3',
          oder_image: './assets/i3.jpg',
          oder_address: 'Address 3',
        },
      ],
    };

    this.props.navigation.addListener('willFocus', () => {});
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          headerTitel={'Oders'}
          // isBackButton={false}
          // backButton={() => {
          //   this.props.navigation.goBack();
          //   console.log('back button click');
          // }}
          // isRightButton={false}
          // rightButtonClick={() => {
          //   console.log('logout');
          // }}
        />
        {/* <Icon name="login" size={25} color={'#095ce5'} />
        <Icon name="logout" color={'#095ce5'} size={25} /> */}

        <FlatList
          style={{flex: 1}}
          data={this.state.orderList}
          renderItem={({item}) => <OrderItemCell data={item} />}
        />
      </View>
    );
  }
}

export class OrderItemCell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          Alert.alert(
            'Your ' + this.props.data.oder_name + ' is Selected',
            'Address : ' + this.props.data.oder_address,
          );
        }}>
        <View style={styles.listitem}>
          <View style={{flex: 1}}>
            <Text style={{color: '#000'}}>
              Order : {this.props.data.oder_name}
            </Text>
            <Text style={{color: '#000'}}>
              Address : {this.props.data.oder_address}
            </Text>
          </View>
          {/* <Image
            source={require(this.props.data.oder_image)}
            style={{height: 20, width: 20, alignSelf: 'center'}}
          /> */}
          <Image
            source={require('../assets/right-arrow.png')}
            style={styles.rightIcon}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  rightIcon: {height: 20, width: 20, alignSelf: 'center'},
  listitem: {
    flex: 1,
    margin: 10,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    elevation: 1,
    padding: 10,
  },
});
