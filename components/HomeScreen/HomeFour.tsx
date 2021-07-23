import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView, TouchableWithoutFeedback, FlatList, StyleSheet, Image, Text, StatusBar } from 'react-native';
import { MaterialIcons, AntDesign, Feather, Ionicons, Octicons, MaterialCommunityIcons, FontAwesome5, FontAwesome, Foundation } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import {styles} from '../stylesheet/homeFour';

const price = 95.5;
const price1 = 105;

const HomeFour = () => {
    const [loaded] = useFonts({
        HomeFourMontserrat: require('../../assets/fonts/Montserrat-Regular.ttf')
    });

    if (!loaded) {
        return null;
    }
    return (
        <View>
            <View style={{ padding: 15, backgroundColor: "#fff" }}>
                <Text style={styles.heading}>Recommended for you</Text>
                <Text style={styles.text}>Based on your shopping history</Text>
            </View>
            <ScrollView horizontal>
                <View style={styles.list}>
                    <View style={styles.list3}>
                        <Text style={styles.discount}>33% OFF</Text>
                        <Image source={{ uri: 'https://www.jiomart.com/images/product/420x420/590003517/tomato-per-kg-0-20200710.jpg' }}
                            style={styles.img} />
                        <Text style={{ color: "#000", top: 30, fontSize: 16 }}>Tomato 100% Farm fresh
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
                        <Image source={{ uri: 'https://www.jiomart.com/images/product/420x420/590003517/tomato-per-kg-0-20200710.jpg' }}
                            style={styles.img} />
                        <Text style={{ color: "#000", top: 30, fontSize: 16 }}>Tomato 100% Farm fresh
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
            {/* List */}
            <View style={{ padding: 15, backgroundColor: "#fff" }}>
                <Text style={styles.heading}>Cheif's Recommendations</Text>
                <Text style={styles.text}>The best of the best culinary experience</Text>
            </View>
            <ScrollView horizontal>
                <View style={styles.list}>
                    <View style={styles.list3}>
                        <Text style={styles.discount}>33% OFF</Text>
                        <Image source={require('../../assets/img/MasalaPasta.jpg')}
                            style={styles.img}
                        />
                        <Text style={{ color: "#000", top: 30, fontSize: 16 }}>Macaroni Pasta
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
                        <Image source={require('../../assets/img/achraiPaneer.jpg')}
                            style={styles.img}
                        />
                        <Text style={{ color: "#000", top: 30, fontSize: 16 }}>Achari Paneer
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
            <View style={{backgroundColor: '#fff'}}>
            <Text style={styles.shop}>Shop By Brand</Text>
            <View style={{ flexDirection: "row", marginLeft: 6}}>
                <View style={styles.shadow}>
                    <Image source={require('../../assets/img/nestle-logo.png') }
                        style={styles.imgSize} />
                </View>
                <View style={styles.shadow}>
                <Image source={require('../../assets/img/dabar.png') }
                        style={styles.imgSize} />
                </View>
                <View style={styles.shadow}>
                <Image source={require('../../assets/img/parle.png') }
                        style={styles.imgSize} />
                </View>
            </View>

            
            <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 6 }}>
                <View style={styles.shadow}>
                <Image source={require('../../assets/img/nestle-logo.png') }
                        style={styles.imgSize} />
                </View>
                <View style={styles.shadow}>
                <Image source={require('../../assets/img/dabar.png') }
                        style={styles.imgSize} />
                </View>
                <View style={styles.shadow}>
                <Image source={require('../../assets/img/parle.png') }
                        style={styles.imgSize} />
                </View>
            </View>
            </View>

        </View>
    )

}

export default HomeFour;
