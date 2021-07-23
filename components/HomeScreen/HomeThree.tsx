import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView, TouchableWithoutFeedback, FlatList, StyleSheet, Image, Text, StatusBar } from 'react-native';
import { MaterialIcons, AntDesign, Feather, Ionicons, Octicons, MaterialCommunityIcons, FontAwesome5, FontAwesome, Foundation } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import {styles} from '../stylesheet/homeThree';

const price = 95.5;
const price1 = 105;

const HomeThree = () => {
    const [loaded] = useFonts({
        Home3Montserrat: require('../../assets/fonts/Montserrat-Regular.ttf')
      });
    
      if (!loaded) {
        return null;
      }
    return (
        <View>
            <View style={{ padding: 15, backgroundColor: "#fff" }}>
                <Text style={styles.text1}>From the House of</Text>
                <Text style={styles.heading}>namdharis</Text>
                <Text style={styles.text}>Experience Products crafted by us for you.</Text>

                <ScrollView horizontal>
                    <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
                        <View style={styles.list}>
                            <Text style={{ color: "#fff" }}>Thoughtful</Text>
                            <Text style={{ color: "#fff", top: 20 }}>100% posticide free range of products</Text>
                            <Text style={{ color: "#fff", marginTop: 40, fontWeight: "bold" }}>80+ Products</Text>
                            {/* <Image style={styles.img} source={require('../../assets/img/dairy-products.jpg')} /> */}
                        </View>
                        <View style={styles.list1}>
                            <Text style={{ color: "#fff" }}>DAIRY TALES</Text>
                            <Text style={{ color: "#fff", top: 20 }}>Real dairy products direct from farms</Text>
                            <Text style={{ color: "#fff", marginTop: 40, fontWeight: "bold" }}>40+ products</Text>
                        </View>
                        <View style={styles.list2}>
                            <Text style={{ color: "#fff" }}>Think Snaks</Text>
                            <Text style={{ color: "#fff", top: 20, fontWeight: "bold" }}>delicious & healthy snacking experience</Text>
                            <Text style={{ color: "#fff", marginTop: 40 }}>30+ products</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={{ flexDirection: 'row', backgroundColor: "#fff", padding: 15 }}>
                <View>
                    <Text style={styles.subheading}>Sale Corner</Text>
                    <Text style={styles.subtext1}>PRODUCTS UP TO <Text style={{ color: "#FF7612" }}>50% OFF</Text></Text>
                    <View style={styles.icon}>
                    <Text style={styles.subtext2}>View all
                    <MaterialIcons name="keyboard-arrow-right" size={22} color="green" />
                    </Text>

                    </View>
                    
                </View>

                <View style={{ left: 80 }}>
                    <Image style={{ width: 150, height: 120 }} source={require('../../assets/img/beg.jpg')} />
                </View>
            </View>
            <ScrollView horizontal>              
                    <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#fff", padding: 8, margin: 8, marginTop: 0 }}>
                    <View style={styles.list3}>
                            <Text style={styles.discount}>33% OFF</Text>
                            <Image source={{ uri: 'https://www.jiomart.com/images/product/420x420/590049328/amul-shrikhand-kesar-500-g-0-20210324.jpg' }}
                                style={{ width: 100, height: 80, top: 20, alignSelf: "center" }}
                            />
                            <Text style={{ color: "#000", top: 30, fontSize:16 }}>Namdhari Cashew 100% Fresh and new
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

                        <View style={styles.list4}>
                            <Text style={styles.discount}>33% OFF</Text>
                            <Image source={{ uri: 'https://www.jiomart.com/images/product/420x420/590049328/amul-shrikhand-kesar-500-g-0-20210324.jpg' }}
                                style={{ width: 100, height: 80, top: 20, alignSelf: "center" }}
                            />
                            <Text style={{ color: "#000", top: 30, fontSize:16 }}>Namdhari Cashew 100% Fresh and new
                            </Text>
                            <View style={styles.icon}>
                                <Text style={styles.iconText}>250g{"\n"}</Text>
                                <MaterialIcons name="keyboard-arrow-down" size={22} color="#000" />
                            </View>
                            
                            {/* {
                                price > 0   &&<Text>hello suhail</Text>
                            
                            } */}

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

export default HomeThree;

