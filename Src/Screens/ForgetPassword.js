import { Input } from 'galio-framework';
import React,{useState} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView
  } from 'react-native';
import { Icon } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import SLHeader from '../Components/Login&SignUpHeader';
import Colors from '../Constants/Colors';
import Style, { IconType, SIZES } from '../Constants/Style';
import {
    BarIndicator
  } from 'react-native-indicators';
import { styles } from './Login1';



  const ForgetPass=(props)=>{
    const [spiner,setSpiner]=useState(false);
    const gotoSignUp=()=>{
        props.navigation.navigate('SignUp');
    }
    const gotoSignIn=()=>{
        props.navigation.navigate('Login')
    }
    const gotoHomeScreen=()=>{
        setSpiner(!spiner)
    }
      return(
          <View style={styles.Main}>
              <SLHeader />
              <View style={styles.SEC_2}>
                <Image
                source={require('../Images/1.png')} 
                style={styles.IMAGE_VIEW} />
                <View>
                    <Text style={styles.LOGIN_TEXT}>Forget Password</Text>
                </View>
                <View>
                    <Input
                        placeholder="Email Address"  
                        style={styles.INPUT}
                        placeholderTextColor="#FFF"
                        type="email-address"
                        left
                        icon="mail-outline"
                        family={IconType}
                        iconSize={20}
                        color="#FFF"
                    />
                </View>
                {
                    spiner===false &&
                    <TouchableOpacity
                     style={[Style.LogInButton,{backgroundColor:Colors.TextColor,width:"50%"}]} 
                     onPress={()=>gotoHomeScreen()} 
                     activeOpacity={0.5}>
                    <Text style={Style.ButtonText}>
                    Submit
                    </Text>
                    </TouchableOpacity>
                }
                {
                    spiner===true &&
                    <TouchableOpacity
                     style={[Style.LogInButton,{height:45,backgroundColor:Colors.TextColor,width:"50%"}]} 
                     onPress={()=>gotoHomeScreen()} 
                     activeOpacity={0.5}>
                        <BarIndicator color="#fff" size={30} count={6} />
                    </TouchableOpacity>
                }
                <View style={{flexDirection:'row',alignSelf:'center'}}>
                    <Text style={{color:Colors.TextColor}}>
                        Don't have an account yet ?{" "}
                    </Text>
                    <TouchableOpacity onPress={gotoSignUp}>
                        <Text style={Style.linktext}>
                        Register
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',alignSelf:'center'}}>
                    <Text style={{color:Colors.TextColor}}>
                        Already have an account ?{" "}
                    </Text>
                    <TouchableOpacity onPress={gotoSignIn}>
                        <Text style={Style.linktext}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
              </View>
          </View>
      )
  }


  export default ForgetPass;