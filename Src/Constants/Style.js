import { StyleSheet,Dimensions } from "react-native";
const {height,width}=Dimensions.get('window')
// const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 0;
import Colors from './Colors';
export const SIZES={
    iconSize:30,
    ScreenHeight:height,
    ScreenWidth:width
}
export const IconType="ionicon";
export default StyleSheet.create({
    C_logo:{
        height:100,
        width:100,
        borderRadius:50,
        alignSelf:'center',
        marginTop:height/11
    },
    Heading_msg:{
        fontSize:25,
        textAlign:'center',
        fontWeight:'100',
        color:'#444',
        letterSpacing:2,
        marginTop:10
    },
    InputView:{
        marginTop:height/10,
        // margin:5,
        padding:4,
    },
    InputStyle:{
        borderColor:'transparent',
        borderBottomColor:Colors.firstColor,
        backgroundColor:'transparent',
        borderRadius:0,
        width:"90%",
        alignSelf:'center'
    },
    InputStyle_Focus:{
        borderColor:'transparent',
        borderBottomColor:Colors.firstColor,
        backgroundColor:'transparent',
        borderRadius:0,
        width:"90%",
        alignSelf:'center',
        borderWidth:2
    },
    LogInButton:{
        alignSelf:'center',
        backgroundColor:Colors.header_statusbar,
        width:"90%",
        margin:10,
        padding:10,
        borderRadius:10
    },
    ButtonText:{
        fontSize:20,
        textAlign:'center',
        fontWeight:'600',
        color:Colors.white
    },
    linktext:{
        textAlign:'center',
        color:'#0000FF',
        // opacity:0.4,
        textDecorationLine: "underline",
        textDecorationStyle:'solid',
        textDecorationColor:'#0000FF',
        fontWeight:"400"

    },
    edit_icon_view:{
        position:'absolute',
        alignSelf:'center',
        top:height/5.7,
    },
    InputView_signup:{
        marginTop:10
    },
    main:{
        marginTop:APPBAR_HEIGHT,
        backgroundColor:'transparent'
    },
    AvatarImg:{
        height:50,
        width:50,
        borderRadius:25,
        resizeMode:'cover'
    },
    AvatarName:{
        fontSize:18,
        fontWeight:'400'
    },
    postTime:{
        color:'#888',
        fontSize:10
    },
    postContent:{
        padding:10
    },
    postCard:{
        borderRadius:10,
        backgroundColor:'transparent',
        width:'95%',
        alignSelf:'center',
        margin:10
    },
    postImage:{
        height:height/5,
        width:"95%",
        alignSelf:'center',
        marginTop:10,
        borderRadius:10,
        resizeMode:'stretch'
    },
    postImageDetails:{
        height:height/3,
        borderRadius:10,
        resizeMode:'contain'
    },
    CommentBox:{
        marginLeft:5,
        // borderWidth:1,
        backgroundColor:Colors.commentBoxColor,
        borderRadius:10,
        padding:5
    },
    // ------------------
    logo:{
        height:30,
        width:30,
        margin:10
    },
    // ----------
    CustomHeader:{
        width:width*1,
        height:height/14,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#999"
    },
    profilpic:{
        height:40,
        width:40,
        resizeMode:"cover",
        borderRadius:20,
        marginEnd:4
    },
    modalView:{
    margin: 20,
    backgroundColor: "#000",
    borderTopEndRadius:0,
    borderTopLeftRadius:20,
    borderBottomEndRadius:20,
    borderTopEndRadius:0,
    padding: 10,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
        width: 2,
        height: 5
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
    width:'auto',
    top:40,
    position:'absolute',
    right:0,
    paddingTop:20,
    paddingBottom:20
    },
    icon:{
    marginRight:8
    },
    logOuticon:{
    marginRight:8,
    // marginLeft:2
    },
    Text:{
        width:"100%",
        alignItems:'flex-start'
    },
    // FIRST SCREEN ------------
    backgroundImage:{
        width:"100%",
        height:"100%",
    },
    ImgStyle:{
        resizeMode:"stretch"
    },
    ThreeDots:{
        width:"20%",
        marginHorizontal:width/11,
        margin:height/11,
        flexDirection:"row",
        justifyContent:"space-around"
    },
    ThreeDots1:{
        height:7,
        width:7,
        borderRadius:5,
        backgroundColor:"#fff"
    },
    ThreeDots2:{
        height:7,
        width:7,
        borderRadius:7,
        backgroundColor:"#fff",
        opacity:0.3
    },
    TextStyle:{
        fontSize:40,
        letterSpacing:3,
        lineHeight:55,
        marginHorizontal:20,
        marginVertical:SIZES.ScreenHeight/4,
        fontWeight:"bold",
        color:"#fff"
    },
    BtnView:{
        position:"absolute",
        bottom:10,
        width:width,
        height:height/5
    },
    Btn1:{
        backgroundColor:"#fff",
        elevation:7,
        padding:15
    },
    Btn1Text:{
        textAlign:"center",
        fontSize:18,
        fontWeight:"bold"
    },
    Btn2Text:{
        textAlign:"center",
        fontSize:18,
        fontWeight:"bold",
        color:"#fff"
    },


})
