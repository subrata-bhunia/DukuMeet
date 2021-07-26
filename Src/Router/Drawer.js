import {createDrawerNavigator} from '@react-navigation/drawer'
import React from 'react'
import AllRecording from '../Screens/AllVideosRec';
import {
    View,
    Text,
    Image
} from 'react-native';
import { DrawerContent } from './DrawerContent';
import Home1 from '../Screens/Home1';

const Drawer = createDrawerNavigator();
const DrawerNavi=()=>{
    return(
      <Drawer.Navigator 
    //    drawerType="front"
       drawerStyle={{
           height:"100%",
           width:"70%",
           backgroundColor:"#fff",
           
       }}
       drawerContent={props=> <DrawerContent {...props} />}
       initialRouteName="Home"
      >
        <Drawer.Screen name="Home" component={Home1}/>
        {/* <Drawer.Screen name="All Recordings" component={AllRecording}/> */}
      </Drawer.Navigator>
    )
  }
  export default DrawerNavi