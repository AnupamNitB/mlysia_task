// Import React and Component
import React, {useState} from 'react';
import {View, Text, Alert, StyleSheet,Image} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import AsyncStorage from '@react-native-async-storage/async-storage';
// import {mySingleton} from '../../LocalDataStore';

const CustomSidebarMenu = props => {
  // AsyncStorage.getItem('user_id')
  // const useIdd = await AsyncStorage.getItem('user_id');

  // const [userEmail, setUserEmail] = useState('');
  // setUserEmail(useIdd);

  return (
    <View style={stylesSidebar.sideMenuContainer}>
      <View style={stylesSidebar.profileHeader}>
        <View style={stylesSidebar.profileHeaderPicCircle}>
        <Image
          source={{
            uri: 'https://t4.ftcdn.net/jpg/03/48/02/63/360_F_348026398_26HVyA3CsYNk9amd11T2ti4YjNhAjucb.jpg',
          }}
          style={stylesSidebar.profileHeaderPicCircle}
        />
          <Text style={{fontSize: 25, color: '#307ecc'}}>
            {/* {mySingleton.getInstance().getUserEmail().charAt(0)} */}
          </Text>
        </View>
        <Text style={stylesSidebar.profileHeaderText}>
          {/* {mySingleton.getInstance().getUserEmail()} */}
        </Text>
      </View>
      <View style={stylesSidebar.profileHeaderLine} />

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={({color}) => <Text style={{color: '#000'}}>Logout</Text>}
          onPress={() => {
            props.navigation.toggleDrawer();
            Alert.alert(
              'Logout',
              'Are you sure? You want to logout?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: 'Confirm',
                  onPress: () => {
                    AsyncStorage.clear();
                    props.navigation.replace('Login');
                  },
                },
              ],
              {cancelable: false},
            );
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomSidebarMenu;

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    paddingTop: 40,
    color: 'white',
  },
  profileHeader: {
    flexDirection: 'row',
    // backgroundColor: 'green',
    padding: 15,
    textAlign: 'center',
    height:"14%"

  },
  profileHeaderPicCircle: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    color: 'white',
    // backgroundColor: 'pink',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: 'white',
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
  },
});
