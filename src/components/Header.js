/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, Button, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
    };
  }

  render() {
    return (<View/>); 
    // return (
    //   <View
    //     style={{
    //       backgroundColor: '#fff',
    //       height: 90,
    //       width: '100%',
    //     }}>
    //     <View style={{height: 40}} />
    //     <View
    //       style={{
    //         // backgroundColor: 'red',
    //         flexDirection: 'row',
    //         flex: 1,
    //         marginStart: 18,
    //         marginEnd: 18,
    //         marginBottom: 6,
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //       }}>
    //       {this.props.isBackButton ? (
    //         <TouchableOpacity
    //           onPress={() => {
    //             //back button
    //             this.props.backButton();
    //           }}>
    //           <Image
    //             source={require('../assets/left-arrow.png')}
    //             style={{
    //               height: 30,
    //               width: 30,
    //             }}
    //           />
    //         </TouchableOpacity>
    //       ) : (
    //         <View
    //           style={{
    //             height: 30,
    //             width: 30,
    //           }}
    //         />
    //       )}
    //       <View style={{flex: 1}}>
    //         <Text
    //           style={{
    //             textAlign: 'center',
    //             fontSize: 22,
    //           }}>
    //           {this.props.headerTitel}
    //         </Text>
    //       </View>
    //       {this.props.isRightButton ? (
    //         <TouchableOpacity
    //           onPress={() => {
    //             //logout button
    //             this.props.rightButtonClick();
    //           }}>
    //           <Image
    //             source={require('../assets/Account.png')}
    //             style={{
    //               height: 30,
    //               width: 30,
    //             }}
    //           />
    //         </TouchableOpacity>
    //       ) : (
    //         <View
    //           style={{
    //             height: 30,
    //             width: 30,
    //           }}
    //         />
    //       )}
    //     </View>
    //   </View>
    // );
  }
}
