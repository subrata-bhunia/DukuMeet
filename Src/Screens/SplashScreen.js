import React,{useEffect} from 'react';
import {
    View,
    Image,
    Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Colors from '../Constants/Colors';

const {height,width}=Dimensions.get("window")

const SplashScreeen=()=>{
    const navigation=useNavigation();
    const gotoApp=()=>{
        setTimeout(()=>{
            navigation.navigate("FirstScreen");
        },3000);
    }
    useEffect(() => {
        gotoApp()
    })
    return(
        <View style={{justifyContent:"center",alignItems:"center",height:height,width:width,backgroundColor:Colors.TextColor}}>
            <Image
             source={require('../logo/dukuwhite.png')}
             style={{
                 height:200,
                 width:200,
                 resizeMode:"center"
             }}
             />
        </View>
    )
}

export default SplashScreeen;