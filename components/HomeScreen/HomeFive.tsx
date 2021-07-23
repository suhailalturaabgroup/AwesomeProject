import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView, TouchableWithoutFeedback, FlatList, StyleSheet, Image, Text, StatusBar } from 'react-native';
import { MaterialIcons, AntDesign, Feather, Ionicons, Octicons, MaterialCommunityIcons, FontAwesome5, FontAwesome, Foundation } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { LinearGradient } from "expo-linear-gradient";
import {styles} from '../stylesheet/homeFive'

const price = 95.5;
const price1 = 105;

const HomeFive = () => {
    const [loaded] = useFonts({
        suhail: require('../../assets/fonts/Montserrat-Regular.ttf'),
        myfonts: require('../../assets/fonts/Montserrat-SemiBold.ttf')
    });

    if (!loaded) {
        return null;
    }
    return (
        <View style={{ marginTop: 10 }}>
            <View style={{ backgroundColor: "#fff", padding: 20 }}>
                <LinearGradient style={styles.gradient} colors={["#FFC42E", "#FFC42E", "#FBD87F"]}>
                    <Text style={styles.text}>yor are a</Text>
                    <View style={styles.gradientIcon}>
                        <Text style={styles.gradientHeading}>SimpleZen Gold Member &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;245 pts</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={22} color="#000" />
                    </View>
                    <View style={{flex:1, flexDirection: 'row', paddingLeft: 0, marginLeft: 0 }}>
                        <View style={{flex:1, flexDirection: "column", alignItems: "center"}}>
                            <Text style={{marginTop:10, paddingLeft:5 }}>
                            <FontAwesome5 name="hand-holding" size={24} color="#fff" />
                                </Text>
                            <Text style={styles.gradientText}>Redeem{"\n"}Points</Text>
                        </View>
                        <View style={{flex:1, flexDirection: "column", alignItems: "center"}}>
                            <Text style={{marginTop:10, paddingLeft:5 }}>
                                <Ionicons style={{ textAlign: "center" }} name="wallet" size={24} color="#fff" /></Text>
                            <Text style={styles.gradientText}>Wallet{"\n"}Access</Text>
                        </View>
                        <View style={{flex:1, flexDirection: "column", alignItems: "center"}}>
                            <Text style={{marginTop:10, paddingLeft:5 }}>                                
                                <Ionicons style={{ textAlign: "center" }} name="cart" size={24} color="#fff" /></Text>
                            <Text style={styles.gradientText}>Earn 1.5 x{"\n"}Points</Text>
                        </View>
                    </View>
                </LinearGradient>

            </View>
            <View style={{ flexDirection: 'row', marginTop: 10, backgroundColor: "#fff", padding: 15 }}>
                <View>
                    <Text style={styles.subheading}>Season Special</Text>
                    <Text style={styles.subtext1}>Limited Products, By Now!</Text>
                    <View style={styles.viewAll}>
                            <Text style={styles.viewText}>ViewAll</Text>
                            <MaterialIcons name="keyboard-arrow-down" size={22} color="#27AE60" />
                        </View>
                </View>

                <View style={{ left: 50 }}>
                    <Image style={{ width: 150, height: 120 }} source={require('../../assets/img/beg.jpg')} />
                </View>
            </View>
            <ScrollView horizontal>
                <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#fff", padding: 8, margin: 8, marginTop: 0 }}>
                    <View style={styles.list3}>
                        <Text style={styles.discount}>33% OFF</Text>
                        <Image source={require('../../assets/img/kiwi.jpg')}
                            style={{ width: 150, height: 70, top: 20, alignSelf: "center" }}
                        />
                        <Text style={{ color: "#000", top: 30, fontSize: 16 }}>Namdhari Kiwi 100% fresh and new
                        </Text>
                        <View style={styles.icon}>
                            <Text style={styles.iconText}>250g{"\n"}</Text>
                            <MaterialIcons name="keyboard-arrow-down" size={22} color="#000" />
                        </View>
                        <View style={{ flexDirection: "row"}}>
                            <View style={{ flex: 2, flexDirection: "row", justifyContent: "flex-start" }}>
                                <Text style={{color: "#000", fontSize: 16, fontWeight: "bold" }}>
                                    <FontAwesome name="rupee" size={12} color="#000" />{price}{"\n"}
                                    <FontAwesome name="rupee" size={10} color="#000" />
                                    <Text style={{ fontSize: 12, fontWeight: "500", textDecorationLine: 'line-through' }}>{price1}</Text>
                                </Text>


                            </View>
                            <View style={{ flexDirection: "row", width: 120, justifyContent: "flex-start" }}>
                                <Text style={styles.iconBorderBlue}>
                                    <Feather name="layout" size={20} color="#5EBCF9" />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Text>
                                <Text style={styles.iconBorderGreen}>
                                    <AntDesign name="shoppingcart" size={20} color="#4ED36B" />
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.list4}>
                        <Text style={styles.discount}>33% OFF</Text>
                        <Image source={require('../../assets/img/dragon_fruit.jpg')}
                            style={{ width: 150, height: 70, top: 20, alignSelf: "center" }}
                        />
                        <Text style={{ color: "#000", top: 30, fontSize: 16 }}>Namdhari Dragon fruit fresh and new
                        </Text>
                        <View style={styles.icon}>
                            <Text style={styles.iconText}>250g{"\n"}</Text>
                            <MaterialIcons name="keyboard-arrow-down" size={22} color="#000" />
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flex: 2, flexDirection: "row", justifyContent: "flex-start", }}>
                                <Text style={{ color: "#000", fontSize: 16, marginTop: 0, fontWeight: "bold" }}>
                                    <FontAwesome name="rupee" size={12} color="#000" />{price}{"\n"}
                                    <FontAwesome name="rupee" size={10} color="#000" />
                                    <Text style={{ fontSize: 12, fontWeight: "500", textDecorationLine: 'line-through' }}>{price1}</Text>
                                </Text>
                            </View>
                            <View style={{ flexDirection: "row", width: 120, justifyContent: "flex-start" }}>
                                <Text style={styles.iconBorderBlue}>
                                    <Feather name="layout" size={20} color="#5EBCF9" />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Text>
                                <Text style={styles.iconBorderGreen}>
                                    <AntDesign name="shoppingcart" size={20} color="#4ED36B" />
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )

}



export default HomeFive;

