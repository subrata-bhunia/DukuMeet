import React,{useEffect, useState} from 'react';
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    BackHandler,
    Image
} from 'react-native';
import Style from '../Constants/Style';
import Toast from 'react-native-root-toast';
import { useRoute } from '@react-navigation/core';
import Colors from '../Constants/Colors';

export default function FirstScreen({navigation}){
const route=useRoute();
    const gotoLoginPage=()=>{
        navigation.navigate("Login");
    }
    const gotoSignUpPage=()=>{
        navigation.navigate("SignUp")
    }
    return(
        <View style={{flex:1,backgroundColor:Colors.MainColor}}>
            <View>
                 {/* <View style={Style.ThreeDots}>
                     <View style={Style.ThreeDots1} />
                     <View style={Style.ThreeDots2} />
                     <View style={Style.ThreeDots2} />
                 </View> */}
                 <Image
                    source={require('../logo/dukuwhite.png')}
                    style={{
                        height:70,
                        width:70,
                        resizeMode:"center",
                        position:"absolute",
                        alignSelf:"center",
                        top:50
                    }}
                    />
                    <Text
                      style={Style.TextStyle}>
                         Create meetings and invite your colleagues.😎
                     </Text>
                 <View>
                     
                 </View>
            </View>
            <View style={Style.BtnView}>
                     <TouchableOpacity
                      style={[Style.LogInButton,Style.Btn1,{backgroundColor:Colors.white}]}
                      activeOpacity={0.5}
                      onPress={()=>gotoSignUpPage()}>
                         <Text style={[Style.Btn1Text,{color:Colors.TextColor}]}>SIGN UP</Text>
                     </TouchableOpacity>
                     <TouchableOpacity
                       style={{marginTop:15}}
                       activeOpacity={0.5}
                       onPress={()=>gotoLoginPage()}>
                         <Text style={[Style.Btn2Text,{color:Colors.white}]}>LOGIN</Text>
                     </TouchableOpacity>
                 </View>
        </View>
    )
}