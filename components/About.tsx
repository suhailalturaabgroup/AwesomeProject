import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import { RootStackParamList } from '../types';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
const PassFun = (props: any)=> {
  return(
    <View style={styles.propname}>
    <Text style={styles.text}>{props.name}</Text>
    <Text style={styles.text}>{props.lname}</Text>
     </View>
  )
}


function About ({ navigation }: any) {
  const [count, setCount] = useState(0);

  return(
    <View>
    
    {/* <Image style={{width:200, height:200}} source={{uri: 'https://i.imgur.com/UPrs1EWl.jpg'}}/> */}
    <Text style={{textAlign: "center", fontSize:20}}>{count}</Text>
    <View style={styles.container}>
    <Button color="green" title="+" onPress={()=> setCount(count + 1)} />
  
    </View>
    <View style={styles.container}>   
    <Button color="#ff5c5c" title="-" onPress={()=> setCount(count - 1)} />
    </View>

    <View style={styles.container}>   
    <Button color="#ff5c5c" title="Reset" onPress={()=> setCount(0)} />
    </View>
    <View>
    <PassFun name="Suhail"  lname=" Ahmed" />
  
    <Button title="go Contact" onPress={()=> navigation.navigate('Contact')} />
    
    </View>
  </View>
  )

  
}

export default About;

const styles = StyleSheet.create({

container: {

  
  flexDirection: "column",
  marginBottom:10,
  alignSelf:"center",
  width:120
  },

text: {
 color: "red",
 textAlign: "center",
 fontSize: 20
},

propname: {flex:1, 
flexDirection:"row", 
alignSelf: "center", 
padding:10,

}

});


