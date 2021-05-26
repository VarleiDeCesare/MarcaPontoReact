import React from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './src/views/Login'
import Menu from './src/views/Menu'
import CadastroPonto from './src/views/CadastroPonto'
import "./src/services/ConnectFirebase"
import { LogBox } from 'react-native'



export default function App() {
  //LogBox.ignoreLogs(['Setting a timer'])

  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
        />
        <Stack.Screen
          name="CadastroPonto"
          component={CadastroPonto}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

