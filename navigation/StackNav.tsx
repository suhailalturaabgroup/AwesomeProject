import * as React from 'react';
import { NavigationContainer, DrawerActions, StackActions, } from '@react-navigation/native';
import { StyleSheet, Text, Button, View, TouchableOpacity } from 'react-native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { StackTabParamList, RootStackParamList } from '../types';
import About from '../components/About';
import Home from '../components/Home';
import TabNav from '../navigation/TabNav';
import { Ionicons } from '@expo/vector-icons';
import DrawerNav from '../navigation/DrawarNav';

const RootStack = createStackNavigator();


function StackNav({ navigation }: StackScreenProps<StackTabParamList>) {
    return (
        <RootStack.Navigator
            screenOptions={{

                headerLeft: () =>
                    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                       <Ionicons name="menu" size={32} color="green" />
                    </TouchableOpacity>
            }}
        >
            <RootStack.Screen name="Home" component={TabNav}


            />
            <RootStack.Screen name="About" component={About} />
        </RootStack.Navigator>
    )
}


export default StackNav;