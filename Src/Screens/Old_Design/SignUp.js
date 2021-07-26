import React, { useState } from 'react';
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
import Style from '../../Constants/Style';
// import {Icon,CheckBox} from 'react-native-elements';
import {Input} from 'galio-framework';
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
  } from 'react-native-indicators';
import Urls from '../../Constants/Urls';
import  Colors  from '../../Constants/Colors';

const defaultAvatar=Urls.company_logo_main
const SignUp=(props)=>{
    var [profileAvatar,setProfileAvatar]=useState(defaultAvatar);
    const [male,setMale]=useState(false);
    const [female,setFemale]=useState(false);
    const [others,setOthers]=useState(false);
    const [spiner,setSpiner]=useState(false);
    const gotoSignIn=()=>{
        props.navigation.navigate('Login')
    }
    const gotoHomeScreen=()=>{
        setSpiner(!spiner)
    }
    
      return(
          <View>
              {/* Profile Avatar */}
              <View>
                <Image
                    // source={{
                    //     uri:profileAvatar
                    // }}
                    source={require('../logo/Logo.png')}
                    
                    style={[Style.C_logo,{resizeMode:"contain",borderRadius:0}]}
                    />
                    <Text style={Style.Heading_msg}>
                       Create New Account
                    </Text>
                </View>
                <KeyboardAvoidingView
                 style={{flex:0}}
                 behavior='padding'
                 enabled={true}
                 >
                    <ScrollView>
                        <View style={[Style.InputView_signup,{flex:1}]}>
                            <Input
                            placeholder="Full Name"  
                            style={Style.InputStyle}
                            placeholderTextColor="#777"
                            type="default"
                            spellCheck={false}
                            left
                            icon="edit"
                            family="antdesign"
                            iconSize={14}
                            />
                            <Input
                            placeholder="Email"  
                            style={Style.InputStyle}
                            placeholderTextColor="#777"
                            type="email-address"
                            left
                            icon="email"
                            family="entypo"
                            iconSize={14}
                            />
                            <Input
                            placeholder="Password" 
                            password 
                            viewPass 
                            style={Style.InputStyle}
                            placeholderTextColor="#777"
                            left
                            icon="key"
                            family="entypo"
                            iconSize={14}
                            />
                            <Input
                            placeholder="Confirm Password" 
                            password 
                            viewPass 
                            style={Style.InputStyle}
                            placeholderTextColor="#777"
                            left
                            icon="key"
                            family="entypo"
                            iconSize={14}
                            />
                            <View>
                                <Text style={{textAlign:'center'}}>By clicking Register, you agree on our</Text>
                                <TouchableOpacity>
                                    <Text style={[Style.linktext]}>termes and conditions.</Text>
                                </TouchableOpacity>
                            </View>
                            {
                         spiner===false &&
                         <TouchableOpacity style={[Style.LogInButton,{backgroundColor:Colors.btnColor}]} onPress={gotoHomeScreen}>
                            <Text style={Style.ButtonText}>
                            Register
                            </Text>
                         </TouchableOpacity>
                     }
                     {
                         spiner===true &&
                         <TouchableOpacity style={[Style.LogInButton,{height:45,backgroundColor:Colors.btnColor}]} onPress={gotoHomeScreen}>
                            <BarIndicator color="#fff" size={30} count={6} />
                        </TouchableOpacity>
                     }
                            <View style={{flexDirection:'row',alignSelf:'center'}}>
                                <Text>
                                    Already a member ?{" "}
                                </Text>
                                <TouchableOpacity onPress={gotoSignIn}>
                                    <Text style={Style.linktext}>
                                        Login
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
          </View>
      )
}

  export default SignUp;