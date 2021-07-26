import { useRoute } from '@react-navigation/native';
import { Input } from 'galio-framework';
import React,{useState} from 'react';
import { FlatList } from 'react-native';
import { ImageBackground } from 'react-native';
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
import Colors from '../../Constants/Colors';
import Style, { IconType, SIZES } from '../../Constants/Style';
import Urls from '../../Constants/Urls';
import DummyViewerList from '../../Data/DummyViewerList';
// --------------- //
import PictureInPicture from 'react-native-picture-in-picture';
// ------------------------------------- //
const Header=({meetingName})=>{
    const PIP_MODE=()=>{
        PictureInPicture.start();
    }
    return(
        <View style={styles.HEADER}>
            <View style={styles.HEADER_1}>
                <TouchableOpacity>
                    <Icon name="arrow-back" type={IconType} size={SIZES.iconSize} color={Colors.white} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.HEADER_TEXT}>
                        {meetingName} ▶
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.HEADER_2}>
                <TouchableOpacity onPress={()=>PIP_MODE()}>
                    <Icon name="camera-reverse-outline" type={IconType} size={SIZES.iconSize}  color={Colors.white} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="volume-high-outline" type={IconType} size={SIZES.iconSize} color={Colors.white}  />
                </TouchableOpacity>
            </View>
        </View>
    )
}
// ------------------------------ //
const FooterButtons=()=>{
    const [video,setvideo]=useState(false);
    const [mic,setMic]=useState(false);
    return(
        <View style={styles.FOOTER_BUTTONS}>
            <TouchableOpacity>
                <Icon name="call-end" type="simple-line-icon" size={SIZES.iconSize} reverse color="red" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setvideo(!video)}>
                {
                    video ? (
                        <Icon name="video" type="feather" size={SIZES.iconSize} reverse color={Colors.white} reverseColor={Colors.TextColor} />
                    ) : (
                        <Icon name="video-off" type="feather" size={SIZES.iconSize} reverse color={Colors.white} reverseColor={Colors.TextColor} />

                    )
                }
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setMic(!mic)}>
                {
                    mic ? (
                        <Icon name="mic-outline" type={IconType} size={SIZES.iconSize} reverse color={Colors.white} reverseColor={Colors.TextColor} />
                    ) : (
                        <Icon name="mic-off-outline" type={IconType} size={SIZES.iconSize} reverse color={Colors.white} reverseColor={Colors.TextColor} />

                    )
                }
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="ellipsis-vertical-outline" type={IconType} size={SIZES.iconSize} reverse color={Colors.white} reverseColor={Colors.TextColor} />
            </TouchableOpacity>
        </View>
    )
}
// -------------------------------- //
const BrodcasterScreen=({BrodcasterData})=>{
    return(
        <View style={{}}>
            <Image
             source={{uri:BrodcasterData.img}}
             style={{height:SIZES.ScreenHeight,width:SIZES.ScreenWidth,resizeMode:"cover"}}
             />
        </View>
    )
}
// ------------------------------------ //

const VideoView=()=>{
    const [Brodcaster,setBrodcaster]=useState(null);
    const route = useRoute()
    const [meetingName,setMeetingname]=useState(route.params.data.meetingName);
    // console.log(meetingName);
    const [Video_Viewer,setVideo_viewer]=useState(true);

    return(
        <View style={{flex:1}}>
            {
                Brodcaster === null ? (
                    <View style={{backgroundColor:Colors.TextColor,flex:1}}>

                    </View>
                )
                : (
                    <BrodcasterScreen BrodcasterData={Brodcaster} />
                ) 
            }
            <Header meetingName={meetingName} />
             <View style={[styles.VIEWERS_VIEW]}>
                 <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flex:1}}>
                 {
                     DummyViewerList.map((val,ind)=>{
                         return(
                            <View style={{margin:5}} key={ind}>
                                <TouchableOpacity activeOpacity={0.5} onPress={()=>{setBrodcaster(val)}}>
                                    {
                                        val.video ? (
                                            <ImageBackground
                                                source={{uri:val.img}}
                                                style={{height:200,width:SIZES.ScreenWidth/3.3,borderRadius:20}}
                                                imageStyle={{borderRadius:20}}
                                                >
                                                    {/* Raised Hand */}
                                                    {
                                                        val.hand ? (
                                                            <View style={{
                                                                backgroundColor:"#FFF",
                                                                position:"absolute",
                                                                borderTopRightRadius:20,
                                                                right:0,
                                                                borderRadius:5,
                                                                elevation:5
                                                                }}
                                                                >
                                                                <Icon
                                                                name="hand-right-outline" 
                                                                type={IconType} 
                                                                size={SIZES.iconSize+7}
                                                                color={Colors.TextColor}
                                                                />
                                                            </View>
                                                        ) : null
                                                    }
                                                    {/* MUTED OR NOT */}
                                                    {
                                                        val.mute ? (
                                                            <View style={{backgroundColor:"#FFF",position:"absolute",borderBottomEndRadius:20,right:0,borderRadius:5,elevation:5,bottom:0}}>
                                                                <Icon name="mic-off-outline" type={IconType} size={SIZES.iconSize} color={Colors.TextColor} />
                                                            </View>
                                                        ) : (
                                                            <View style={{backgroundColor:"#FFF",position:"absolute",borderBottomEndRadius:20,right:0,borderRadius:5,elevation:5,bottom:0}}>
                                                                <Icon name="mic-outline" type={IconType} size={SIZES.iconSize} color={Colors.TextColor} />
                                                            </View>
                                                        )
                                                    }
                                                </ImageBackground>
                                        ) : (
                                            <View style={{height:200,width:SIZES.ScreenWidth/3.25,borderRadius:20,backgroundColor:Colors.backgroundColor,justifyContent:"center"}}>
                                                <View style={{justifyContent:"center"}}>
                                                    <Image source={{uri:val.userImg}} style={{height:70,width:70,borderRadius:35,alignSelf:"center"}}  />
                                                </View>
                                                    {/* Raised Hand */}
                                                    {
                                                        val.hand ? (
                                                            <View style={{backgroundColor:"#FFF",position:"absolute",borderTopRightRadius:20,right:0,borderRadius:5,elevation:5,top:0}}>
                                                                <Icon
                                                                name="hand-right-outline" 
                                                                type={IconType} 
                                                                size={SIZES.iconSize+7}
                                                                color={Colors.TextColor}
                                                                />
                                                            </View>
                                                        ) : null
                                                    }
                                                    {/* MUTED OR NOT */}
                                                    {
                                                        val.mute ? (
                                                            <View style={{backgroundColor:"#FFF",position:"absolute",borderBottomEndRadius:20,right:0,borderRadius:5,elevation:5,bottom:0}}>
                                                                <Icon name="mic-off-outline" type={IconType} size={SIZES.iconSize} color={Colors.TextColor} />
                                                            </View>
                                                        ) : (
                                                            <View style={{backgroundColor:"#FFF",position:"absolute",borderBottomEndRadius:20,right:0,borderRadius:5,elevation:5,bottom:0}}>
                                                                <Icon name="mic-outline" type={IconType} size={SIZES.iconSize} color={Colors.TextColor} />
                                                            </View>
                                                        )
                                                    }
                                                </View>
                                        )
                                    }
                                </TouchableOpacity>
                            </View>
                         )
                     })
                 }
                 </ScrollView>
                 <FooterButtons />
             </View>
             {/* Buttons */}

        </View>
    )
}

const styles=StyleSheet.create({
    HEADER:{
        flexDirection:"row",
        position:"absolute",
        top:22,
        alignItems:"center",
        justifyContent:"space-between",
        width:"90%",
        alignSelf:"center"
    },
    HEADER_1:{
        flexDirection:"row",
        alignItems:"center",
    },
    HEADER_2:{
        flexDirection:"row",
        alignItems:"center",
        width:"20%",
        justifyContent:"space-between"
    },
    HEADER_TEXT:{
        marginHorizontal:5,
        fontSize:16,
        color:Colors.white
    },
    FOOTER_BUTTONS:{
        flexDirection:"row",
        alignSelf:"center"
    },
    VIEWERS_VIEW:{
        position:"absolute",
        bottom:0,
        // borderRadius:30
    }
})

export default VideoView;