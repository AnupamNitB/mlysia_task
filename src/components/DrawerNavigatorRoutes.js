// Import React
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
import CustomSidebarMenu from './CustomSidebarMenu';
import NavigationDrawerHeader from './NavigationDrawerHeader';
import order from '../screens/order';
import chat from '../screens/chat';
import tracking from '../screens/tracking';
import {appBarColor, appBarTitelColor} from '../utils/common';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const OrderScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="order"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: appBarColor,
        },
        headerTintColor: appBarTitelColor,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Orders"
        component={order}
        options={{
          title: 'Orders', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const ChatScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="chat"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: appBarColor,
        },
        headerTintColor: appBarTitelColor,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Chat"
        component={chat}
        options={{
          title: 'Chat', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const TrackingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="tracking"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: appBarColor,
        },
        headerTintColor: appBarTitelColor,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Tracking"
        component={tracking}
        options={{
          title: 'Tracking', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigatorRoutes = props => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#f54272',
        color: '#f54272',
        itemStyle: {marginVertical: 5, color: '#f54272'},
        labelStyle: {
          // color: '#d8d8d8',
        },
      }}
      screenOptions={{headerShown: false}}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="Order"
        options={{drawerLabel: 'Order'}}
        component={OrderScreenStack}
      />
      <Drawer.Screen
        name="Chat"
        options={{drawerLabel: 'Chat'}}
        component={ChatScreenStack}
      />
      <Drawer.Screen
        name="Tracking"
        options={{drawerLabel: 'Tracking'}}
        component={TrackingScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;
