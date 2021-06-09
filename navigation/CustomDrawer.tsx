import * as React from 'react';
import { Button, TouchableOpacity, SafeAreaView, StyleSheet, Image, Linking, View, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItem,  DrawerItemList } from '@react-navigation/drawer';
// import { NavigationContainer, useNavigation  } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerParamList } from '../types';


const proileImage = 'react_logo.png';
const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
function CustomDrawer(props: DrawerContentComponentProps<DrawerParamList>){
     return(

        <SafeAreaView style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
            <Image
                    source={{uri: BASE_PATH + proileImage}}
                    style={styles.logo}
                />
            <DrawerItemList {...props}/>

            <View
                        style={{
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 2
                    }}/>
            
            <DrawerItem
                label="Visit Us"
                onPress={() => Linking.openURL('https://google.com/')}
                />
            
            
        </DrawerContentScrollView>
        </SafeAreaView>
      
     
    )
  }

   

  export default CustomDrawer;


  const styles = StyleSheet.create({

    logo: {
        resizeMode: 'center',
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        alignSelf: 'center',
      },
  })