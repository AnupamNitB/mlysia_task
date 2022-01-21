// chat.js;

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../components/Header';

export default class chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatList: [
        {
          chat_user_id: '1',
          chat_massage: 'Hi',
          chat_time: '2:34 pm',
        },
        {
          chat_user_id: '2',
          chat_massage: 'Hi',
          chat_time: '2:35 pm',
        },
        {
          chat_user_id: '2',
          chat_massage: 'Hello..',
          chat_time: '2:36 pm',
        },
        {
          chat_user_id: '2',
          chat_massage: 'How are you?',
          chat_time: '2:36 pm',
        },
      ],
      chatMassage: '',
    };

    this.props.navigation.addListener('willFocus', () => {});
  }

  sendMassage() {
    if (this.state.chatMassage) {
      let obj = {
        chat_user_id: '2',
        chat_massage: this.state.chatMassage,
        chat_time: '2:38 pm',
      };

      let chatList = this.state.chatList;
      chatList.push(obj);

      this.setState({
        chatMassage: chatList,
        chatMassage: '',
      });
    } else {
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          headerTitel={'Chat'}
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
          data={this.state.chatList}
          renderItem={({item}) => <ChatItemCell data={item} />}
        />
        <View>
          <View style={styles.chatCountenur}>
            <TextInput
              style={styles.chatInput}
              value={this.state.chatMassage}
              onChangeText={changeText =>
                this.setState({chatMassage: changeText})
              }
              placeholder="Enter Message"
              // placeholderTextColor={'#000'}
              // underlineColorAndroid="transparent"
              paddingLeft={12}
            />

            <TouchableOpacity
              style={[
                styles.chatButton,
                {
                  backgroundColor: this.state.chatMassage
                    ? '#50C878'
                    : '#50C878',
                },
              ]}
              disabled={this.state.chatMassage ? false : true}
              onPress={() => {
                this.sendMassage();
              }}>
              <Text style={{color: '#fff'}}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export class ChatItemCell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.data.chat_user_id == '1' ? (
      <View style={styles.chetItemOther}>
        <Image source={require('../assets/c1.png')} style={styles.userImage} />
        <View style={{justifyContent: 'center', flex: 1, marginStart: 10}}>
          <Text style={{color: '#000'}}>{this.props.data.chat_massage}</Text>
          {/* <Text style={{fontSize: 10, marginTop: 4, textAlign: 'right'}}>
            {this.props.data.chat_time}
          </Text> */}
        </View>
      </View>
    ) : (
      <View style={styles.chetItem}>
        <View style={{justifyContent: 'center', flex: 1, marginEnd: 10}}>
          <Text style={{textAlign: 'right', color: '#000'}}>
            {this.props.data.chat_massage}
          </Text>
          {/* <Text style={{fontSize: 10, marginTop: 4}}>
            {this.props.data.chat_time}
          </Text> */}
        </View>
        <Image source={require('../assets/c2.png')} style={styles.userImage} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  chetItemOther: {
    flex: 1,
    margin: 4,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    elevation: 1,
    padding: 10,
  },
  userImage: {height: 40, width: 40, alignSelf: 'center'},
  chetItem: {
    flex: 1,
    margin: 4,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    elevation: 1,
    padding: 10,
  },
  chatCountenur: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    elevation: 1,
  },
  chatInput: {
    width: '100%',
    fontSize: 16,
    margin: 6,
    marginStart: 0,
    flex: 1,
    backgroundColor: '#ccc',
    borderRadius: 10,
  },
  chatButton: {
    // backgroundColor: 'gray',
    borderRadius: 4,
    elevation: 1,
    alignSelf: 'center',
    padding: 8,
  },
});
