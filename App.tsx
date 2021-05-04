/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();

const App = () => {



  return (
    <NavigationContainer>
   
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={HomeScreen} />
      </Tabs.Navigator>

    </NavigationContainer>
  );
};

export default App;
