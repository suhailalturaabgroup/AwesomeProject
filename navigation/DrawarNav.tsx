import * as React from 'react';
import { Button, TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../components/Home';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';

const Drawer = createDrawerNavigator();
export default function DrawerNav() {
  
    return(
      <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Service" component={Services} />
      <Drawer.Screen name="Contact" component={Contact} />
     
    </Drawer.Navigator>
    )
  }
  