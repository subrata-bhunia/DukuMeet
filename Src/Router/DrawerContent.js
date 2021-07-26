import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import Urls from '../Constants/Urls';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import Colors from '../Constants/Colors';
import { Top } from '../Screens/Profile1';

export function DrawerContent(props) {
    const navigation=useNavigation();
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={[styles.drawerContent]}>
                    <View style={[styles.userInfoSection]}>
                        <View style={{marginHorizontal:-170}}>
                        <Top />
                        </View>
                        <View style={{alignSelf:"center",alignItems:"center"}}>
                            <Avatar.Image
                             source={{
                                uri:"https://i.pinimg.com/originals/73/16/f5/7316f550de9ca0045e3d8d98a5bb5e44.png"
                            }}
                             style={{
                                 position:"absolute",
                                 top:-70,
                             }}
                             size={80}
                            />
                            <Text style={[styles.title,{marginTop:16,color:Colors.TextColor}]}>
                                John Doe
                            </Text>
                        </View>
                        <View style={[styles.row,{alignSelf:"center"}]}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption,{color:Colors.TextColor}]}>100</Paragraph>
                                <Caption style={[styles.caption,{color:Colors.TextColor,opacity:0.5}]}>Sessions</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption,{color:Colors.TextColor}]}>80</Paragraph>
                                <Caption style={[styles.caption,{color:Colors.TextColor,opacity:0.5}]}>Recordings</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={[styles.drawerSection,{flex:1}]}>
                        <DrawerItem 
                            icon={() => (
                                <Icon 
                                name="home-outline" 
                                color={Colors.TextColor}
                                size={24}
                                type="material-community"
                                />
                            )}
                            label="Home"
                            labelStyle={{
                                color:Colors.TextColor
                            }}
                            onPress={() => {navigation.navigate('Drawer'),navigation.dispatch(DrawerActions.closeDrawer())}}
                        />
                        <DrawerItem 
                            icon={() => (
                                <Icon 
                                name="account-outline" 
                                color={Colors.TextColor}
                                size={24}
                                type="material-community"
                                />
                            )}
                            label="Profile"
                            labelStyle={{
                                color:Colors.TextColor
                            }}
                            onPress={() => {navigation.navigate('Profile1'),navigation.dispatch(DrawerActions.closeDrawer())}}
                        />
                        <DrawerItem 
                            icon={() => (
                                <Icon 
                                name="folder-outline" 
                                color={Colors.TextColor}
                                size={24}
                                type="material-community"
                                />
                            )}
                            label="All Recordings"
                            labelStyle={{
                                color:Colors.TextColor
                            }}
                            onPress={() => {navigation.navigate('AllRecord'),navigation.dispatch(DrawerActions.closeDrawer())}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={() => (
                        <Icon 
                        name="exit-to-app" 
                        color={Colors.TextColor}
                        size={24}
                        />
                    )}
                    label="Sign Out"
                    labelStyle={{
                        color:Colors.TextColor
                    }}
                    onPress={() =>{console.log("logOut"),navigation.dispatch(DrawerActions.closeDrawer())}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
      height:200
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 50,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#fff',
        borderTopWidth: 0
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });