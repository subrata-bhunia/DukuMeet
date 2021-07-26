import React, { useState } from 'react';
import {
    ScrollView,
    Text,
    View,
    Image,
    TouchableOpacity,
    StatusBar
  } from 'react-native';
import {
    BarIndicator
} from 'react-native-indicators';
import {Input} from 'galio-framework';
import Style from '../Constants/Style';
import Urls from '../Constants/Urls';
import Colors from '../Constants/Colors';

const Login=(props)=>{
    const gotoSignUp=()=>{
        props.navigation.navigate('SignUp');
    }
    const gotoHomeScreen=()=>{
        setFocusPass(false);
        setFocusEmail(false);
        setSpiner(true)
        setTimeout(function(){ 
            setSpiner(false);
            props.navigation.navigate('Home1');
        }, 300);
    }
    // const gotoForgetPassword=()=>{
    //     props.navigation.navigate('ForgetPass');
    // }
    const [spiner,setSpiner]=useState(false);
    const [focusEmai,setFocusEmail]=useState(false);
    const [focusPass,setFocusPass]=useState(false);
    const onFocusChangeEmail=()=>{
        setFocusEmail(true);
        setFocusPass(false);

    }
    const onFocusChangePass=()=>{
        setFocusPass(true);
        setFocusEmail(false);
    }
      return(
          <View>
              <View>
                  <StatusBar backgroundColor={Colors.firstColor} />
                  {/* Company Logo */}
                  <Image
                    style={[Style.C_logo,{resizeMode:"contain",borderRadius:0,}]}
                    // source={{uri:Urls.company_logo_main}}
                    source={require('../logo/Logo.png')}
                    />
                    {/* Heading Msg */}
                    <Text style={Style.Heading_msg}>
                        Welcome Back.
                    </Text>
                    {/* Inputs */}
                    <View style={Style.InputView}>
                    <Input
                     placeholder="Email"
                     style={focusEmai ? Style.InputStyle_Focus : Style.InputStyle}
                     placeholderTextColor="#777"
                     type="email-address"
                     onFocus={()=>onFocusChangeEmail()}
                     left
                     icon="email"
                     family="entypo"
                     iconSize={14}
                    //  iconColor="red"
                     />
                    <Input
                     placeholder="Password" 
                     password 
                     viewPass 
                     style={focusPass ? Style.InputStyle_Focus : Style.InputStyle}
                     placeholderTextColor="#777"
                     onFocus={()=>onFocusChangePass()}
                     left
                     icon="key"
                     family="entypo"
                     iconSize={14}
                    //  iconColor="red"
                     />
                     {
                         spiner===false &&
                         <TouchableOpacity style={[Style.LogInButton,{backgroundColor:Colors.btnColor}]} onPress={gotoHomeScreen}>
                            <Text style={Style.ButtonText}>
                                Log In
                            </Text>
                         </TouchableOpacity>
                     }
                     {
                         spiner===true &&
                         <TouchableOpacity style={[Style.LogInButton,{height:45,backgroundColor:Colors.btnColor}]} onPress={gotoHomeScreen}>
                            <BarIndicator color="#fff" size={30} count={6} />
                        </TouchableOpacity>
                     }
                     <TouchableOpacity onPress={()=>console.log("Test")}>
                         <Text style={Style.linktext}>Forget Password ?</Text>
                     </TouchableOpacity>
                     <View style={{flexDirection:'row',alignSelf:'center'}}>
                         <Text >
                             Don't have an account yet ?{" "}
                         </Text>
                         <TouchableOpacity onPress={gotoSignUp}>
                             <Text style={Style.linktext}>
                                Sign Up
                             </Text>
                         </TouchableOpacity>
                     </View>
                    </View>
              </View>
          </View>
      )
  }


  export default Login;