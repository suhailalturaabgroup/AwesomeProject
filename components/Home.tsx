import * as React from 'react';
import { Button, TouchableOpacity, FlatList, StatusBar, TextInput, View, Image, Text } from 'react-native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { NavigationContainer, DrawerActions, StackActions, } from '@react-navigation/native';
import { MaterialIcons, Ionicons, Octicons, MaterialCommunityIcons, FontAwesome5, FontAwesome, Foundation } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { homeStyles } from './css/homeStyles';
import TopTabs from '../navigation/TopNav';
import List from '../components/List'

function Home({ Icon, ...props }: any) {

  const [loaded] = useFonts({
    Montserrat: require('../assets/fonts/Montserrat-Thin.ttf')
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={{ flex: 1}}>
      <StatusBar />
      <View style={{ flexDirection: 'row', backgroundColor: '#025028' }}>
        <Text style={homeStyles.text}>DELIVERY TO <Text style={homeStyles.text1}>{"\n"}New Home
          <MaterialIcons name="keyboard-arrow-down" size={24} color="#fff" />
        </Text>
        </Text>
        <Image style={{ width: 120, marginLeft: 140, height: 50 }} source={require('../assets/img/logo.png')} />
      </View>
      <View style={{ flexDirection: 'row', backgroundColor: '#025028' }}>
        <View style={homeStyles.sectionStyle}>
          <Octicons style={{ marginLeft: 5 }} name="search" size={14} color={"white"} />
          <TextInput
            style={{ flex: 2 }}
            placeholder=" Search by name, brand, category"
            underlineColorAndroid="transparent"
            keyboardType="default"
            placeholderTextColor='#BFBFBD'
          />
        </View>
        <View style={homeStyles.playBox}>
          <TouchableOpacity style={{ alignItems: "center", marginTop: 7 }}>
            <FontAwesome5 name="play" size={22} color="#fff" />
          </TouchableOpacity>

        </View>
      </View>
      <View style={{ flexDirection: 'row', backgroundColor: '#025028' }}>
        <View style={homeStyles.wallet}>
          <Ionicons name="wallet" size={24} color="#fff" />
          <View style={{ borderBottomWidth: 1, borderBottomColor: "#fff" }} />
          <Text style={homeStyles.textIcon}>Simpli Wallet</Text>
          <Text style={homeStyles.textIcon}>
            <FontAwesome name="rupee" size={14} color="#fff" />445
            <MaterialIcons style={{ marginTop: 15 }} name="keyboard-arrow-right" size={18} color="#fff" />
          </Text>


        </View>
        <View style={homeStyles.subscribe}>

          <MaterialCommunityIcons name="subtitles-outline" size={24} color="#fff" /  >
          <View style={{ borderBottomWidth: 1, borderBottomColor: "#fff" }} />
          <Text style={homeStyles.textIcon}>Subscription</Text>
          <Text style={homeStyles.textIcon}>5 active
            <MaterialIcons name="keyboard-arrow-right" size={18} color="#fff" />
          </Text>


        </View>
        <View style={homeStyles.store}>

          <TouchableOpacity>
            <FontAwesome5 name="store" size={24} color="#fff" />
            <View style={{ borderColor: "white", borderWidth: 1 }} />
            <Text style={homeStyles.textIcon}>Store Checkout</Text>
            <Text style={homeStyles.textIcon}>2 near you
              <MaterialIcons name="keyboard-arrow-right" size={18} color="#fff" /></Text>
          </TouchableOpacity>


        </View>

      </View>
      <View style={homeStyles.base}>
        <View style={{ flex: 1, flexDirection: "row"}}>
          <Text style={homeStyles.shapeText}>SimpliZen Gold Member</Text>
          <Text style={homeStyles.inText}>245 Pts</Text>
          
        </View>
        <View style={homeStyles.baseTop} />
        <View style={homeStyles.baseTop1} />
        <View style={homeStyles.baseBottom} />

      </View>

      <TopTabs/>
      
        <List/>


    </View>




  );
}

export default Home;

