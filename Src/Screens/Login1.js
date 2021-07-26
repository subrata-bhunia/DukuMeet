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

const Login1=(props)=>{
    const gotoSignUp=()=>{
        props.navigation.navigate('SignUp');
    }
    const gotoHomeScreen=()=>{
        setSpiner(true)
        setTimeout(function(){ 
            setSpiner(false);
            props.navigation.navigate('Drawer');
        }, 300);
    }
    const gotoForgetPassword=()=>{
        props.navigation.navigate('ForgetPass');
    }
    const [spiner,setSpiner]=useState(false);
    return(
        <View style={styles.Main}>
           <SLHeader />
           <View style={styles.SEC_2}>
              <Image
               source={require('../Images/1.png')} 
               style={styles.IMAGE_VIEW} />
            <View>
                <Text style={styles.LOGIN_TEXT}>Login</Text>
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
            <Input
                placeholder="Password" 
                password 
                viewPass 
                style={styles.INPUT}
                placeholderTextColor="#FFF"
                left
                icon="ios-lock-closed-outline"
                family={IconType}
                iconSize={20}
                color="#FFF"
            />
            </View>
            {
                spiner===false &&
                <TouchableOpacity style={[Style.LogInButton,{backgroundColor:Colors.TextColor,width:"50%"}]} onPress={gotoHomeScreen} activeOpacity={0.5}>
                <Text style={Style.ButtonText}>
                Login
                </Text>
                </TouchableOpacity>
            }
            {
                spiner===true &&
                <TouchableOpacity style={[Style.LogInButton,{height:45,backgroundColor:Colors.TextColor,width:"50%"}]} onPress={gotoHomeScreen} activeOpacity={0.5}>
                <BarIndicator color="#fff" size={30} count={6} />
            </TouchableOpacity>
            }
            <TouchableOpacity onPress={()=>gotoForgetPassword()}>
                <Text style={Style.linktext}>Forget Password ?</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row',alignSelf:'center'}}>
                <Text style={{color:Colors.TextColor}} >
                    Don't have an account yet ?{" "}
                </Text>
                <TouchableOpacity onPress={gotoSignUp}>
                    <Text style={Style.linktext}>
                    Register
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export const styles=StyleSheet.create({
    Main:{
        backgroundColor:"#FFF",
        flex:1
    },
    IMAGE_VIEW:{
        height:SIZES.ScreenHeight/4,
        width:"100%",
        resizeMode:"center",
        alignSelf:"center"
    },
    LOGIN_TEXT:{
        fontSize:30,
        fontWeight:"bold",
        color:Colors.TextColor,
        letterSpacing:1.3,
        textAlign:"center"
    },
    INPUT:{
        borderRadius:20,
        backgroundColor:Colors.TextColor,
        elevation:3,
        margin:3
    },
    SEC_2:{
        padding:20,
    }
})
export default Login1;