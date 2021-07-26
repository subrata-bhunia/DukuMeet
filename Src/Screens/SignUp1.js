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
import Style, { IconType } from '../Constants/Style';
import {
    BarIndicator
  } from 'react-native-indicators';
// ----------------- //
const UPLOAD_PHOTO=()=>{
    return(
        <View style={styles.UPLOAD}>
            <TouchableOpacity activeOpacity={0.7}>
                <Icon
                name="camera-outline"
                type={IconType}
                size={24}
                reverse
                // reverseColor={Colors.TextColor}
                color={Colors.TextColor}
                />
            </TouchableOpacity>
            <Text style={styles.UPLOAD_TEXT}>
                Upload Photo
            </Text>
        </View>
    )
}
// ------------------ //
const SignUP1=(props)=>{
    const [spiner,setSpiner]=useState(false);
    const gotoSignIn=()=>{
        props.navigation.navigate('Login')
    }
    const gotoHomeScreen=()=>{
        setSpiner(!spiner)
    }
    return(
        <View style={styles.Main}>
            <SLHeader />
            <View style={styles.SEC_SECTION}>
                <Text style={styles.REGISTER_TEXT}>Register</Text>  
                <UPLOAD_PHOTO />
                <View>
                    <Input
                        placeholder="Full Name"  
                        placeholderTextColor="#fff"
                        type="default"
                        spellCheck={false}
                        left
                        icon="edit"
                        family="antdesign"
                        iconSize={20}
                        style={styles.INPUT}
                        color="#FFF"
                     />
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
                    <Input
                        placeholder="Confirm Password" 
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
                <View>
                    <Text style={{textAlign:'center',color:Colors.TextColor}}>By clicking Register, you agree on our</Text>
                    <TouchableOpacity>
                        <Text style={[Style.linktext]}>termes and conditions.</Text>
                    </TouchableOpacity>
                </View>
                {
                    spiner===false &&
                    <TouchableOpacity style={[Style.LogInButton,{backgroundColor:Colors.TextColor,width:"50%"}]} onPress={gotoHomeScreen} activeOpacity={0.5}>
                    <Text style={Style.ButtonText}>
                    Register
                    </Text>
                    </TouchableOpacity>
                }
                {
                    spiner===true &&
                    <TouchableOpacity style={[Style.LogInButton,{height:45,backgroundColor:Colors.TextColor,width:"50%"}]} onPress={gotoHomeScreen} activeOpacity={0.5}>
                    <BarIndicator color="#fff" size={30} count={6} />
                </TouchableOpacity>
                }
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
const styles=StyleSheet.create({
    Main:{
        backgroundColor:"#FfF",
        flex:1
    },
    UPLOAD:{
        position:"absolute",
        right:10,
        top:-10,
        alignItems:"center"
    },
    UPLOAD_TEXT:{
        // fontSize:15,
        // textTransform:"uppercase",
        color:Colors.TextColor,
        opacity:1,
        fontWeight:"600"
    },
    SEC_SECTION:{
        padding:20,
    },
    REGISTER_TEXT:{
        fontSize:30,
        marginTop:12,
        fontWeight:"bold",
        color:Colors.TextColor,
        letterSpacing:1.3
    },
    INPUT:{
        borderRadius:20,
        backgroundColor:Colors.TextColor,
        elevation:3,
        margin:3
    }
})
export default SignUP1;