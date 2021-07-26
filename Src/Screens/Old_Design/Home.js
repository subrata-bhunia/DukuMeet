import React, { useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView
} from 'react-native';
import { Input,Icon as GIcon } from 'galio-framework';
import Style from '../Constants/Style';
import Colors from '../Constants/Colors';
import Urls from '../Constants/Urls';
import { Button,Icon,Card,CheckBox } from 'react-native-elements';
import { DrawerActions, useNavigation } from '@react-navigation/native';


const CustomHeader=()=>{
  const [model,setModal]=React.useState(false);
  const navigation=useNavigation()
  const gotoAllRecord=()=>{
    navigation.navigate("AllRecord");
  }
  const onClickModel=()=>{
    model ? 
    setModal(false)
    :
    setModal(true)
  }
  return(
    <>
    <View style={[Style.CustomHeader,{elevation:4}]}>
      <View>
        <Image source={require('../logo/Logo.png')} style={[Style.logo,{height:120,width:120,resizeMode:"contain",borderRadius:0}]} />
      </View>
      <View>
        <TouchableOpacity
         onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}
         style={{marginEnd:20}}
         >
        <GIcon
          name="menu"
          family="Entypo"
          size={30}
        />
        </TouchableOpacity>
      </View>
    </View>
    {/* Modal */}
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={model}
        onRequestClose={()=>onClickModel()}
        // onPress={onClickMonClickModel}
      >
        <View style={[Style.modalView]}>
          <Button
          title="My Profile"
          titleStyle={{
            color:"#fff"
          }}
          type="clear"
          containerStyle={Style.Text}
          // onPress={()=>gotoProfile()}
          icon={
            <Icon
            name='person-circle-outline'
            type='ionicon'
              color="#fff"
            size={24}
            style={Style.icon}
            />
          }
          />
          <Button
          title="Log Out"
          titleStyle={{
            color:Colors.white
          }}
          type="clear"
          containerStyle={Style.Text}
          onPress={()=>onClickModel()}
          icon={
            <Icon
            name='power'
            type='ionicon'
            color={Colors.white}
            size={24}
            style={Style.logOuticon}
            />
          }
          />
        </View>
      </Modal>
    </View>
  </>
  )
}

const CustomBotton=()=>{
  return(
    <TouchableOpacity>
        <Card containerStyle={{borderRadius:10,elevation:5}}>
          <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
            <Icon name="home" type="ionicons" size={20} reverse color="#0000ff" />
            <View>
              <Text style={{fontSize:20,fontWeight:"700"}}>Home Room</Text>
              <Text style={{fontSize:12,fontWeight:"400"}}>Last session on July 3, 2021 at 2:20pm</Text>
            </View>
            <TouchableOpacity>
              <Icon name="dots-three-vertical" type="entypo" size={20} />
            </TouchableOpacity>
          </View>
        </Card>
      </TouchableOpacity>
  )
}

const CreateRoomBotton=()=>{
  const [modal,setModal]=useState(false);
  const [Q1,setQ1]=useState(false);
  const [Q2,setQ2]=useState(false);
  const [Q3,setQ3]=useState(false);
  const [Q4,setQ4]=useState(false);
  const [Q5,setQ5]=useState(false);
  return(
    <>
    <TouchableOpacity onPress={()=>setModal(true)}>
      <Card containerStyle={{borderRadius:10,elevation:5}}>
        <View style={{flexDirection:'row',alignItems:"center",width:"100%"}}>
          <Icon name="plus" type="entypo" size={20} color="#0000ff" reverse style={{position:"absolute",right:0}} />
          <View style={{width:"70%"}}>
          <Text style={{textAlign:"center",fontSize:20,fontWeight:"600"}}>
            Create a Room
          </Text>
        </View>
        </View>
      </Card>
    </TouchableOpacity>
    <View>
      <Modal
       visible={modal}
       onDismiss={()=>setModal(false)}
       onRequestClose={()=>setModal(false)}
       animationType="fade"
       style={{height:100,width:"90%"}}
       transparent={true}
       onMagicTap={()=>setModal(false)}
      >
        <View style={{height:"97%",width:"95%",backgroundColor:"#fff",alignSelf:"center",padding:30,borderRadius:30}}>
          <Text style={{fontSize:25,textAlign:"center",margin:20,fontWeight:"500"}}>Create New Room</Text>
          <Input
           placeholder="Enter Room Name"
           placeholderTextColor="#777"
           left
           icon="key"
           family="entypo"
           iconSize={14}
           textAlign="center"
           />
          <Input
           placeholder="Enter Room Name"
           placeholderTextColor="#777"
           left
           icon="key"
           family="entypo"
           iconSize={14}
           textAlign="center"
           />
           {/* Question */}
           <View>
           <CheckBox
              title='Mute users when they join'
              checked={Q1}
              size={24}
              containerStyle={{backgroundColor:'transparent'}}
              onPress={()=>{setQ1(!Q1)}}
              />
           <CheckBox
              title='Require moderator approval before joining'
              checked={Q2}
              size={24}
              containerStyle={{backgroundColor:'transparent'}}
              onPress={()=>{setQ2(!Q2)}}
              />
           <CheckBox
              title='Allow any user to start this meeting'
              checked={Q3}
              size={24}
              containerStyle={{backgroundColor:'transparent'}}
              onPress={()=>{setQ3(!Q3)}}
              />
           <CheckBox
              title='All users join as moderators'
              checked={Q4}
              size={24}
              containerStyle={{backgroundColor:'transparent'}}
              onPress={()=>{setQ4(!Q4)}}
              />
           <CheckBox
              title='Automatically join me into the room'
              checked={Q5}
              size={24}
              containerStyle={{backgroundColor:'transparent'}}
              onPress={()=>{setQ5(!Q5)}}
              />
           </View>
           <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:20}}>
             <TouchableOpacity style={{padding:10,backgroundColor:Colors.btnColor,flex:0.46,alignItems:"center",borderRadius:10}}>
               <Text style={{fontWeight:"700",color:"#fff"}}>
                 Create Room
               </Text>
             </TouchableOpacity>
             <TouchableOpacity
              style={{padding:10,flex:0.46,alignItems:"center",borderRadius:10,borderWidth:1,borderColor:Colors.btnColor}}
              onPress={()=>setModal(false)}
              >
               <Text style={{fontWeight:"700",color:Colors.btnColor}}>
                 Cancel
               </Text>
             </TouchableOpacity>
           </View>
        </View>
      </Modal>
    </View>
    </>
  )
}
export default function Home(){
  var [btnName,setBtnName]=useState("Copy");
  var [icon,setIcon]= useState("copy1");
  const CopyData=()=>{
    setBtnName("Copied");
    setIcon("check")
    setTimeout(function(){ 
      setBtnName("Copy");
      setIcon("copy1");
  }, 1000)
  }
  return(
    <ScrollView style={{flex:1}}>
      <CustomHeader />
      <View>
        <Card containerStyle={{borderRadius:20}}>
          <View style={{flexDirection:"row"}}>
          <Text style={{fontSize:40,fontWeight:"400",letterSpacing:2}}>
            Home Room
          </Text>
          <Icon
           name="home"
          />
          </View>
          <Text style={{fontWeight:"400",fontSize:15}}>
            {111} Sessions | {110} Room Recordings
          </Text>
          <Text style={{marginTop:20}}>
          Invite Participants
          </Text>
          <View style={{borderRadius:10,borderWidth:1,padding:7,marginTop:10,alignItems:"center",flexDirection:"row"}}>
            <Icon name="link" type="entypo" size={15} />
            <View style={{borderLeftWidth:1,height:20,margin:5}} />
            <Text>https://meet.dukumeet.com/b/sub-hrx-nur-ala</Text>
          </View>
          <TouchableOpacity 
            style={[Style.LogInButton,{alignItems:"center",flexDirection:"row",justifyContent:"center",backgroundColor:Colors.btnColor,elevation:5}]}
            onPress={()=>CopyData()}
            >
            <Icon name={icon} type="antdesign" size={20} />
            <Text style={{textAlign:"center"}}>{btnName}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[Style.LogInButton,{alignItems:"center",flexDirection:"row",justifyContent:"center",backgroundColor:Colors.btnColor,elevation:5}]}
            // onPress={()=>CopyData()}
            >
            <Text style={{textAlign:"center",fontSize:20}}>Start</Text>
          </TouchableOpacity>
        </Card>
        <View style={{marginBottom:10}}>
          <CustomBotton />
          <CreateRoomBotton />
        </View>
      </View>
    </ScrollView>
  )
}