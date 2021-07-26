import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity
} from 'react-native'
import { Icon,Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';
import DummyVideoList from '../Data/DummyVideoList';


export const Header=({pageName})=>{
    const navigation=useNavigation();
    return(
        <View style={{flexDirection:"row",height:50,width:"95%",justifyContent:"space-between",alignItems:"center",alignSelf:"center"}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Icon
                name="arrow-back"
                type="ionicons"
                size={24}
                />
            </TouchableOpacity>
            <View>
                <Text style={{fontSize:25,fontWeight:"600"}}>
                    {pageName}
                </Text>
            </View>
            <TouchableOpacity>
                <Icon
                name="search1"
                type="antdesign"
                size={24}
                />
            </TouchableOpacity>
        </View>
    )
}

const VideoList=({name,recordon,users,length,thumb,visible})=>{
    const navigation=useNavigation();
    const gotoVideoPlayer=()=>{
        navigation.navigate("VideoPlayer")
    }
    return(
        <View>
            <Card containerStyle={{borderRadius:10}}>
                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                <ImageBackground
                 source={{uri:thumb}}
                 style={{height:100,width:100,resizeMode:"center",alignItems:"center",justifyContent:"center"}}
                 >
                     <TouchableOpacity style={{}} onPress={()=>gotoVideoPlayer()}>
                     <Icon
                      name="play"
                      type="antdesign"
                      size={50}
                      color="#fff"
                      />
                     </TouchableOpacity>
                </ImageBackground>
                <View style={{padding:3,margin:5}}>
                    <Text>{name}</Text>
                    <Text>{recordon}</Text>
                    <Text>Total Users :{users}</Text>
                    <Text>{visible}</Text>
                    <Text>Length :{length}</Text>
                </View>
                <TouchableOpacity>
                <Icon name="dots-three-vertical" type="entypo" size={24} />
                </TouchableOpacity>
                </View>
            </Card>
        </View>
    )
}
const AllRecording=()=>{
    return(
        <View>
            <Header pageName="All Recordings" />
            {
                DummyVideoList.map((val,ind)=>{
                    return(
                        <VideoList 
                            name={val.name}
                            length={val.length}
                            key={ind}
                            thumb={val.thumb}
                            recordon={val.recordon}
                            users={val.users}
                            visible={val.visibilty}
                            />
                    )
                })
            }
        </View>
    )
}

export default AllRecording;