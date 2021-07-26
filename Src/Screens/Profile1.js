import { useNavigation } from '@react-navigation/native';
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
    KeyboardAvoidingView,
    ImageBackground,
    FlatList
  } from 'react-native';
import { Icon } from 'react-native-elements';
import { Card, TextInput } from 'react-native-paper';
import SLHeader from '../Components/Login&SignUpHeader';
import Colors from '../Constants/Colors';
import Style, { IconType, SIZES } from '../Constants/Style';
import Urls from '../Constants/Urls';
import UpdateProfile from '../Data/UpdateProfile';
import {ButtomNav} from './Home1';

// -------------------- //
export const Top=()=>{
    return(
        <View style={styles.TOP_VIEW} />
    )
}
// ---------------------- //
export const CustomHeader2=()=>{
    const navigation=useNavigation();
    
    return(
        <View style={styles.Header}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Icon
                 name="arrow-back"
                 type={IconType}
                 size={SIZES.iconSize}
                 color={Colors.TextColor}
                 />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon
                 name="dots-three-vertical"
                 type="entypo"
                 size={SIZES.iconSize}
                 color={Colors.TextColor}
                 />
            </TouchableOpacity>
        </View>
    )
}
// -------------------- //
const ProfilePic=({imgUrl})=>{
    return(
        <View style={styles.ProfilePicView}>
            <ImageBackground
             style={styles.ProfilePic}
             source={{uri:imgUrl}}
             imageStyle={styles.ProfilePic}
             >
                 <View style={styles.EDIT_PROFILEPIC}>
                    <TouchableOpacity style={styles.EDIT_PROFILEPIC} activeOpacity={0.5}>
                    <Icon
                    name="camera-outline"
                    type={IconType}
                    size={15}
                    reverse
                    color="#eee"
                    reverseColor={Colors.TextColor}
                    />
                    </TouchableOpacity>
                 </View>
            </ImageBackground>
        </View>
    )
}
// -------------------- //
const CountSessions=({Scheduled_No,Recordings_No,Total_No})=>{
    return(
        <View style={styles.COUNTVIEW}>
            <View style={styles.COUNT}>
                <Text style={styles.COUNT_H1}>
                    Scheduled
                </Text>
                <Text style={styles.COUNT_H2}>
                    {Scheduled_No}
                </Text>
            </View>
            <View style={styles.COUNT}>
                <Text style={styles.COUNT_H1}>
                    Recordings
                </Text>
                <Text style={styles.COUNT_H2}>
                    {Recordings_No}
                </Text>
            </View>
        </View>
    )
}
// ---------------------- //
const CardView=({item,index})=>{
    return(
        <Card style={[styles.CARDVIEW1,{backgroundColor:item.backgroundColor}]} key={index}>
            <View style={{padding:10}}>
                <Icon
                 name={item.iconName}
                 type={IconType}
                 size={SIZES.iconSize-10}
                 raised
                 color={Colors.TextColor}
                 />
                 <Text style={styles.COUNT_H1}>
                     {item.H1}
                 </Text>
                 <Text style={[styles.COUNT_H2,{marginTop:10}]}>
                     {item.step} Steps{"\n"}Left
                 </Text>
                 <View style={styles.DIVIDER} />
                 <View style={styles.CARDVIEW_ICON}>
                     <TouchableOpacity>
                         <Icon
                          name="arrow-forward-outline"
                          type={IconType}
                          size={SIZES.iconSize-6}
                          color={Colors.TextColor}
                          />
                     </TouchableOpacity>
                 </View>
            </View>
        </Card>
    )
}

const Profile1 =()=>{
    return(
        <View style={styles.Main}>
            <CustomHeader2 />
            <View>
                <Top />
                <ProfilePic imgUrl="https://i.pinimg.com/originals/73/16/f5/7316f550de9ca0045e3d8d98a5bb5e44.png" />
            </View>
            <View style={styles.SEC2}>
                <CountSessions
                 Scheduled_No={3}
                 Recordings_No={2}
                 Total_No={40}
                />
                <View style={styles.COMPLETEVIEW}>
                    <Text style={styles.COMPLETETEXT}>
                        Complete Profile
                    </Text>
                </View>
                <View>
                    <FlatList
                     renderItem={CardView}
                     data={UpdateProfile}
                     horizontal
                     showsHorizontalScrollIndicator={false}
                     keyExtractor={(index)=>index.navigate}
                     />
                </View>
            </View>
            <ButtomNav />
        </View>
    )
}

const styles=StyleSheet.create({
    Main:{
        flex:1,
        backgroundColor:Colors.backgroundColor
    },
    Header:{
        marginHorizontal:10,
        marginVertical:20,
        alignSelf:"center",
        flexDirection:"row",
        justifyContent:"space-between",
        width:"90%"
    },
    TOP_VIEW:{
        backgroundColor:Colors.TextColor,
        height:SIZES.ScreenHeight/6,
        transform:[{skewY:"-12deg"}],
        width:SIZES.ScreenWidth+100,
        marginTop:40,
        marginStart:-30
    },
    ProfilePic:{
        height:100,
        width:100,
        borderRadius:30
    },
    EDIT_PROFILEPIC:{
        position:"absolute",
        right:-10
    },
    ProfilePicView:{
        position:"absolute",
        alignSelf:"center",
        top:100
    },
    SEC2:{
        paddingHorizontal:30,
        marginTop:SIZES.ScreenHeight/13
    },
    COUNTVIEW:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center"
    },
    COUNT:{
        alignItems:"center"
    },
    COUNT_H1:{
        letterSpacing:0.6,
        fontSize:15,
        fontWeight:"bold",
        color:Colors.TextColor,
        opacity:0.4
    },
    COUNT_H2:{
        letterSpacing:1.3,
        fontWeight:"bold",
        fontSize:17,
        color:Colors.TextColor
    },
    COMPLETETEXT:{
        fontSize:20,
        fontWeight:"bold",
        color:Colors.TextColor
    },
    COMPLETEVIEW:{
        marginVertical:30
    },
    CARDVIEW1:{
        height:SIZES.ScreenHeight/4,
        width:SIZES.ScreenWidth/2.6,
        marginLeft:14,
        borderRadius:20
    },
    DIVIDER:{
        height:2,
        width:42,
        backgroundColor:Colors.TextColor,
        marginVertical:3
    },
    CARDVIEW_ICON:{
        position:"absolute",
        bottom:5,
        right:30,
    }

})

export default Profile1;