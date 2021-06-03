import * as React from 'react';
import { Button, TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from '../components/About';
import DrawerNav from './DrawarNav';
import Services from '../components/Services'
import Contact from '../components/Contact';
const Tab = createBottomTabNavigator();
export default function TabNav() {
  
    return(
      <Tab.Navigator>
      <Tab.Screen name="Home" component={DrawerNav} />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Service" component={Services} />
      <Tab.Screen name="Contact" component={Contact} />
      
    </Tab.Navigator>
    )
  }
  