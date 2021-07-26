import React from 'react';
import {
  View,
  Text,
  StatusBar
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './Src/Router/AppStack';
import AnimatedSplash from 'react-native-animated-splash-screen';
import Colors from './Src/Constants/Colors';
import linking from './linking';
export default function App() {
  const [load,setLoad]=React.useState(false);
  React.useEffect(()=>{
    setLoad(true);
  },[])
  return (
    <NavigationContainer linking={linking}>
      <StatusBar hidden />
        <MyStack />
    </NavigationContainer>
  );
}