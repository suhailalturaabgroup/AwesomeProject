import * as React from 'react';
import { Button, TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation  } from '@react-navigation/native';

function CustomDrawer({props}: any){
    // const navigation = useNavigation();
    return(

        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}/>
            
            
        </DrawerContentScrollView>
      
     
    )
  }

   

  export default CustomDrawer;