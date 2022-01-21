// tracking;

import React, {Component} from 'react';
import {Text, View, Button, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../components/Header';

export default class tracking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.props.navigation.addListener('willFocus', () => {});
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          headerTitel={'Tracking'}
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
        <FlatList
          style={{flex: 1}}
          data={[1, 2, 3, 4]}
          renderItem={({item}) => <TrackingItemCell data={item} />}
        />
      </View>
    );
  }
}

export class TrackingItemCell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          margin: 10,
          width: '90%',
          backgroundColor: '#ccc',
          borderRadius: 10,
        }}>
        <Text style={{color: '#000', textAlign: 'center'}}>
          {this.props.data}
        </Text>
      </View>
    );
  }
}
