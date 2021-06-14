import * as React from 'react';
import { Button, TouchableOpacity, TouchableHighlight, TextInput, StyleSheet, View, Image, Text } from 'react-native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { NavigationContainer, DrawerActions, StackActions, } from '@react-navigation/native';
import { MaterialIcons, Ionicons, Octicons, FontAwesome5, Foundation } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

function Home({ Icon, ...props }: any) {

  const [loaded] = useFonts({
    Montserrat: require('../assets/fonts/Montserrat-Thin.ttf')
  });

  if (!loaded) {
    return null;
  }


  return (



    <View style={{ flex: 1 }}>

      <View style={{ flexDirection: 'row', backgroundColor: '#025028' }}>

        <Text style={styles.text}>DELIVERY TO <Text style={styles.text1}>{"\n"}New Home
          <MaterialIcons name="keyboard-arrow-down" size={24} color="#fff" />
        </Text>

        </Text>

        <Image style={{ width: 120, marginLeft: 140, height: 50 }} source={require('../assets/img/logo.png')} />
      </View>

      <View style={{ flexDirection: 'row', backgroundColor: '#025028' }}>
        <View style={styles.sectionStyle}>
          <Octicons style={{ marginLeft: 5 }} name="search" size={14} color={"white"} />
          <TextInput
            style={{ flex: 1 }}
            placeholder=" Search by name, brand, category"
            underlineColorAndroid="transparent"
            keyboardType="default"
            placeholderTextColor='#4E4E4E'
          />

        </View>
        <View style={styles.playBox}>
        <FontAwesome5 name="play" size={24} color="#fff" />
        </View>

      </View>
      <View style={{ flexDirection: 'row', backgroundColor: '#025028' }}>

        <View style={styles.wallet}>
          <Ionicons name="wallet" size={24} color="#fff" />
          <Text style={styles.textIcon}>Simpli Wallet</Text>
          <Text style={styles.textIcon}>445</Text>

        </View>
        <View style={styles.subscribe}><FontAwesome5 name="store" size={24} color="#fff" />
          <Text style={styles.textIcon}>Subscription</Text>
          <Text style={styles.textIcon}>5 active</Text>
        </View>
        <View style={styles.store}><FontAwesome5 name="store" size={24} color="#fff" />
          <Text style={styles.textIcon}>Store Checkout</Text>
          <Text style={styles.textIcon}>2 near you</Text>
        </View>

      </View>
    </View>




  );
}




export default Home;

const styles = StyleSheet.create({

  text: {
    color: "#ccc",
    fontSize: 14,
    marginLeft: 15,
    flexShrink: 2,

  },

  text1: {
    color: "#fff",
    fontSize: 20,
    marginLeft: 15,
    marginTop: 15,
    flexShrink: 2,

  },

  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#0C6436",
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    width: 280,
    borderRadius: 5,
    margin: 10,
  },


  wallet: {
    padding: 20,
    marginLeft: 12,
    alignItems: "center",


  },
  subscribe: {
    padding: 20,
    marginLeft: 12,
    alignItems: "center",


  },

  store: {
    padding: 20,
    marginLeft: 12,
    alignItems: "center",

  },
  textIcon: {

    color: "#fff"

  },

  playBox: {     
    backgroundColor: "green",
    width:55,
    height:42,
    marginTop:10,
    borderColor: "red",
    borderRadius:4,
    marginLeft:15

  }


})