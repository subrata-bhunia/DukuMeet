import React, { useState,useEffect } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Urls from "../../Constants/Urls";
import { Header } from "../AllVideosRec";
import { Input } from "react-native-elements";
import DropDownPicker from 'react-native-dropdown-picker';
import Style from "../../Constants/Style";
import Colors from "../../Constants/Colors";

const Profile=()=>{
    // const defaultImg=Urls.company_logo
    const [imgSrc,setImgSrc]=useState(Urls.company_logo);
    const [fullName,setFullName]=useState("John Doe");
    const [email,setEmail]=useState("john@gmail.com");
    const [profile,setProfile]=useState("")
    // ----------------------------------
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { value : 'ab', label : 'Abkhazian' },
        { value : 'aa', label : 'Afar' },
        { value : 'af', label : 'Afrikaans' },
        { value : 'ak', label : 'Akan' },
        { value : 'sq', label : 'Albanian' },
        { value : 'am', label : 'Amharic' },
        { value : 'ar', label : 'Arabic' },
        { value : 'an', label : 'Aragonese' },
        { value : 'hy', label : 'Armenian' },
        { value : 'as', label : 'Assamese' },
        { value : 'sa', label : 'Sanskrit' },
        { value : 'sc', label : 'Sardinian' },
        { value : 'sr', label : 'Serbian' },
        { value : 'sn', label : 'Shona' },
        { value : 'sd', label : 'Sindhi' },
        { value : 'si', label : 'Sinhala, Sinhalese' },
        { value : 'sk', label : 'Slovak' },
        { value : 'sl', label : 'Slovenian' },
        { value : 'so', label : 'Somali' },
        { value : 'st', label : 'Sotho, Southern' },
        { value : 'nr', label : 'South Ndebele' },
        { value : 'es', label : 'Spanish, Castilian' },
        { value : 'su', label : 'Sundanese' },
        { value : 'sw', label : 'Swahili' },
        { value : 'ss', label : 'Swati' },
        { value : 'sv', label : 'Swedish' },
        { value : 'tl', label : 'Tagalog' },
        { value : 'ty', label : 'Tahitian' },
        { value : 'tg', label : 'Tajik' },
        { value : 'ta', label : 'Tamil' },
        { value : 'tt', label : 'Tatar' },
        { value : 'te', label : 'Telugu' },
        { value : 'th', label : 'Thai' },
        { value : 'bo', label : 'Tibetan' },
        { value : 'ti', label : 'Tigrinya' },
        { value : 'to', label : 'Tonga (Tonga Islands)' },
        { value : 'ts', label : 'Tsonga' }
    ]);
    // ------------------------------------

    const imgSrcCheck=()=>{
        profile === "" ?
        setImgSrc(Urls.company_logo)
        :
        setImgSrc(profile)
    }
    useEffect(() => {
        imgSrcCheck()
    }, [profile])

    return(
        <View>
            <Header pageName="Account Information" />
            {/* <Toast isShow={toast} positionIndicator="bottom" color={Colors.btnColor}>This is a bottom positioned toast</Toast> */}
            <ScrollView style={{margin:5}}>
                <View style={{flexDirection:"row",width:"100%",justifyContent:"space-between"}}>
                    <Image
                     source={{uri:imgSrc}}
                     style={{height:100,width:100,borderRadius:50}}
                     />
                     <TextInput
                      style={{borderRadius:10,borderWidth:1,width:"70%"}}
                      value={profile}
                      onChangeText={text=>{setProfile(text)}}
                      multiline
                      />
                </View>
                <View style={{marginTop:10}}>
                    <Input
                     style={{borderRadius:10,borderWidth:1}}
                     label="Full Name"
                     labelStyle={{color:"#000",fontWeight:"bold",fontSize:18}}
                     value={fullName}
                     onChangeText={text=>{setFullName(text)}}
                     />
                    <Input
                     style={{borderRadius:10,borderWidth:1}}
                     label="Email"
                     labelStyle={{color:"#000",fontWeight:"bold",fontSize:18}}
                     value={email}
                     onChangeText={text=>{setEmail(text)}}
                     />
                    <Input
                     style={{borderRadius:10,borderWidth:1}}
                     label="Provider"
                     disabled
                     value="Greenlight"
                     labelStyle={{color:"#000",fontWeight:"bold",fontSize:18}}

                     />
                     <Input
                      label="User Role"
                      style={{borderRadius:10,borderWidth:1,backgroundColor:"#999",color:"#fff",fontSize:20,textAlign:"center"}}
                      containerStyle={{width:"30%"}}
                      value="User"
                      disabled
                      labelStyle={{color:"#000",fontWeight:"bold",fontSize:18}}
                      />
                     <View style={{marginHorizontal:7}}>
                     <Text style={{color:"#000",fontWeight:"bold",fontSize:18,marginBottom:5}}>Language</Text>
                     <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        placeholder="<<<< Default (System language) >>>>"
                        />
                     </View>
                     <View>
                         <TouchableOpacity
                          style={[Style.LogInButton,{backgroundColor:Colors.btnColor}]}
                          >
                             <Text style={Style.ButtonText}>
                                 Update
                             </Text>
                         </TouchableOpacity>
                     </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Profile;