import * as React from 'react';
import { Button, TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { Ionicons } from '@expo/vector-icons'; 

function Home({ navigation }: StackScreenProps<RootStackParamList, 'NotFound'>) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      
     
        <Button title="click" onPress={() => navigation.navigate('About')}/>
   
    </View>
  );
}




export default Home;

const styles = StyleSheet.create({

header: {
  flex:1,
  marginTop:10
},

text: {
  textAlign:"center",
  color: "red",
  fontSize: 20

},

para: {

  margin:5,
  padding:5,
  textAlign: "justify"

}

})