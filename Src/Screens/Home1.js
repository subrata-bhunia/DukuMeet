import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
  StyleSheet
} from 'react-native';
import { Input,Icon as GIcon } from 'galio-framework';
import Style, { IconType, SIZES } from '../Constants/Style';
import Colors from '../Constants/Colors';
import Urls from '../Constants/Urls';
import { Button,Icon,CheckBox,Card as Ecard } from 'react-native-elements';
import { DrawerActions, useNavigation, useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { Card } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import DummyMeetins from '../Data/DummyMeetins';
import Share from 'react-native-share'
// ---------------------------- //
export const HeaderSec=()=>{
    const navigation=useNavigation();
    return(
        <View
         style={styles.Header}>
            <TouchableOpacity
              onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}
            >
                <Icon
                 name="grid-outline" 
                 type={IconType} 
                 size={SIZES.iconSize}
                 color={Colors.TextColor}
                 />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon
                 name="notifications-outline" 
                 type={IconType} 
                 size={SIZES.iconSize}
                 color={Colors.TextColor}
                 />
            </TouchableOpacity>
        </View>
    )
}
// ---------------------------- //
const GreetingsSec=()=>{
    return(
        <View>
            <Text style={styles.Greeting1}>Hi, John 👋</Text>
            <Text style={styles.Greeting2}>Are you ready for a meeting ?</Text>
        </View>
    )
}
// ---------------------------- //
const LatestScheduledMettingCard=({meetingImg,meetingName,meetingTime,meetingPeople})=>{
    return(
        <TouchableOpacity activeOpacity={0.5}>
            <Card style={styles.LatestScheduledMettingCard}>
                <View
                 style={{
                     alignItems:"center",
                     flexDirection:"row",
                     height:"100%",
                     marginHorizontal:10,
                }}
                     >
                    <Image
                    source={{uri:meetingImg}}
                    style={styles.MettingImgage}
                    />
                    <View style={{marginHorizontal:15}}>
                        <Text style={styles.SCHEDULEDText}>
                            SCHEDULED MEETING
                        </Text>
                        <Text style={styles.MEETING_NAME}>
                            {meetingName}
                        </Text>
                        <Text style={styles.OTHERS_DETAILS}>
                            {meetingTime} ● {meetingPeople} People
                        </Text>
                    </View>
                </View>
            </Card>
        </TouchableOpacity>
    )
}
// --------------------------- //
const MeetingsForYou=()=>{
    const navigation=useNavigation();
    // ------ SHARE LINK ----------------//
    const shareSms = async ({massage_title,massage}) => {
        var msg=massage;
        var msg_title= massage_title;
        const shareOptions = {
          title:msg_title,
        //   social: Share.Social.EMAIL,
          message:msg,
          
        };
    
        try {
          const ShareResponse = await Share.open(shareOptions);
        //   setResult(JSON.stringify(ShareResponse, null, 2));\\
        console.log(massage,massage_title,ShareResponse)
        } catch (error) {
          console.log('Error =>', error);
        //   setResult('error: '.concat(getErrorString(error)));
        console.log("ERROR --------->",error)
        }
      };
    // ------------------------------------ //
    const gotoVideoCall=({data})=>{
        navigation.navigate("Video1",{data})
    }
    const renderItem=({item,index})=>{
        return(
            <View style={styles.slide}>
                <Image
                 source={{uri:item.meetingImg}}
                 style={styles.slide_img}
                />
                <View style={{alignSelf:"center"}}>
                    <Text style={[styles.MEETING_NAME,{color:Colors.white,textAlign:"center"}]}>
                        {item.meetingName}
                    </Text>
                    <Text style={[styles.OTHERS_DETAILS,{color:Colors.white,textAlign:"center"}]}>
                        {item.meetingTime} ● {item.meetingPeople} People
                    </Text>
                </View>
                {/* <View style={styles.DIVIDER} /> */}
                <View
                 style={styles.JOIN_BUTTON}>
                    <TouchableOpacity onPress={()=>shareSms({
                        massage:"I am invinting you to "+`${item.meetingName}`+" at "+`${item.meetingTime}`+" with "+`${item.meetingPeople}`+" people. Invitation link : "+`${item.meetingLink}`,
                        massage_title:`${item.meetingName}'s invitation link`
                    })}>
                    <Icon
                     name="share-social-outline"
                     type={IconType}
                     size={SIZES.iconSize}
                     color={Colors.white}
                     />
                    </TouchableOpacity>
                    <TouchableOpacity
                     onPress={()=>gotoVideoCall({data:item})}
                    >
                    <Icon
                     name="ios-arrow-forward-circle-outline"
                     type={IconType}
                     size={SIZES.iconSize+10}
                     color={Colors.white}
                     />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    return(
        <View>
            <Text style={styles.MeetingsForYou}>
                Meetings for you 
            </Text>
            <Carousel
             renderItem={renderItem}
             data={DummyMeetins}
             sliderWidth={SIZES.ScreenWidth}
             itemWidth={SIZES.ScreenWidth*0.8}
             loop={true}
             inactiveSlideOpacity={0.4}
             inactiveSlideScale={0.9}
            />
        </View>
    )
}
// -------------------------- //
export const ButtomNav=()=>{
    const navigation= useNavigation();
    const route=useRoute();
    const gotoProfile=()=>{
        navigation.navigate("Profile1")
    }
    const gotoHome=()=>{
        navigation.navigate("Drawer")
    }
    // console.log(route.name)
    var activeColor=Colors.TextColor
    var inActive="#999"
    return(
        <Ecard containerStyle={styles.ButtomNav}>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <TouchableOpacity activeOpacity={0.5} onPress={()=>gotoHome()}>
                    <Icon
                    name="home"
                    type="antdesign"
                    size={35}
                    color={route.name === 'Home' ? activeColor : inActive}
                    />
                </TouchableOpacity>
                 <View style={{position:"absolute",alignSelf:"center",width:"100%",left:SIZES.ScreenWidth/7,bottom:-7}}>
                 <Icon
                    name="plus"
                    type="entypo"
                    size={40}
                    reverse
                    style={{alignSelf:"center",elevation:10}}
                    reverseColor={Colors.white}
                    color="#ab61ab"
                />
                 </View>
                <TouchableOpacity onPress={()=>gotoProfile()}>
                    <Icon
                    name="account-outline" 
                    size={35}
                    type="material-community"
                    color={route.name === 'Profile1' ? activeColor : inActive}
                    />
                </TouchableOpacity>
            </View>
        </Ecard>
    )
}
// --------------------------- //

const Home1=({route})=>{
    // const {
    //     params: { id },
    //   } = route;
    //   console.log(id)
    return(
        <View style={styles.Main}>
            <ScrollView style={{}}>
                <HeaderSec />
                <View style={styles.SEC2}>
                    <GreetingsSec />
                    <LatestScheduledMettingCard
                        meetingImg="https://media.istockphoto.com/photos/the-african-king-picture-id492611032?k=6&m=492611032&s=612x612&w=0&h=Y_CHJCbkFOqmXvHOYSdxu0T5UZqoRj7OzpIBLGkvf_Q="
                        meetingName="Meeting Name "
                        meetingTime="July 12, 08:00 AM"
                        meetingPeople={10}
                        />
                </View>
                <MeetingsForYou />
            </ScrollView>
            <ButtomNav />
            
        </View>
    )
}
const styles=StyleSheet.create({
    Main:{
        backgroundColor:Colors.backgroundColor,
        flex:1
    },
    Header:{
        marginHorizontal:10,
        marginVertical:20,
        alignSelf:"center",
        flexDirection:"row",
        justifyContent:"space-between",
        width:"90%"
    },
    SEC2:{
        paddingHorizontal:30,
    },
    Greeting1:{
        fontSize:SIZES.ScreenHeight/18,
        fontWeight:"bold",
        color:Colors.TextColor
    },
    Greeting2:{
        color:Colors.TextColor,
        fontSize:18,
        opacity:0.6
    },
    LatestScheduledMettingCard:{
        marginVertical:20,
        width:SIZES.ScreenWidth*0.9,
        height:120,
        borderRadius:20,
        elevation:3,
        backgroundColor:"#eee",
        alignSelf:"center"
    },
    MettingImgage:{
        height:80,
        width:80,
        borderRadius:40,
        resizeMode:"cover"
    },
    SCHEDULEDText:{
        lineHeight:30,
        letterSpacing:1.5,
        fontWeight:"700",
        color:Colors.TextColor,
        opacity:0.4
    },
    MEETING_NAME:{
        fontSize:20,
        fontWeight:"400",
        letterSpacing:1,
        color:Colors.TextColor
    },
    OTHERS_DETAILS:{
        lineHeight:30,
        color:Colors.TextColor,
        opacity:0.5
    },
    MeetingsForYou:{
        fontSize:24,
        textAlign:"center",
        fontWeight:"600",
        color:Colors.TextColor,
        marginBottom:20
    },
    slide:{
        height:SIZES.ScreenHeight/2.5,
        width:SIZES.ScreenWidth*0.8,
        backgroundColor:Colors.TextColor,
        borderRadius:30,
        elevation:1,
        marginBottom:100
    },
    slide_img:{
        height:"50%",
        width:"90%",
        alignSelf:"center",
        margin:12,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        resizeMode:"cover"
    },
    DIVIDER:{
        borderWidth:.25,
        width:"90%",
        alignSelf:"center",
        borderColor:"#fff",
        marginBottom:-100
    },
    JOIN_BUTTON:{
        alignItems:"center",
        justifyContent:"space-between",
        width:"80%",
        alignSelf:"center",
        position:"absolute",
        bottom:10,
        flexDirection:"row"
   },
   ButtomNav:{
        position:"absolute",
        bottom:20,
        alignSelf:"center",
        width:"60%",
        borderRadius:40
    },

})
export default Home1;