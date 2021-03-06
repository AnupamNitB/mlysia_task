/* eslint-disable react-native/no-inline-styles */

import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  Alert,
  Keyboard,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../components/Header';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      password: '',
    };

    this.props.navigation.addListener('willFocus', () => {});
  }

  onValidations() {
    console.log('validation');
    Keyboard.dismiss();
    if (this.state.userId == '') {
      Alert.alert('Enter User-Id');
      return false;
    } else if (this.state.password == '') {
      Alert.alert('Enter Password');
      return false;
    } else {
      return true;
    }
  }

  doLogin() {
    console.log('dologin');
    if (this.onValidations()) {
      this.storeData();
      this.props.navigation.navigate('DrawerNavigationRoutes');
    }
  }

  async storeData() {
    try {
      console.log('store data');
      await AsyncStorage.setItem('id', this.state.userId);
      await AsyncStorage.setItem('password', this.state.password);
    } catch (e) {
      // saving error
    }
  }

  render() {
    return (
      <View>
        <Header
          headerTitel={'Login'}
          isBackButton={false}
          backButton={() => {
            this.props.navigation.goBack();
            console.log('back button click');
          }}
          isRightButton={false}
          rightButtonClick={() => {
            console.log('logout');
          }}
        />

        <View
          style={{
            margin: 100,
          }}>
          <TextInput
            style={{
              width: '100%',
              fontSize: 24,
              margin: 6,
              color: '#000',
            }}
            placeholderTextColor={'#000'}
            onChangeText={changeText => this.setState({userId: changeText})}
            placeholder="Enter User-Id"
            underlineColorAndroid="transparent"
            paddingLeft={12}
          />
          <TextInput
            style={{
              width: '100%',
              fontSize: 24,
              margin: 6,
              color: '#000',
            }}
            onChangeText={changeText => this.setState({password: changeText})}
            placeholder="Enter Password"
            underlineColorAndroid="transparent"
            placeholderTextColor={'#000'}
            paddingLeft={12}
            // placeholder="********"
            autoCapitalize="none"
            secureTextEntry={true}
            autoFocus={false}
          />

          <TouchableOpacity
            style={{
              marginRight: 40,
              marginLeft: 40,
              marginTop: 10,
              paddingTop: 10,
              paddingBottom: 10,
              backgroundColor: 'blue',
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#fff',
            }}
            onPress={() => this.doLogin()}
            underlayColor="#fff">
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                paddingLeft: 10,
                paddingRight: 10,
                fontSize: 20,
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
