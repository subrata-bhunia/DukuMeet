import React from 'react';
import { Image } from 'react-native';
import { View } from 'react-native';
import Colors from '../Constants/Colors';


const SLHeader=()=>{
    return(
        <View>
            <View style={{
                height:220,
                width:"120%",
                backgroundColor:Colors.TextColor,
                transform:[{skewY:"-7deg"}],
                marginTop:-50,
                marginHorizontal:-20,
                opacity:1,
                justifyContent:"center"
            }} />
            <Image
             source={require('../logo/dukuwhite.png')}
             style={{
                 height:70,
                 width:70,
                 resizeMode:"center",
                 position:"absolute",
                 alignSelf:"center",
                 top:50
             }}
             />
        </View>
    )
}

export default SLHeader;