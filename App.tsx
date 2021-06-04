import * as React from 'react';
import { NavigationContainer, DrawerActions, StackActions, } from '@react-navigation/native';
import { StyleSheet, Text, Button, View, TouchableOpacity } from 'react-native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { StackTabParamList, RootStackParamList } from './types';
import About from './components/About';
import TabNav from './navigation/TabNav';
import { Ionicons } from '@expo/vector-icons';
import DrawerNav from './navigation/DrawarNav';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
const RootStack = createStackNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

function App({ navigation }: any ){
   
   return (
    <AppearanceProvider>
      <NavigationContainer theme={MyTheme}>        
        <DrawerNav/>         
      </NavigationContainer>
      </AppearanceProvider>
      
   
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
