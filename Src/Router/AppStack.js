import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
// ------------------------------------------------------- //
import AllRecording from '../Screens/AllVideosRec';
import FirstScreen from '../Screens/FirstScreen';
import ForgetPass from '../Screens/ForgetPassword';
// import Home from '../Screens/Home';
import Home1 from '../Screens/Home1';
// import Login from '../Screens/LogIn';
import Login1 from '../Screens/Login1';
import Profile1 from '../Screens/Profile1';
// import SignUp from '../Screens/SignUp';
import SignUP1 from '../Screens/SignUp1';
// ------------------------------------------- //
import SplashScreeen from '../Screens/SplashScreen';
// ------------------------------------------------ //
import VideoView from '../Screens/VideoCall/VideoView';
import VideoPlayerView from '../Screens/VideoPlayer';
// ------------------------------------------------------- //
import DrawerNavi from './Drawer';
// ------------------------------------------------------- //


const Stack = createStackNavigator();



function MyStack() {
  
  return (
    <Stack.Navigator
     headerMode="none"
     initialRouteName="SplashScreen"
     >
      <Stack.Screen name="Drawer" component={DrawerNavi}/>
      <Stack.Screen name="SplashScreen" component={SplashScreeen} />
      <Stack.Screen name="Login" component={Login1} />
      <Stack.Screen name="SignUp" component={SignUP1} />
      <Stack.Screen name="FirstScreen" component={FirstScreen} />
      <Stack.Screen name="AllRecord" component={AllRecording} />
      <Stack.Screen name="VideoPlayer" component={VideoPlayerView} />
      <Stack.Screen name="Home1" component={Home1} />
      <Stack.Screen name="ForgetPass" component={ForgetPass} />
      <Stack.Screen name="Profile1" component={Profile1} />
      {/* Video View */}
      <Stack.Screen name="Video1" component={VideoView} />
    </Stack.Navigator>
  );
}

export default MyStack ;