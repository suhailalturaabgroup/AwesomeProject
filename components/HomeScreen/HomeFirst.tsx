import * as React from 'react';
import { Button, TouchableOpacity, FlatList, StatusBar, TextInput, View, Image, Text, ScrollView, StyleSheet } from 'react-native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { NavigationContainer, DrawerActions, StackActions, } from '@react-navigation/native';
import { MaterialIcons, Ionicons, Octicons, MaterialCommunityIcons, FontAwesome5, FontAwesome, Foundation } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { homeStyles } from '../stylesheet/homeStyles';
import TopTabs from '../../navigation/TopNav';
import HomeTwo from './HomeTwo';
import HomeThree from './HomeThree';
import HomeFour from './HomeFour';
import HomeFive from './HomeFive';
import HomeSix from './HomeSix';
function Home({ Icon, ...props }: any) {
  const [loaded] = useFonts({
    Montserrat: require('../../assets/fonts/Montserrat-Regular.ttf')
  });

  if (!loaded) {
    return null;
  }
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <StatusBar />
        <View style={{ flexDirection: 'row', backgroundColor: '#025028' }}>
        <View  style={homeStyles.homeArrow}>
              <Text style={homeStyles.homeTopHeading}>DELIVERY TO 
              <Text style={homeStyles.home}>{"\n"}New Home
                  <MaterialIcons name="keyboard-arrow-down" size={20} color="#fff" />
                </Text>
                </Text>
          </View>
          {/* <Text style={homeStyles.homeTopHeading}>DELIVERY TO <Text style={homeStyles.home}>{"\n"}New Home
            <MaterialIcons name="keyboard-arrow-down" size={24} color="#fff" />
          </Text>
          </Text> */}
          <Image style={homeStyles.logo} source={require('../../assets/img/logo.png')} />
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
        <View style={{flex:2, flexDirection: 'row', backgroundColor: '#025028'}}>
          <View style={homeStyles.wallet}>
            <Ionicons style={{ textAlign: "center" }} name="wallet" size={24} color="#fff" />
            <View style={{ borderBottomWidth: 1, borderBottomColor: "#fff",  paddingBottom :5}} />
            <Text style={homeStyles.textIcon}>Simpli Wallet</Text>
            <View  style={homeStyles.homeIcon}>
              <Text style={homeStyles.textIcon}>
                <FontAwesome name="rupee" size={14} color="#fff" />445
                <MaterialIcons name="keyboard-arrow-right" size={14} color="#fff" /></Text>
              </View>
            
          </View>
          <View style={homeStyles.subscribe}>
            <MaterialCommunityIcons style={{ textAlign: "center" }} name="subtitles-outline" size={24} color="#fff" />
            <View style={{ borderBottomWidth: 1, borderBottomColor: "#fff", paddingBottom :5 }} />
            <Text style={homeStyles.textIcon}>Subscription</Text>
            <View  style={homeStyles.homeIcon}>
              <Text style={homeStyles.textIcon}>
                <FontAwesome name="rupee" size={14} color="#fff" />5 active
                <MaterialIcons name="keyboard-arrow-right" size={14} color="#fff" /></Text>
              </View>
          </View>
          <View style={homeStyles.store}>
            <TouchableOpacity>
              <FontAwesome5 style={{ textAlign: "center" }} name="store" size={24} color="#fff" />
              <View style={{ borderBottomWidth: 1, borderBottomColor: "#fff", paddingBottom :5 }} />
              <Text style={homeStyles.textIcon}>Store Checkout</Text>
              <View  style={homeStyles.homeIcon2}>
              <Text style={homeStyles.textIcon}>
                <FontAwesome name="rupee" size={14} color="#fff" />2 near you
                <MaterialIcons name="keyboard-arrow-right" size={14} color="#fff" />
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={homeStyles.base}>
          <View style={{ flexDirection: "row", zIndex: 1 }}>
            <Text style={homeStyles.shapeText}>SimpliZen Gold Member</Text>
            <Text style={homeStyles.inText}>245 Pts</Text>
          </View>
          <View style={homeStyles.baseTop} />
          <View style={homeStyles.baseTop1} />
          <View style={homeStyles.baseBottom} />
        </View>
        <TopTabs />
        <View style={{ flexDirection: 'row', padding: 10, marginLeft: 10 }}>
          <Image source={{ uri: 'https://www.jiomart.com/images/product/420x420/590049328/amul-shrikhand-kesar-500-g-0-20210324.jpg' }}
            style={{ width: 120, height: 100 }}
          />
          <Image source={{ uri: 'https://www.jiomart.com/images/product/420x420/491092292/pro-nature-organic-raw-peanuts-500-g-0-20210305.jpg' }}
            style={{ width: 120, height: 100, marginLeft: 5 }}
          />
          <Image source={{ uri: 'https://www.jiomart.com/images/product/420x420/590309512/mango-kesar-4-pcs-box-approx-800-g-1200-g-0-20210422.jpg' }}
            style={{ width: 120, height: 100, marginLeft: 5 }}
          />
        </View>
        <View style={{ flexDirection: 'row', padding: 10, marginLeft: 10 }}>
          <Image source={{ uri: 'https://www.jiomart.com/images/product/420x420/590309512/mango-kesar-4-pcs-box-approx-800-g-1200-g-0-20210422.jpg' }}
            style={{ width: 120, height: 100 }}
          />
          <Image source={{ uri: 'https://www.jiomart.com/images/product/420x420/491092292/pro-nature-organic-raw-peanuts-500-g-0-20210305.jpg' }}
            style={{ width: 120, height: 100, marginLeft: 5 }}
          />
          <Image source={{ uri: 'https://www.jiomart.com/images/product/420x420/590049328/amul-shrikhand-kesar-500-g-0-20210324.jpg' }}
            style={{ width: 120, height: 100, marginLeft: 5 }}
          />
        </View>
        <View style={{ flex: 1, flexDirection: "column", backgroundColor: "#533D9D" }}>
          <Text style={homeStyles.heading}>NEVER RUN OUT {"\n"}OF GROCERY AGAIN!</Text>
          <Text style={homeStyles.list}>&#8226; Create a product list - yourself or with family</Text>
          <Text style={homeStyles.list}>&#8226; Select schedule - daily, weekly or set your own</Text>
          <Text style={homeStyles.list}>&#8226; Earn discount &#38; rewards</Text>

          <View style={homeStyles.shadow}>
            <Text style={homeStyles.shadowText}>Weekly | &nbsp;Monthly | &nbsp;Daily | &nbsp;Custom</Text>
          </View>
          <TouchableOpacity>
            <View style={homeStyles.button}>
              <MaterialCommunityIcons name="tab-plus" size={22} color="black" />
              <Text style={homeStyles.textButton}>
                &nbsp;Create New Subscription</Text>
            </View>
          </TouchableOpacity>
          <HomeTwo />
        </View>
        <HomeThree />
        <HomeFour />
        <HomeFive />
        <HomeSix />
      </View>
    </ScrollView>




  );
}

export default Home;

