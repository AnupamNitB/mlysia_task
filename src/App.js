import * as React from 'react';
import {View, Button, Text, Animated} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/Login';
import Splace from './screens/Splace';
import DrawerNavigatorRoutes from './components/DrawerNavigatorRoutes';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Splace"
      // screenOptions={{headerShown: false}}
    >
      <Stack.Screen
        name="Splace"
        component={Splace}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Login" component={Login} />
      

      <Stack.Screen
        name="DrawerNavigationRoutes"
        component={DrawerNavigatorRoutes}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
