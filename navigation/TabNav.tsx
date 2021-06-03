import * as React from 'react';
import { Button, TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from '../components/About';
import DrawerNav from './DrawarNav';
import Services from '../components/Services'
import Contact from '../components/Contact';
import Home from '../components/Home';
import StackNav from './StackNav';
const Tab = createBottomTabNavigator();
export default function TabNav() {
  
    return(
      <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Service" component={Services} />
      <Tab.Screen name="Contact" component={Contact} />
      
    </Tab.Navigator>
    )
  }
  